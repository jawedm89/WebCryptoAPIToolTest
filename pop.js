let verstöße = [];
var entwicklerModus = document.getElementById('toggleswitch');
var Status = document.getElementById('EntwicklerModusStatus');
var popUpContent = document.getElementById('Ergebnis');
var info = document.getElementById('info')
var an;

browser.tabs.query({
    currentWindow: true,
    active: true
    }).then(sendMessageToTabs);

browser.runtime.onMessage.addListener((request) => {
    if (request.Ergebnis && request.Ergebnis.length > 0) {
        info.innerText = "Auf der aktuellen Seite kommt es zu folgenden Verstößen: "
        request.Ergebnis.forEach(element => {
            if (element.verstöße.length > 0) {
                verstöße.push(element);
            }
            else {
                info.innerText = "Alle kryptographischen Regeln bei der nutzungder Web Crypto API werden auf der aktuellen Seite eingehalten"
            }
        });
    }
    browser.storage.local.get("Modus").then(got, onError);
})


function onError(error) {
    browser.storage.local.set({ Modus: { stat: false } })
}

function got(mod) {
    if (mod.Modus.stat === true) {
        entwicklerModus.checked = true;
        Status.innerHTML = "aktiviert"
        entwicklerContent();
    }
    else {
        normalerContent();
    }
}

entwicklerModus.addEventListener('change', function () {
    if (this.checked) {
        browser.storage.local.set({ Modus: { stat: true } })
        Status.innerHTML = "aktiviert";
        an = true;
        entwicklerContent();
    } else {
        browser.storage.local.set({ Modus: { stat: false } })
        Status.innerHTML = "deaktiviert";
        an = false;
        normalerContent();
    }
});


function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id,
            { click: "Sendeanfrage der Regelverstöße" }
        )
    }
}

function entwicklerContent() {
    popUpContent.innerHTML = "";
    for(let i = 0; i < verstöße.length; i++) {
        if (verstöße[i].verstöße.length > 0) {
            let content = document.createElement("div");
            content.className = "Content";
            popUpContent.appendChild(content);
        }
    }
    const divs = document.getElementsByClassName('Content');
    for (let i = 0; i < verstöße.length; i++) {
        divs[i].innerHTML = "";
        let script = document.createElement('div');
        script.className = "scriptContent";
        let scriptContent = verstöße[i].script;
        let newHTML;
        const openingTag = '<span style="Background-color:yellow" id="';
        const closingTag = '</span>'
        let descrition = document.createElement('div');
        for (let j = 0; j < verstöße[i].verstöße.length; j++) {
            if (j === 0) {
                x = 0;
            }
            else {
                x = verstöße[i].verstöße[j - 1][0].end;
            }
            let idTag = 'scrollToPostion' + i + ',' + j;
            newHTML = newHTML + scriptContent.slice(x, verstöße[i].verstöße[j][0].start)
                + openingTag + idTag + '">' + scriptContent.substring(verstöße[i].verstöße[j][0].start, verstöße[i].verstöße[j][0].end) + closingTag;
            let para = document.createElement('p');
            para.className = "verstoßBeschreibung"
            para.innerHTML = '<a href="#' + idTag + '">' + (j+1) +'. Markeirte Stelle:</a>' + verstöße[i].verstöße[j][1];
            descrition.appendChild(para);
            if (j + 1 === verstöße[i].verstöße.length) {
                newHTML = newHTML + scriptContent.slice(verstöße[i].verstöße[j][0].end);
            }
        } 
        script.innerHTML = newHTML;
        divs[i].appendChild(script);
        descrition.className = "description";
        divs[i].appendChild(descrition);
    } 
}

function normalerContent() {
    popUpContent.innerHTML = "";
    let verstoßAnzahl = 1
    for(let i = 0; i < verstöße.length; i++) {
        verstöße[i].verstöße.forEach(element => {
            let verstoß = document.createElement('p');
            verstoß.innerText = verstoßAnzahl    + ". Verstoß: " + element[1];
            popUpContent.appendChild(verstoß);
            verstoßAnzahl++;
        })
    }
}
