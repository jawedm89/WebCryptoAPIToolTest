let passwortR5T1 = new TextEncoder().encode("Bitte Änder mich!");
let PBKDF2PWR5T1 = window.crypto.subtle.importKey(
    "raw",
    passwortR5T1,
    {
        name: "PBKDF2",
    },
    false, 
    ["deriveKey", "deriveBits"]
)


async function func1R1T1() {
    let salt = window.crypto.getRandomValues(new Uint8Array(16));
    let salt2 = new Uint8Array(16);
    let key = await PBKDF2PWR5T1;
    let salt3 = salt;
    let salt4 = salt2;
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt3, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt4, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));

    salt = new Uint8Array(16);
    salt = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    salt2 = window.crypto.getRandomValues(new Uint8Array(16));
    salt2 = new Uint8Array(16);
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
}

async function func2R1T1() {
    let key = await PBKDF2PWR5T1;
    let salt1 = [0, 1, new Uint8Array(16), window.crypto.getRandomValues(new Uint8Array(16))];
    let salt2 = {O1: window.crypto.getRandomValues(new Uint8Array(16)), O2: "sdf", O3: new Uint8Array(16)}
    let salt3 = [0, {O1: "sdf", O2: window.crypto.getRandomValues(new Uint8Array(16)), O3: new Uint8Array(16)}, 2, 3];
    let salt4 = {O1: "sdf", O2: [0, 1, 2, 3, new Uint8Array(16)], O3: [0, 1, 2, 3, window.crypto.getRandomValues(new Uint8Array(16))]};

    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt1[3], iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt1[2], iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2.O1, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt2.O3, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt3[1].O2, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt3[1].O3, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt4.O3[4], iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt4.O2[4], iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    salt3[1].O2 = new Uint8Array(16);
    salt4.O3[4] = new Uint8Array(16);
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt3[1].O2, iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
    console.log(await window.crypto.subtle.deriveBits({"name": "PBKDF2", salt: salt4.O3[4], iterations: 1000, hash: {name: "SHA-1"},}, key, 256));
}

func1R1T1();
func2R1T1();