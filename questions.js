
const truthQuestions = [
  // Doston wale sawaal 😈
  "Is group mein tera sabse favourite dost kaun hai?",
  "Tera sabse bada secret kya hai?",
  "Tune aaj tak ka sabse bada jhooth kya bola hai?",
  "Tera pehla crush kaun tha?",
  "Kya tune kabhi kisi ka message jaanbujhkar ignore kiya hai?",
  "Is group mein sabse funny kaun hai?",
  "Teri sabse embarrassing memory kya hai?",
  "Tune aaj tak sabse ajeeb harkat kya ki hai?",
  "Kya tune kabhi homework ya kaam ke liye jhootha bahana banaya hai?",
  "Tujhe sabse zyada gussa kis baat par aata hai?",
  "Teri sabse buri aadat kya hai?",
  "Tera sabse bada darr kya hai?",
  "Kya tune kabhi kisi ka secret aage bataya hai?",
  "Is group mein sabse zyada nautanki kaun karta hai?",
  "Teri life ka sabse funny moment kya tha?",
  "Tujhe apne baare mein sabse achhi baat kya lagti hai?",
  "Kya tune kabhi kisi ko impress karne ke liye jhooth bola hai?",
  "Tera sabse favourite gaana kaunsa hai?",
  "Tujhe sabse zyada kis cheez ki tension rehti hai?",
  "Agar ek din ke liye invisible ho jaaye toh kya karega?",
  "Tera sabse ajeeb nickname kya hai?",
  "Kya tune kabhi galti se galat insaan ko message bheja hai?",
  "Teri sabse badi wish kya hai?",
  "Tujhe sabse zyada kis baat par sharm aati hai?",
  "Agar tujhe ek superpower mile toh kya choose karega?",
  "Teri life ka sabse yaadgaar din kaunsa hai?",
  "Kya tune kabhi bina wajah kisi se jealousy feel ki hai?",
  "Tere phone mein sabse zyada kaunsa app use hota hai?",
  "Teri sabse funny school ya college memory kya hai?",
  "Agar abhi kahin ghoomne ja sake toh kahan jaayega?",

  // Couples wale sawaal ❤️
  "Tere hisaab se perfect date kaisi honi chahiye?",
  "Kisi mein sabse pehle kya notice karta hai?",
  "Kya tujhe kabhi kisi par secret crush raha hai?",
  "Tere liye pyaar ka asli matlab kya hai?",
  "Tujhe cute messages pasand hain ya face-to-face baatein?",
  "Kisi ko pasand karne par tu kaise react karta hai?",
  "Tere liye sabse romantic cheez kya hai?",
  "Kya tu pehle propose karega ya saamne wale ka wait karega?",
  "Tujhe apne partner mein sabse achhi quality kya chahiye?",
  "Tere liye loyalty kitni important hai?",
  "Tujhe surprise pasand hai ya planned date?",
  "Tere hisaab se relationship mein trust ka kya matlab hai?",
  "Kya tu apni feelings aasani se bata pata hai?",
  "Tere liye sabse cute compliment kya ho sakta hai?",
  "Dream date ke liye kaunsi jagah choose karega?",
  "Tujhe long calls pasand hain ya chhoti-chhoti chats?",
  "Tere hisaab se pyaar dikhane ka best tareeka kya hai?",
  "Kya tu jaldi attach ho jaata hai?",
  "Tere liye ek achhe partner ki sabse zaroori quality kya hai?",
  "Agar apne special person ko ek gift de sake toh kya dega?",

  // Extra fun questions 😂
  "Agar teri life film hoti toh uska naam kya hota?",
  "Agar tu ek din ke liye celebrity ban jaaye toh kya karega?",
  "Teri sabse useless talent kya hai?",
  "Kaunsa gaana tu chupke se enjoy karta hai?",
  "Kya tu kabhi akele mein khud se baatein karta hai?",
  "Tera sabse bada dream kya hai?",
  "Agar lottery lag jaaye toh sabse pehle kya khareedega?",
  "Tujhe apni kaunsi aadat badalni hai?",
  "Agar time machine mile toh past mein jaayega ya future mein?",
  "Tere dost tujhe teen words mein kaise describe karenge?",
  "Tera favourite food kya hai?",
  "Kis baat par tu sabse zyada proud feel karta hai?",
  "Tujhe kis baat par turant hasi aa jaati hai?",
  "Agar apni life ka ek decision badal sake toh kaunsa badlega?",
  "Teri dream job kya hai?",
  "Kya tu kabhi kisi ki baat sunkar bina reason hansa hai?",
  "Tujhe sabse zyada kaun motivate karta hai?",
  "Agar poori duniya mein ek jagah rehni ho toh kahan rahega?",
  "Teri sabse funny misunderstanding kya thi?",
  "Aaj tak mila sabse achha compliment kya tha?"
];

const dareQuestions = [
  // Funny dares 😂
  "10 second tak apna sabse funny dance kar!",
  "Apni favourite movie ka dialogue bol!",
  "Kisi cartoon character ki awaaz nikaal!",
  "20 second tak bina hase serious face bana!",
  "Apne bagal wale ki tareef kar!",
  "Ek funny joke suna!",
  "Robot ki tarah chal kar dikha!",
  "Apna best model walk karke dikha!",
  "Apni favourite song ki do lines gaa!",
  "Aankhon aur expressions se surprise dikhakar bata!",
  "Ek minute tak news reporter bankar bol!",
  "Apna sabse funny selfie pose bana!",
  "Kisi celebrity ki acting karke dikha!",
  "Apne naam ka funny rhyme bana!",
  "10 second tak slow motion mein chal!",
  "Ek imaginary phone call karke dikha!",
  "Apni best villain wali hasi nikaal!",
  "Ek animal ki acting karke dikha!",
  "Aise act kar jaise lottery lag gayi ho!",
  "Ek filmy dialogue full drama ke saath bol!",
  "Apna victory dance karke dikha!",
  "Bina music ke dance kar!",
  "Ek tongue twister teen baar bol!",
  "Aise act kar jaise tu teacher hai!",
  "Apne group ke liye ek funny slogan bana!",
  "Apne aap ko superhero samajhkar introduction de!",
  "10 second tak funny face bana!",
  "Apne favourite actor ka style copy kar!",
  "Ek imaginary cooking show host kar!",
  "Apni life ka funny advertisement bana!",

  // Friends dares 😎
  "Group ke har player ko ek achhi baat bol!",
  "Apne right wale player ko ek funny title de!",
  "Agli baari tak funny nickname accept kar!",
  "Sabko ek motivational dialogue suna!",
  "Apne bachpan ki ek funny story suna!",
  "Ek gaana humming karke suna, baaki guess karenge!",
  "Apne favourite dost ki achhi quality bata!",
  "Group ke saath ek funny pose bana!",
  "Apni best acting se sabko hasaane ki koshish kar!",
  "Apne favourite meme ko act karke dikha!",
  "Ek imaginary award jeetne ki speech de!",
  "Agle 20 second tak sports commentator bankar bol!",
  "Ek naya handshake invent kar!",
  "Apne naam ka rap bana!",
  "Ek funny poem suna!",
  "Aise react kar jaise exam mein full marks aa gaye!",
  "Apni best surprised expression dikha!",
  "Ek imaginary audience ko speech de!",
  "Apni favourite hobby ko bina bole act kar!",
  "Apne group ka movie poster pose bana!",

  // Couples dares 💗
  "Apne special person ki teen achhi qualities bata!",
  "Ek cute romantic dialogue bol!",
  "Apni dream date describe kar!",
  "Ek pyaara sa compliment kisi player ko de!",
  "Ek romantic gaana hum karke suna!",
  "Apne partner ke liye imaginary love letter ki pehli line bol!",
  "Apni best shy smile dikha!",
  "Ek filmy proposal scene act kar, agar sab comfortable hon!",
  "Apne special person ke liye ek cute nickname soch!",
  "Pyaar par ek shayari suna!",
  "Ek cute good morning message bolkar suna!",
  "Apni dream anniversary celebration describe kar!",
  "Ek romantic movie ka scene act kar!",
  "Apni favourite love song ka naam bata aur uski line gaa!",
  "Ek sweet appreciation message bol!",
  "Apni perfect date ka invitation bana!",
  "Ek cute sa heart pose bana!",
  "Pyaar par ek funny dialogue bol!",
  "Ek imaginary gift dekar uska description bata!",
  "Kisi special person ko bhejne layak ek sweet message bana!"
];

// Kuch aur prompts combinations se generate karna
const extraTruthTopics = [
  "teri sabse badi achievement",
  "tera dream vacation",
  "teri favourite childhood memory",
  "tera secret talent",
  "tera favourite insaan",
  "teri sabse funny galti",
  "tera ideal weekend",
  "teri sabse badi motivation",
  "teri favourite quality",
  "tera sabse awkward moment"
];

const extraTruthFrames = [
  "Tere liye {topic} kya hai?",
  "Tujhe {topic} ke baare mein sabse khaas kya lagta hai?",
  "Agar {topic} ke baare mein ek baat batani ho toh kya bataayega?",
  "Teri {topic} se judi sabse yaadgaar baat kya hai?",
  "Tu {topic} ko 1 se 10 tak kitna rate karega?"
];

const extraDareActions = [
  "apna funniest expression bana",
  "ek filmy dialogue bol",
  "apni favourite cheez describe kar",
  "ek funny dance move kar",
  "ek cute compliment de",
  "ek chhoti shayari suna",
  "ek funny character ki acting kar",
  "ek imaginary award speech de",
  "ek gaana hum kar",
  "apna best hero pose bana"
];

const extraDareStyles = [
  "full drama ke saath!",
  "10 second mein!",
  "bina hase!",
  "slow motion mein!",
  "jaise film ka hero ho!",
  "news reporter ki tarah!",
  "sabse funny style mein!",
  "jaise stage par perform kar raha ho!",
  "apni serious voice mein!",
  "ek grand pose ke saath!"
];

function uniqueList(items) {
  return [...new Set(items)];
}

function makeExtraTruths() {
  const result = [];

  for (const topic of extraTruthTopics) {
    for (const frame of extraTruthFrames) {
      result.push(frame.replaceAll("{topic}", topic));
    }
  }

  return result;
}

function makeExtraDares() {
  const result = [];

  for (const action of extraDareActions) {
    for (const style of extraDareStyles) {
      result.push(`${action}, ${style}`);
    }
  }

  return result;
}

window.truthQuestions = uniqueList([
  ...truthQuestions,
  ...makeExtraTruths()
]);

window.dareQuestions = uniqueList([
  ...dareQuestions,
  ...makeExtraDares()
]);

console.log("Sach wale sawaal:", window.truthQuestions.length);
console.log("Dare wale challenges:", window.dareQuestions.length);
