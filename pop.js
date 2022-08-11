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
let clicked = false;

browser.runtime.onMessage.addListener((request) => {
    if (request.Ergebnis) {
        request.Ergebnis.forEach(element => {
            let divi = document.getElementById("divi");
            let neu = document.createElement("div");
            let neu2 = document.createElement("div");
            let button = document.createElement("button");
            var text = document.createElement("textarea");
            text.cols = "70";
            text.rows = "5";
            text.wrap = "off";
            text.className = "test";
            text.value = (element.script);
            button.textContent = "Script anzeigen";
            neu.textContent = "es gab im folgenden Script ein API Call: " + element.src + ", an den stellen: " + element.regel1.join(', ')
            divi.appendChild(neu);
            divi.appendChild(button);
            neu.appendChild(neu2);
            button.addEventListener('click', function () {
                neu2.appendChild(text);
                button.disabled = true;
                let ar = [];
                element.regel1.forEach(elem => {
                    ar.push([elem, elem + 28])
                });
                $('.test').highlightWithinTextarea({
                    highlight: ar
                });
                //$('.test').highlightWithinTextarea('update');
            });
        });
        //$('.test').highlightWithinTextarea('update');
        //text.disabled = true;
    }
});