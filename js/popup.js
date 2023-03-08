window.onload =  function(){
    const extlang_name = document.getElementById("extlang_name");
    const extlang_value = document.getElementById("extlang_value");
    const extver_name = document.getElementById("extver_name");
    const extver_value = document.getElementById("extver_value");
    const extdwnload_name = document.getElementById("extdwnload_name");

    extlang_name.innerText = chrome.i18n.getMessage("extPopup_ExtLocaleName");
    extlang_value.innerText = chrome.i18n.getMessage("extPopup_ExtLocaleValue");
    extver_name.innerText = chrome.i18n.getMessage("extPopup_ExtVersionName");
    extver_value.innerText = chrome.i18n.getMessage("extPopup_ExtVersionValue");
    extdwnload_name.innerText = chrome.i18n.getMessage("extPopup_ExtDownloadHere");
};