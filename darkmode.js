const darkModeToggle = document.querySelector('#dark-mode-toggle');


const toggleDarkmode = () => {
    const darkMode = localStorage.getItem("darkmodeSetting"); 
  
    // Invert language setting
    newSetting = darkMode === "enabled" ? null : "enabled";
    localStorage.setItem("darkmodeSetting", newSetting);
  
    applyDarkmodeSetting();
  }


  const applyDarkmodeSetting = () => {
    const language = localStorage.getItem("darkmodeSetting"); 
  
    // Change language to English or Dutch on webpage
    if (language === "enabled"){
      document.body.classList.add("darkmodeSetting");
      document.getElementById("darkmode-toggle").className = "em em-new_moon";
    
    } else {
      document.body.classList.remove("darkmodeSetting");
      document.getElementById("darkmode-toggle").className = "em em-bulb";
    }

    
  }


// Run on init
applyDarkmodeSetting();
