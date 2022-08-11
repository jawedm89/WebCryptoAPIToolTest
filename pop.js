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
            let button = document.createElement("button");
            var text = document.createElement("textarea");
            text.cols = "70";
            text.rows = "5";
            text.wrap = "off";
            text.disabled = true;
            button.textContent = "Script anzeigen";
            button.addEventListener('click', function() {
                text.className = "test";
                /* 
                element.regel1.forEach(elem => {
                    text.setSelectionRange(0, 30)
                }); */
                text.value = (element.script);
                neu.appendChild(text);
            });
            neu.textContent = "es gab im folgenden Script ein API Call: " + element.src + ", an den stellen: " + element.regel1.join(', ')
            divi.appendChild(neu);
            divi.appendChild(button);
        });
    }
});