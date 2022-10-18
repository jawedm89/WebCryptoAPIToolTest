let klarTextR2T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function ExKey1R2T1() {
    let key = await AESKeyR2T1;
    return await window.crypto.subtle.exportKey("jwk", key);
}

let ExKey2R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result));
let ExKey3R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result));
let ExKey4R2T1 = {O1: 23,O2: "sdf", O3: AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))};
let ExKey5R2T1 = {O1: 23,O2: "sdf", O3: AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))};
let ExKey6R2T1 = [0, 1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))];
let ExKey7R2T1 = [0, 1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))];
let ExKey8R2T1 = [0, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result)), 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))];
let ExKey9R2T1 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))}];
let ExKey10R2T1 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result))}];
let ExKey11R2T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result)), 3, 4]};
let ExKey12R2T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T1.then(result => window.crypto.subtle.exportKey("jwk", result)), 3, 4]};

async function Regel2Test1() {
    let signkeyR2T1 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"])
    
    let k1 = await ExKey1R2T1()
    let k2 = await ExKey2R2T1
    let k3 = await ExKey4R2T1.O3
    let k4 = await ExKey6R2T1[5]
    let k5 = await ExKey8R2T1[1]
    let k6 = await ExKey9R2T1[4].O2
    let k7 = await ExKey11R2T1.O4[2]
    k1 = 12;
    k2.k = "sdfsdfsdf"
    k3 = "sdfsdfsdfsdfsdf"
    k4.k = k4.k
    k5 = k5.k
    k6 = "llllllllllllllllllllllll"
    k7.k = 1234;

}

Regel2Test1();
