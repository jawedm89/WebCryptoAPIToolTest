let klarTextR1T4 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T4 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
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
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T4, klarTextR1T4));
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
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T4, klarTextR1T4));
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
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2}, await AESKeyR1T4, klarTextR1T4));
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
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2}, await AESKeyR1T4, klarTextR1T4));
}