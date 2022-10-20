let klarTextR3T5 = new TextEncoder().encode("ich werde verschlüsselt");
let SignKeyR3T5 = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]);

let AESKeyR3T5 = window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);
    
async function Sign1R3T5() {
    let key  = await SignKeyR3T5;
    return await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, key.privateKey,klarTextR3T5);
}
let Sign2R2T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, SignKeyR3T5.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T5)), 3, 4]};

async function func1(signatur) {
    let cipher = await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await AESKeyR3T5, signatur);
    console.log(cipher, signatur);
    return signatur;
}

async function func2(signatur) {
    let cipher = await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await AESKeyR3T5, klarTextR3T5);
    console.log(cipher, signatur);
    return cipher;
}

function func3(signatur) {
    console.log(signatur);
    return signatur;
}

SignKeyR3T5.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T5)).then(
    async function(result) {window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await AESKeyR3T5, result)}).then(console.log);
SignKeyR3T5.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T5)).then(
    async function(result) {return result}).then(console.log);
Sign1R3T5().then(async function(result) {window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await AESKeyR3T5, result)}).then(console.log);
Sign1R3T5().then(async function(result) {return result}).then(console.log);
Sign2R2T1.O4[2].then(async function(result) {lwindow.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await AESKeyR3T5, result)}).then(console.log);
Sign2R2T1.O4[2].then(async function(result) {return [result, await AESKeyR3T5]}).then(result => window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, result[1], result[0])).then(console.log);
Sign2R2T1.O4[2].then(async function(result) {return [result, await AESKeyR3T5]}).then(result => console.log(result)).then(console.log);
Sign1R3T5().then(func1).then(console.log);
Sign1R3T5().then(func2).then(console.log);
Sign2R2T1.O4[2].then(func1).then(console.log);
Sign2R2T1.O4[2].then(func2).then(console.log);
Sign1R3T5().then(func3).then(func1).then(console.log);
Sign1R3T5().then(result => {return result}).then(
    async function(result) {window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T5, result)}).then(console.log);
Sign2R2T1.O4[2].then(function (result) {return result}).then(
    async function(result) {console.log(result)}).then(console.log);
