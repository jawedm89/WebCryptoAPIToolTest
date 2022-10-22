let passwortR5T2 = new TextEncoder().encode("Bitte Änder mich!");
let PBKDF2PWR5T2 = window.crypto.subtle.importKey(
    "raw",
    passwortR5T2,
    {
        name: "PBKDF2",
    },
    false, 
    ["deriveKey", "deriveBits"]
)
    
let a = {b: function () {
        let c = [0, 1, window.crypto.getRandomValues(new Uint8Array(16))]
        return c;
    }
}

function func1R1T2() {
    return window.crypto.getRandomValues(new Uint8Array(16));
}

function func2R1T2() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    return salt;
}

function func3R1T2() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let salt2 = new Uint8Array(16);
    return salt2;
}

function func4R1T2() {
    let salt = {O1: "sdf", O2: [0, 1, 2, 3, new Uint8Array(16)], O3: [0, 1, 2, 3, window.crypto.getRandomValues(new Uint8Array(16))]};
    return salt;
}

function func5R1T2() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    return [0, 1, 2, salt];
}

function func6R1T2() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let obj = {O1: 12, O2: function () {return salt}};
    let obj2 = {O1: 12, O2: function () {return [window.crypto.getRandomValues(new Uint8Array(16)), new Uint8Array(16)]}};
    return [0, 1, 2, obj, obj2];
}

function func7R1T2() {
    return function () {return window.crypto.getRandomValues(new Uint8Array(16))}
}

async function Regel5T2() {    
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func6R1T2()[4].O2()[0], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func6R1T2()[3].O2(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func5R1T2()[3], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func4R1T2().O2[4], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func4R1T2().O3[4], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func3R1T2(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func2R1T2(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func1R1T2(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: a.b()[2], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func7R1T2()(), iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: func6R1T2()[4].O2()[1], iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T2, 256));
}

Regel5T2();