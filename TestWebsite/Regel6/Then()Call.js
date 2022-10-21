let klarTextR4T5 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR4T5 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    true,
    ["encrypt", "decrypt"]);
    
async function ExKey1R4T5() {
    return await window.crypto.subtle.exportKey("jwk", await AESKeyR4T5);
}
function ExKey2R4T5() {
    let obj = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR4T5.then(result => window.crypto.subtle.exportKey("jwk", result)), 3, 4]};
    return obj;
}

async function func1(exKey) {
    console.log(exKey);
    return exKey;
}

async function func2(exKey) {
    Storage.setItem('key', exKey.k);
    console.log(exKey);
    return exKey;
}

function func3(exKey) {
    console.log(exKey);
    return exKey;
}

AESKeyR4T5.then(result => window.crypto.subtle.exportKey("jwk", result)).then(
    async function(result) {return result}).then(console.log);
AESKeyR4T5.then(result => window.crypto.subtle.exportKey("jwk", result)).then(
    async function(result) {document.cookie = result.k; return result}).then(console.log);
ExKey1R4T5().then(async function(result) {return result}).then(console.log);
ExKey1R4T5().then(async function(result) {Storage.setItem('key', result); return result}).then(console.log);
ExKey2R4T5().O4[2].then(async function(result) {result = await result; document.cookie = result.k; return result}).then(console.log);
ExKey2R4T5().O4[2].then(async function(result) {return [result, "placeholder"]}).then(result => document.cookie = result[0].k).then(console.log);
ExKey2R4T5().O4[2].then(async function(result) {return [result, "placeholder"]}).then(result => console.log(result[0].k)).then(console.log);
ExKey1R4T5().then(func1).then(console.log);
ExKey1R4T5().then(func2).then(console.log);
ExKey2R4T5().O4[2].then(func1).then(console.log);
ExKey2R4T5().O4[2].then(func2).then(console.log);
ExKey1R4T5().then(func3).then(func1).then(console.log);
