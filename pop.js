function sendMessageToTabs(tabs) {
    for (let tab of tabs) {

        browser.tabs.sendMessage(
            tab.id,
            { click: "Hi from background script" }
        )
    }
}

let a = document.getElementById("butti");
a.addEventListener("click", function () {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs);
});

browser.runtime.onMessage.addListener((request) => {
    if (request.Ergebnis) {
        request.Ergebnis.forEach(element => {
            let divi = document.getElementById("divi");
            let neu = document.createElement("div");
            neu.textContent = "es gab im folgenden Script ein API Call: " + element.src + ", an den stellen: " + element.regel1.join(', ')
            divi.appendChild(neu);
        });
    }
});