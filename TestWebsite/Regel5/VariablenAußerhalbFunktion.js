let salt = window.crypto.getRandomValues(new Uint8Array(16));
let passwortR5T3 = new TextEncoder().encode("Bitte Änder mich!");
let PBKDF2PWR5T3 = window.crypto.subtle.importKey(
    "raw",
    passwortR5T3,
    {
        name: "PBKDF2",
    },
    false, 
    ["deriveKey", "deriveBits"]
)
  
async function func1R5T3(salt) {
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T3, 256));
}
async function func2R5T3(placeholder1, salt, placeholder2) {
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T3, 256), placeholder1, placeholder2);
}

async function func3R5T3(salt, placeholder2, placeholder1) {
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T3, 256), placeholder1, placeholder2);
}

async function func4R5T3(placeholder1, placeholder2, salt) {
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, await PBKDF2PWR5T3, 256), placeholder1, placeholder2);
}

function func5R5T3() {
    return window.crypto.getRandomValues(new Uint8Array(16));
}

function func6R5T3() {
    return new Uint8Array(16);
}

async function Regel5T3() {
    let salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    let salt3 = new Uint8Array(16);
    func1R5T3(salt);
    func2R5T3("placeholder", window.crypto.getRandomValues(new Uint8Array(16)), "placeholder");
    func2R5T3("placeholder",salt2, "placeholder");
    func2R5T3("placeholder", func5R5T3(), "placeholder");
    func3R5T3(new Uint8Array(16), "placeholder", "placeholder");
    func3R5T3(salt3, "placeholder", "placeholder");
    func3R5T3(func6R5T3(), "placeholder", "placeholder");
    func4R5T3("placeholder", "placeholder", window.crypto.getRandomValues(new Uint8Array(16)));
    func4R5T3("placeholder", "placeholder", salt2);
    func4R5T3("placeholder", "placeholder", func5R5T3());
}
Regel5T3();


func1R5T3(window.crypto.getRandomValues(new Uint8Array(16)));
func1R5T3(new Uint8Array(16));
func1R5T3(salt);
func2R5T3("placeholder", window.crypto.getRandomValues(new Uint8Array(16)), "placeholder");
func2R5T3("placeholder", func5R5T3(), "placeholder");
func3R5T3(new Uint8Array(16), "placeholder", "placeholder");
func3R5T3(salt, "placeholder", "placeholder");
func3R5T3(func6R5T3(), "placeholder", "placeholder");
func4R5T3("placeholder", "placeholder", window.crypto.getRandomValues(new Uint8Array(16)));
func4R5T3("placeholder", "placeholder", func6R5T3());