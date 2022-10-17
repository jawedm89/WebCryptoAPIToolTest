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
        iv = iv
    }
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T4, klarTextR1T4));
}