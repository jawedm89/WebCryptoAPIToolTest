let klarTextR2T2 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T2 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);



async function func1R2T2() {
    return AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2));
}

async function func2R2T2() {
    let EncCall3R2T2 = AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2));    
    return EncCall3R2T2; 
}

async function func3R2T2() {
    let EncCall4R2T2 = {O1: 23,O2: "sdf", O3: AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))};
    return EncCall4R2T2
}

async function func4R2T2() {
    let EncCall5R2T2 = {O1: 23,O2: "sdf", O3: AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))};
    return EncCall5R2T2
}

async function func5R2T2() {
    let EncCall6R2T2 = [0, 1, 2, 3, 4, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))];
    return EncCall6R2T2
}

async function func6R2T2() {
    let EncCall7R2T2 = [0, 1, 2, 3, 4, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))];
    return EncCall7R2T2
}

async function func7R2T2() {
    let EncCall8R2T2 = [0, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2)), 2, 3, 4, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))];
    return EncCall8R2T2
}

async function func8R2T2() {
    let EncCall9R2T2 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))}];
    return EncCall9R2T2
}

async function func9R2T2() {
    let EncCall10R2T2 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2))}];
    return EncCall10R2T2;
}

async function func10R2T2() {
    let EncCall11R2T2 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2)), 3, 4]};
    let EncCall12R2T2 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T2.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T2)), 3, 4]};
    return [EncCall11R2T2 ,EncCall12R2T2];
}

async function func11R2T2() {
    return await func10R2T2();
}

async function func12R2T2() {
    let func10 = await func10R2T2();
    return func10[0].O4[2];
}

async function Regel2Test2() {
    let signKeyR2T2 = await window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);
    
    let func3 = await func3R2T2();
    let func4 = await func4R2T2();
    let func5 = await func5R2T2();
    let func6 = await func6R2T2();
    let func7 = await func7R2T2();
    let func8 = await func8R2T2();
    let func9 = await func9R2T2();
    let func10 = await func10R2T2();
    let func11 = await func11R2T2();
    
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func1R2T2()));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func2R2T2()));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func3.O3));
    console.log(await func4.O3);
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func5[5]));
    console.log(await func6[5]);
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func7[1]));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func8[4].O2));
    console.log(await func9[4].O2);
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func10[1].O4[2]));
    console.log(await func11[1].O4[2]);
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signKeyR2T2.privateKey, await func12R2T2()));
}

Regel2Test2();