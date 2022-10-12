let klarTextR2T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function EncCall1R2T1() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    iv = new ArrayBuffer(16);
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv,}, await AESKeyR2T1,klarTextR2T1);
}

EncCall1R2T1();