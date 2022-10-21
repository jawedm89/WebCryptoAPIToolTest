let klarTextR4T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR4T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    true,
    ["encrypt", "decrypt"]);

async function ExKey1R4T1() {
    let key = await AESKeyR4T1;
    return await window.crypto.subtle.exportKey("jwk", key);
}

async function Regel2Test1() {
let ExKey2R4T1 = await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1);
let ExKey3R4T1 = await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1);
let ExKey4R4T1 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)};
let ExKey5R4T1 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)};
let ExKey6R4T1 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)];
let ExKey7R4T1 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)];
let ExKey8R4T1 = [0, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1), 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)];
let ExKey9R4T1 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)}];
let ExKey10R4T1 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1)}];
let ExKey11R4T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1), 3, 4]};
let ExKey12R4T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T1), 3, 4]};

    let k1 = await ExKey1R4T1()
    k1 = 12;
    ExKey2R4T1.k = "sdfsdfsdf"
    ExKey4R4T1.O3 = "sdfsdfsdfsdfsdf"
    ExKey6R4T1[5].k = ExKey6R4T1.k
    ExKey8R4T1[1] = ExKey8R4T1.k
    ExKey10R4T1[4].O2 = "llllllllllllllllllllllll"
    ExKey12R4T1.O4[2].k = 1234;
    console.log(ExKey3R4T1, ExKey5R4T1, ExKey7R4T1, ExKey9R4T1, ExKey11R4T1)

}

Regel2Test1();
