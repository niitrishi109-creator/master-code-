
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const setupPanel = $("setupPanel");
  const playerForm = $("playerForm");
  const playerInput = $("playerInput");
  const playerList = $("playerList");
  const gameMode = $("gameMode");
  const intensity = $("intensity");
  const startBtn = $("startBtn");
  const setupMessage = $("setupMessage");

  const gamePanel = $("gamePanel");
  const editPlayersBtn = $("editPlayersBtn");
  const currentAvatar = $("currentAvatar");
  const currentPlayer = $("currentPlayer");
  const turnInfo = $("turnInfo");
  const spinBtn = $("spinBtn");
  const truthBtn = $("truthBtn");
  const dareBtn = $("dareBtn");

  const challengeBox = $("challengeBox");
  const challengeType = $("challengeType");
  const challengeText = $("challengeText");
  const skipBtn = $("skipBtn");
  const completeBtn = $("completeBtn");

  const roundCount = $("roundCount");
  const completedCount = $("completedCount");
  const toast = $("toast");

  const SAVE_KEY = "hinglishTruthDareSave_v1";

  const avatars = [
    "😎", "🦊", "🐼", "🐯", "🐸",
    "🐵", "🐨", "🐻", "🦄", "🐙",
    "🐱", "🐶", "🐰", "🐲", "👑"
  ];

  let players = [];
  let currentPlayerIndex = 0;
  let round = 1;
  let completedChallenges = 0;
  let currentChallenge = null;
  let toastTimer = null;

  const usedChallenges = {
    truth: new Set(),
    dare: new Set()
  };

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function saveGame() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        players,
        currentPlayerIndex,
        round,
        completedChallenges,
        usedChallenges: {
          truth: [...usedChallenges.truth],
          dare: [...usedChallenges.dare]
        }
      }));
    } catch (error) {
      console.warn("Game save nahi ho paaya:", error);
    }
  }

  function loadGame() {
    try {
      const saved = localStorage.getItem(SAVE_KEY);
      if (!saved) return;

      const data = JSON.parse(saved);

      if (!Array.isArray(data.players)) return;

      players = data.players.filter(
        p => p && typeof p.name === "string"
      );

      if (players.length === 0) return;

      currentPlayerIndex =
        Math.max(0, Number(data.currentPlayerIndex) || 0)
        % players.length;

      round = Math.max(1, Number(data.round) || 1);

      completedChallenges = Math.max(
        0,
        Number(data.completedChallenges) || 0
      );

      usedChallenges.truth = new Set(
        data.usedChallenges?.truth || []
      );

      usedChallenges.dare = new Set(
        data.usedChallenges?.dare || []
      );

      renderPlayers();
      updateStats();

      setupMessage.textContent =
        "Purane players mil gaye! Chaaho toh game dobara shuru kar sakte ho.";
    } catch (error) {
      console.warn("Purana game load nahi ho paaya:", error);
    }
  }

  function renderPlayers() {
    playerList.innerHTML = "";

    players.forEach((player, index) => {
      const chip = document.createElement("div");
      chip.className = "player-chip";

      const name = document.createElement("span");
      name.textContent = `${player.avatar} ${player.name}`;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.textContent = "×";
      removeBtn.setAttribute(
        "aria-label",
        `${player.name} ko hatao`
      );

      removeBtn.addEventListener("click", () => {
        players.splice(index, 1);

        if (players.length === 0) {
          currentPlayerIndex = 0;
        } else {
          currentPlayerIndex %= players.length;
        }

        renderPlayers();
        saveGame();
      });

      chip.append(name, removeBtn);
      playerList.appendChild(chip);
    });
  }

  function addPlayer(name) {
    const cleanName = name.trim();

    if (!cleanName) {
      showToast("Bhai, pehle naam toh likho! 😅");
      return false;
    }

    if (players.length >= 15) {
      showToast("Maximum 15 players hi jod sakte ho.");
      return false;
    }

    const exists = players.some(
      p => p.name.toLowerCase() === cleanName.toLowerCase()
    );

    if (exists) {
      showToast("Ye naam pehle se list mein hai!");
      return false;
    }

    players.push({
      name: cleanName,
      avatar: avatars[players.length % avatars.length]
    });

    renderPlayers();
    saveGame();

    return true;
  }

  function updateStats() {
    roundCount.textContent = round;
    completedCount.textContent = completedChallenges;
  }

  function getPool(type) {
    if (type === "truth") {
      return Array.isArray(window.truthQuestions)
        ? window.truthQuestions
        : [];
    }

    return Array.isArray(window.dareQuestions)
      ? window.dareQuestions
      : [];
  }

  function getChallenge(type) {
    const pool = getPool(type);

    if (pool.length === 0) {
      showToast(
        "Questions load nahi hue! questions.js file check karo."
      );
      return null;
    }

    let available = pool
      .map((text, index) => ({ text, index }))
      .filter(item => !usedChallenges[type].has(item.index));

    if (available.length === 0) {
      usedChallenges[type].clear();

      available = pool.map((text, index) => ({
        text,
        index
      }));
    }

    // Masti ka level select karne par pool badlega.
    const selected = available[
      Math.floor(Math.random() * available.length)
    ];

    usedChallenges[type].add(selected.index);

    return {
      type,
      text: selected.text,
      index: selected.index
    };
  }

  function setChallenge(type) {
    if (players.length < 2) {
      showToast("Kam se kam 2 players hone chahiye!");
      return;
    }

    currentChallenge = getChallenge(type);

    if (!currentChallenge) return;

    challengeBox.classList.remove("hidden");

    challengeType.textContent =
      type === "truth"
        ? "💜 SACH BATAO"
        : "💗 CHALLENGE LO";

    challengeText.textContent = currentChallenge.text;

    completeBtn.disabled = false;
    skipBtn.disabled = false;

    truthBtn.classList.toggle("active", type === "truth");
    dareBtn.classList.toggle("active", type === "dare");

    saveGame();
  }

  function updateTurn() {
    if (!players.length) return;

    const player = players[currentPlayerIndex];

    currentPlayer.textContent = player.name;
    currentAvatar.textContent = player.avatar;

    turnInfo.textContent =
      `Player ${currentPlayerIndex + 1} / ${players.length} ki baari`;

    challengeBox.classList.add("hidden");

    truthBtn.classList.remove("active");
    dareBtn.classList.remove("active");

    currentChallenge = null;
  }

  function nextPlayer() {
    if (players.length < 2) return;

    currentPlayerIndex++;

    if (currentPlayerIndex >= players.length) {
      currentPlayerIndex = 0;
      round++;
    }

    updateTurn();
    updateStats();
    saveGame();
  }

  // Naam jodne wala button
  playerForm.addEventListener("submit", event => {
    event.preventDefault();

    if (addPlayer(playerInput.value)) {
      playerInput.value = "";
      playerInput.focus();
      setupMessage.textContent = "";
    }
  });

  // Game shuru karo
  startBtn.addEventListener("click", () => {
    if (players.length < 2) {
      setupMessage.textContent =
        "Game ke liye kam se kam 2 players ke naam jodo.";
      showToast("Pehle 2 ya usse zyada players jodo! 😎");
      return;
    }

    setupPanel.classList.add("hidden");
    gamePanel.classList.remove("hidden");

    updateTurn();
    updateStats();

    showToast("Game shuru! Ab hogi asli masti! 🎉");
    saveGame();
  });

  // Wheel ghumao
  spinBtn.addEventListener("click", () => {
    if (players.length < 2) {
      showToast("Pehle game shuru karo!");
      return;
    }

    spinBtn.disabled = true;
    spinBtn.textContent = "🎡 Ghoom raha hai...";

    setTimeout(() => {
      const type = Math.random() < 0.5 ? "truth" : "dare";

      setChallenge(type);

      spinBtn.disabled = false;
      spinBtn.textContent = "🎡 Ghumao Aur Dekho!";
    }, 900);
  });

  // Sach wala button
  truthBtn.addEventListener("click", () => {
    setChallenge("truth");
  });

  // Dare wala button
  dareBtn.addEventListener("click", () => {
    setChallenge("dare");
  });

  // Challenge chhodo
  skipBtn.addEventListener("click", () => {
    if (!currentChallenge) {
      showToast("Pehle Sach ya Dare chuno!");
      return;
    }

    nextPlayer();
    showToast("Theek hai, chalo ab agle ki baari! 😎");
  });

  // Challenge poora hua
  completeBtn.addEventListener("click", () => {
    if (!currentChallenge) {
      showToast("Pehle koi challenge chuno!");
      return;
    }

    completedChallenges++;

    nextPlayer();

    showToast("Waah bhai! Challenge poora ho gaya! 🎉");
  });

  // Players edit karo
  editPlayersBtn.addEventListener("click", () => {
    setupPanel.classList.remove("hidden");
    gamePanel.classList.add("hidden");

    renderPlayers();
    saveGame();
  });

  // Purana game load karo
  loadGame();
  renderPlayers();
  updateStats();
});
