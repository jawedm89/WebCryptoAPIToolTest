let klarTextR2T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function EncCall1R2T1() {
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await AESKeyR2T1,klarTextR2T1);
}

let EncCall2R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1));
let EncCall3R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1));
let EncCall4R2T1 = {O1: 23,O2: "sdf", O3: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))};
let EncCall5R2T1 = {O1: 23,O2: "sdf", O3: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))};
let EncCall6R2T1 = [0, 1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))];
let EncCall7R2T1 = [0, 1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))];
let EncCall8R2T1 = [0, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1)), 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))];
let EncCall9R2T1 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))}];
let EncCall10R2T1 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))}];
let EncCall11R2T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1)), 3, 4]};
let EncCall12R2T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1)), 3, 4]};

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
    
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall1R2T1()));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall2R2T1));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall4R2T1.O3));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall6R2T1[5]));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall8R2T1[1]));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall9R2T1[4].O2));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await EncCall11R2T1.O4[2]));

}

Regel2Test1();