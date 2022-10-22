let passwortR5T4 = new TextEncoder().encode("Bitte Änder mich!");
let PBKDF2PWR5T4 = window.crypto.subtle.importKey(
    "raw",
    passwortR5T4,
    {
        name: "PBKDF2",
    },
    false, 
    ["deriveKey", "deriveBits"]
)
async function func1R1T4() {
    let bool = true;
    let salt;
    let salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    if(bool) {
        salt = salt2;
    }
    else {
        salt = salt2;
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func2R1T4() {
    let bool = true;
    let salt;
    if(bool) {
        salt = window.crypto.getRandomValues(new Uint8Array(16));
    }
    else {
        salt = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func3R1T4() {
    let bool = true;
    let salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    let salt;
    if(bool) {
        salt = new Uint8Array(16);
    }
    else {
        salt = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func4R1T4() {
    let bool = true;
    let salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    let salt;
    if(bool) {
        salt = new Uint8Array(16);
    }
    else {
        salt = new Uint8Array(16);
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func5R1T4() {
    let bool = true;
    let salt;
    if(bool) {
        salt = new Uint8Array(16);
    }
    else {
        salt = new Uint8Array(16);
    }
    salt = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func6R1T4() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            salt = salt
            break;
        case false:
            salt = salt
            break;
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func7R1T4() {
    let salt;
    let bool = true;
    switch (bool) {
        case true:
            salt = window.crypto.getRandomValues(new Uint8Array(16));
            break;
        case false:
            salt = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func8R1T4() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            salt = new Uint8Array(16);
            break;
        case false:
            salt = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func9R1T4() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    let bool = true;
    switch (bool) {
        case true:
            salt = new Uint8Array(16);
            break;
        case false:
            salt = new Uint8Array(16);
            break;
    }
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

async function func10R1T4() {
    let salt;
    let bool = true;
    switch (bool) {
        case true:
            salt = new Uint8Array(16)
            break;
        case false:
            salt = new Uint8Array(16)
            break;
    }
    salt = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
}

function func11R1T4() {
    let salt;
    let bool = true;
    switch (bool) {
        case true:
            salt = window.crypto.getRandomValues(new Uint8Array(16));
            break;
        case false:
            salt = new Uint8Array(16);
            break;
    }
    return salt;
}

function func12R1T4() {
    let bool = true;
    let salt;
    if(bool) {
        salt = window.crypto.getRandomValues(new Uint8Array(16));
    }
    else {
        salt = new Uint8Array(16);
    }
    return salt;
}

function func13R1T4() {
    let bool = true;
    let salt;
    if(bool) {
        salt = window.crypto.getRandomValues(new Uint8Array(16));
    }
    else {
        salt = window.crypto.getRandomValues(new Uint8Array(16));
    }
    return salt;
}

async function func14R1T4() {
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func11R1T4(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func12R1T4(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func13R1T4(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T4, 256));
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
func14R1T4();