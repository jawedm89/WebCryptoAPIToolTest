let klarTextR2T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function EncCall1R2T1() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    iv = new ArrayBuffer(16);
    let a = [1, "sdf", 3];
    a[4] = {b: [window.crypto.getRandomValues(new Uint8Array(16)), 3]}
    let iv2 = [0, 1, 2];
    let sub = {O1: 12, O2: [0, 1, window.crypto.getRandomValues(new Uint8Array(16))]}
    let sub2 = [0, 1, 2, {a: window.crypto.getRandomValues(new Uint8Array(16)), b: new ArrayBuffer(16)}]
    iv2[1] = sub;
    iv3 = {a: 33, b: "sdf"};
    iv3 = sub2;
    sub2[3].b = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv3[3].b,}, await AESKeyR2T1,klarTextR2T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2[1].O2[2],}, await AESKeyR2T1,klarTextR2T1));
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: a[4].b[0],}, await AESKeyR2T1,klarTextR2T1);
}

EncCall1R2T1();