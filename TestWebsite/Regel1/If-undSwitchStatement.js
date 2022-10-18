let klarTextR1T4 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T4 = window.crypto.subtle.generateKey({
    name: "AES-GCM",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function func1R1T4() {
    let bool = true;
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    if(bool) {
        iv = iv;
    }
    else {
        iv = iv;
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func2R1T4() {
    let bool = true;
    let iv;
    if(bool) {
        iv = window.crypto.getRandomValues(new Uint8Array(16));
    }
    else {
        iv = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func3R1T4() {
    let bool = true;
    let iv2 = window.crypto.getRandomValues(new Uint8Array(16));
    let iv;
    if(bool) {
        iv = new Uint8Array(16);
    }
    else {
        iv = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func4R1T4() {
    let bool = true;
    let iv2 = window.crypto.getRandomValues(new Uint8Array(16));
    let iv;
    if(bool) {
        iv = new Uint8Array(16);
    }
    else {
        iv = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv2}, await AESKeyR1T4, klarTextR1T4));
}

async function func5R1T4() {
    let bool = true;
    let iv;
    if(bool) {
        iv = new Uint8Array(16);
    }
    else {
        iv = new Uint8Array(16);
    }
    iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func6R1T4() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            iv = iv
            break;
        case false:
            iv = iv
            break;
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func7R1T4() {
    let iv;
    let bool = true;
    switch (bool) {
        case true:
            iv = window.crypto.getRandomValues(new Uint8Array(16));
            break;
        case false:
            iv = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func8R1T4() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            iv = new Uint8Array(16);
            break;
        case false:
            iv = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

async function func9R1T4() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let iv2 = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            iv = new Uint8Array(16);
            break;
        case false:
            iv = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv2}, await AESKeyR1T4, klarTextR1T4));
}

async function func10R1T4() {
    let iv;
    let bool = true;
    switch (bool) {
        case true:
            iv = new Uint8Array(16)
            break;
        case false:
            iv = new Uint8Array(16)
            break;
    }
    iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}

function func11R1T4() {
    let iv;
    let bool = true;
    switch (bool) {
        case true:
            iv = window.crypto.getRandomValues(new Uint8Array(16));
            break;
        case false:
            iv = new Uint8Array(16);
            break;
    }
    return iv;
}

function func12R1T4() {
    let bool = true;
    let iv;
    if(bool) {
        iv = window.crypto.getRandomValues(new Uint8Array(16));
    }
    else {
        iv = new Uint8Array(16);
    }
    return iv;
}

async function func13R1T4() {
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func11R1T4()}, await AESKeyR1T4, klarTextR1T4));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func12R1T4()}, await AESKeyR1T4, klarTextR1T4));
}

func1R1T4();
func2R1T4();
func3R1T4();
func4R1T4();
func5R1T4();
func6R1T4();
func7R1T4();
func8R1T4();
func9R1T4();
func10R1T4();
func13R1T4();