let verstöße = [];
var entwicklerModus = document.getElementById('toggleswitch');
var PopUpAlert = document.getElementById('toggleswitch2');
var Status = document.getElementById('EntwicklerModusStatus');
var Alert = document.getElementById('PopUpStatus');
var popUpContent = document.getElementById('Ergebnis');
var info = document.getElementById('info')
var an;

let inf = document.createElement('button');
inf.textContent = "Info"
inf.onclick = function() {buttonShow("halllo esdasd")};

popUpContent.appendChild(inf);


browser.tabs.query({
    currentWindow: true,
    active: true
}).then(sendMessageToTabs);

browser.runtime.onMessage.addListener((request) => {
    if (request.Ergebnis && request.Ergebnis.length > 0) {
        info.innerText = "Auf der aktuellen Seite kommt es zu folgenden Verstößen: ";
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
browser.storage.local.get("Alert").then(got2, onError2);

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

function onError2(error) {
    browser.storage.local.set({ Alert: { stat: false } })
}

function got2(alert) {
    if (alert.Alert.stat === true) {
        PopUpAlert.checked = true;
        Alert.innerHTML = "aktiviert"
    }
}

PopUpAlert.addEventListener('change', function () {
    if (this.checked) {
        browser.storage.local.set({ Alert: { stat: true } })
        Alert.innerHTML = "aktiviert";
    }
    else {
        browser.storage.local.set({ Alert: { stat: false } });
        Alert.innerHTML = "deaktiviert";
    }
});

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
    for (let i = 0; i < verstöße.length; i++) {
        if (verstöße[i].verstöße.length > 0) {
        }
    }
    const divs = document.getElementsByClassName('Content');
    for (let i = 0; i < verstöße.length; i++) {
        if (verstöße[i].verstöße.length > 0) {
            let source = document.createElement('p');
            if (verstöße[i].src != "") {
                source.innerHTML = "Im folgenden Script kommt es zu den unten genannten Regelverstößen: <b>" + verstöße[i].src + "</b>";
            }
            else {
                source.innerHTML = "In unten Angezeigten Script aus dem HTML Body kommt es zu den unten genannten Regelverstößen:";
            }
            source.className = "source";
            let content = document.createElement("div");
            let holder = document.createElement('div');
            let script = document.createElement('pre');
            let lines = document.createElement('pre');
            let linesdiv =  document.createElement('div');
            let scriptdiv =  document.createElement('div');
            let scriptContent = verstöße[i].script;
            let newHTML = "";
            const openingTag = '<span class="markierungen" style="Background-color:yellow" id="';
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
                let mehrInfos = document.createElement('img');
                mehrInfos.src = "information.png";
                mehrInfos.style.height = '16px';
                mehrInfos.style.width = '16px';
                mehrInfos.style.paddingLeft = '10px';
                mehrInfos.style.paddingTop = '5px';
                let button = document.createElement('button');
                button.textContent = "Zur Markierung"
                button.onclick = async function () { let markirung = document.getElementById(idTag); markirung.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); markirung.style.backgroundColor = "red"; await delay(1000); markirung.style.backgroundColor = "yellow"; }
                let para = document.createElement('p');
                let infoBox = document.createElement('div');
                mehrInfos.onmouseover = function () {buttonShow(verstöße[i].verstöße[j][2], infoBox); para.appendChild(infoBox)};
                mehrInfos.onmouseleave = function () {infoBox.style.display = "none"}
                para.className = "verstoßBeschreibung"
                para.innerHTML = (j + 1) + '. Markierte Stelle:' + verstöße[i].verstöße[j][1] + "  <br>";
                para.appendChild(button);
                para.appendChild(mehrInfos);
                descrition.appendChild(para);
                if (j + 1 === verstöße[i].verstöße.length) {
                    newHTML = newHTML + scriptContent.slice(verstöße[i].verstöße[j][0].end);
                }
            }
            script.innerHTML = newHTML;
            holder.className = "scriptContent";
            descrition.className = "description";
            lines.className = "lines";
            script.className = "script"
            content.appendChild(source);
            linesdiv.appendChild(lines);
            scriptdiv.appendChild(script);
            holder.appendChild(linesdiv);
            holder.appendChild(scriptdiv);
            content.appendChild(holder);
            content.appendChild(descrition);
            content.className = "Content";
            popUpContent.appendChild(content);
            const codeHeight = script.offsetHeight;
            const lines2 = Math.ceil(codeHeight / 15);
            let html = '';
            for (w = 1; w < lines2; w++) {
                html += w + '<br>'
            }
            lines.innerHTML = html;
            if (holder.clientHeight < descrition.clientHeight) {
                holder.style.height = descrition.clientHeight;
            }
        }
    }
}

function normalerContent() {
    popUpContent.innerHTML = "";
    let verstoßAnzahl = 1;
    let normaleVerstoßErklärung = document.createElement('div');
    normaleVerstoßErklärung.className = "normaleVerstoßErklärung";
    popUpContent.appendChild(normaleVerstoßErklärung);
    let verstoßListe = [];
    for(let i = 0; i < verstöße.length; i++) {
        verstöße[i].verstöße.forEach(element => {
            verstoßListe.push(element[1]);
        })
    }
    let counts =[];
    for (let i = 0; i < verstoßListe.length; i++) {
        let newEntry = true;
        counts.forEach(element => {
            if (element[0] === verstoßListe[i]) {
                element[1] = element[1] +1 ;
                newEntry = false;
            }
        });
        if (newEntry === true) {
            counts.push([verstoßListe[i], 1])
        }
    }
    for (let i = 0; i < counts.length; i++) {
            let verstoß = document.createElement('p');
            verstoß.innerHTML = verstoßAnzahl + ". Auf der aktuellen Seite kommt es " + "<b>" + counts[i][1] + "</b>" + " mal zu folgenden Fehler:" + "<b>" + counts[i][0] + "</b>";
            normaleVerstoßErklärung.appendChild(verstoß);
            verstoßAnzahl++;
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function buttonShow(mehrInfos, infoBox) {
    // Infobox anzeigen
    //inf.appendChild(infoBox)
    
    infoBox.className = "infoBox";
    infoBox.style.display = "";
    infoBox.style.position = "absolute";
    infoBox.style.zIndex = 999;
    infoBox.style.marginTop = "20px";
    infoBox.innerText = mehrInfos;
    let p = document.createElement('p');
    p.style.textAlign = "center";
    p.style.marginTop = "10px";
    let schließen = document.createElement('button');
    schließen.textContent = "Schließen";
    schließen.onclick = function () {infoBox.style.display = "none"};
    //p.appendChild(schließen);
    infoBox.appendChild(p);
    //popUpContent.appendChild(infoBox);
    
  }

