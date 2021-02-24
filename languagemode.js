const languageToggle = document.querySelector('#language-toggle');

const text = {
  "subtitleText": {
    "en": "beep",
    "nl": "boop"
  },
  "recentDescriptionText": {
    "en": "Recently I started an Intership at Onyx Cybersecurity. \n Currently Im working on expanding and developing this website. Im somewhat new to webdevelopment and exploring the possibilities.",
    "nl": "Recentelijk ben ik gestart met een stage bij Onyx Cybersecurity \n De laatste tijd ben ik als tijdverdrijf bezig met het leren van webdeveloping. Ik ben nog redelijk nieuw in dit gebied en ben druk bezig de mogelijkheden te verkennen."
  },
  "aboutmeText": {
    "en": "My name is Wilco Matthijssen and I am a 21 year old computer science student at the Hogeschool Utrecht. I enjoy developing backend solutions and prefer working with Python and C++. To get a glimpse of what I'm capable of please look at my projects on GitHub.",
    "nl": "Mijn naam is Wilco Matthijssen en ik ben een 21 jaar oude technisch informatica student aan de Hogeschool Utrecht. Ik heb heel veel plezier in het ontwikkelen van backend oplossen en werk graag met Python en C++. Om een blik te krijgen over wat ik allemaal kan en mee bezig ben verwijs ik je naar mijn GitHub."
  },
  "recentTitleText": {
    "en": "Recent",
    "nl": "Recent"
  },
  "aboutmeTitleText": {
    "en": "About me",
    "nl": "About me"
  },
  "projectsTitleText": {
    "en": "My projects",
    "nl": "Mijn projecten"
  },
  "tempsensorLinkText":{
    "en": "Temperature sensor",
    "nl": "Temperature sensor"
  },
  "tempsensorDescriptionText":{
    "en": "An Arduino library made for the Si702X sensors. With this library it's possible to read the temperature in more formats you knew existed.",
    "nl": "Een Arduino library gemaakt voor Si702X sensors. Met deze library kan je de temperatuur uitlezen in meer formats dan je ooit wist dat er bestaan!"
  },
  "riotbotLinkText":{
    "en": "RiotBot",
    "nl": "RiotBot"
  },
  "riotbotDescriptionText":{
    "en": "A Discord bot made with Riots League of Legends API. This Discord bot allows you to get information directly from the League of Legends API.",
    "nl": "Een Discord bot gemaakt met Riots League of Legends API. Met deze Discord bot kan je informatie opvragen van de League of Legends API."
  },
  "subnetcalcLinkText":{
    "en": "Subnet calculator",
    "nl": "Subnet calculator"
  },
  "subnetcalcDescriptionText":{
    "en": "A Windows application to calculate your subnets. Calculate how big your subnet needs to be for the given amount of users and more!",
    "nl": "Een Windows applicatie om subnets mee te berekenen. Bereken hoe groot je subnet moet zijn het aantal gebruikers je wilt ondersteunen en meer!"
  }
}


const toggleLanguage = () => {
  const language = localStorage.getItem("languageSetting"); 

  // Invert language setting
  newSetting = language === "en" ? null : "en";
  localStorage.setItem("languageSetting", newSetting);

  applyLanguageSetting();
}


const applyLanguageSetting = () => {
  const language = localStorage.getItem("languageSetting"); 

  // Change language to English or Dutch on webpage
  if (language === "en"){
    document.body.classList.add("languageSetting");
    document.getElementById("language-toggle").className = "em em-gb";

    for (const [key, value] of Object.entries(text)) {
      document.getElementById(key).textContent = value["en"];
    };

  } else {
    document.body.classList.remove("languageSetting");
    document.getElementById("language-toggle").className = "em em-flag-nl";

    for (const [key, value] of Object.entries(text)) {
      document.getElementById(key).textContent = value["nl"];
    };
  }

 
}


// Run on init
applyLanguageSetting();
