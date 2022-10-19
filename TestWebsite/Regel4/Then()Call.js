let klarTextR2T5 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T5 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

signkeyR2T5 = window.crypto.subtle.generateKey(
    {
        name: "RSASSA-PKCS1-v1_5",
        modulusLength: 2048, 
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]);
    
async function EncCall1R2T5() {
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await AESKeyR2T5,klarTextR2T5);
}
function EncCall11R2T1() {
    let obj = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T5.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T5)), 3, 4]};
    return obj;
}

async function func1(cipher) {
    let signkey = await signkeyR2T5;
    let signatur = await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, cipher);
    console.log(cipher, signatur);
    return signatur;
}

async function func2(cipher) {
    let signkey = await signkeyR2T5;
    let signatur = await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, klarTextR2T5.buffer);
    console.log(cipher, signatur);
    return signatur;
}

function func3(cipher) {
    console.log(cipher);
    return cipher;
}

AESKeyR2T5.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result, klarTextR2T5)).then(
    async function(result) {let signkey = await signkeyR2T5; window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, result)}).then(console.log);
AESKeyR2T5.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result, klarTextR2T5)).then(
    async function(result) {return result}).then(console.log);
EncCall1R2T5().then(async function(result) {let signkey = await signkeyR2T5; window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, result)}).then(console.log);
EncCall1R2T5().then(async function(result) {return result}).then(console.log);
EncCall11R2T1().O4[2].then(async function(result) {let signkey = await signkeyR2T5; window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, result)}).then(console.log);
EncCall11R2T1().O4[2].then(async function(result) {return [result, await signkeyR2T5]}).then(result => window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, result[1].privateKey, result[0])).then(console.log);
EncCall11R2T1().O4[2].then(async function(result) {return [result, await signkeyR2T5]}).then(result => console.log(result)).then(console.log);
EncCall1R2T5().then(func1).then(console.log);
EncCall1R2T5().then(func2).then(console.log);
EncCall11R2T1().O4[2].then(func1).then(console.log);
EncCall11R2T1().O4[2].then(func2).then(console.log);
EncCall1R2T5().then(func3).then(func1).then(console.log);
EncCall1R2T5().then(result => {return result}).then(
    async function(result) {let signkey = await signkeyR2T5; window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, result)}).then(console.log);
EncCall11R2T1().O4[2].then(function (result) {return result}).then(
    async function(result) {let signkey = await signkeyR2T5; window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkey.privateKey, result)}).then(console.log);
