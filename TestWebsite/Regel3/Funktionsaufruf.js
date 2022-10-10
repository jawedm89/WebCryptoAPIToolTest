let klarTextR2T4 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T4 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function EncCall1R2T4() {
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await AESKeyR2T4,klarTextR2T4);
}

let EncCall2R2T4 = AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4));
let EncCall4R2T4 = {O1: 23,O2: "sdf", O3: AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4))};
let EncCall6R2T4 = [0, 1, 2, 3, 4, AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4))];
let EncCall8R2T4 = [0, AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4)), 2, 3, 4, AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4))];
let EncCall9R2T4 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4))}];
let EncCall11R2T4 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T4.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T4)), 3, 4]};

async function Regel2Test4() {
    
    func1(await EncCall1R2T4());
    func2("placeholder1", "placeholder2", await EncCall2R2T4);
    func3("placeholder1", await EncCall4R2T4.O3, "placeholder1");
    func4("placeholder1", "placeholder2", await EncCall6R2T4[5]);
    func5(await EncCall8R2T4[1], "placeholder1", "placeholder2");
    func2("placeholder1", "placeholder2", await EncCall9R2T4[4].O2);
    func5(await EncCall11R2T4.O4[2], "placeholder1", "placeholder2");

}

async function func1(cipher) {
    let signkeyR2T4 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);

    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T4.privateKey, cipher));   
}

async function func2(placeholder1, placeholder2, cipher) {
    let signkeyR2T4 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);

    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T4.privateKey, cipher), placeholder1, placeholder2);   
}

async function func3(placeholder1, cipher, placeholder2) {
    let signkeyR2T4 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);

    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T4.privateKey, cipher), cipher, placeholder1, placeholder2);   
}

async function func4(placeholder1, placeholder2, cipher) {
    let buffer = klarTextR2T4.buffer;
    let signkeyR2T4 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);

    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T4.privateKey, buffer), cipher, placeholder1, placeholder2);   
}

async function func5(cipher, placeholder1, placeholder2) {
    console.log(cipher, placeholder1, placeholder2);
    return func3(placeholder1, cipher, placeholder2)
}

Regel2Test4();