let klarTextR2T3 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T3 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function EncCall1R2T3() {
    return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await AESKeyR2T3,klarTextR2T3);
}


async function Regel2Test3() {
    let signkeyR2T1 = await window.crypto.subtle.generateKey(
        {
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 2048, 
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]);
        
    let EncCall2R2T3 = AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3));
    let EncCall4R2T3 = {O1: 23,O2: "sdf", O3: AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3))};
    let EncCall6R2T3 = [0, 1, 2, 3, 4, AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3))];
    let EncCall7R2T3 = [0, 1, 2, 3, 4, AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3))];
    let EncCall9R2T3 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3))}];
    let EncCall10R2T3 = [0, 1, {O1: 3}, 3, {O2: AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3))}];
    let EncCall11R2T3 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, AESKeyR2T3.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T3)), 3, 4]};
    let chain1 = await EncCall1R2T3();
    let chain2 = [1, 2, 3, chain1];
    let chain3 = EncCall2R2T3;
    let chain4 = {O1: "sdf", O2: chain3};
    let chain5 = EncCall4R2T3;
    let chain6 = await chain5.O3;
    let chain7 = EncCall6R2T3;
    let chain8 = {O1: 12, O2: chain7, O3: "sdf"};
    let chain9 = [0, 1, 2, 3, chain8, 5];
    let chain10 = EncCall7R2T3;
    let chain11 = {O1: 12, O2: chain10, O3: "sdf"};
    let chain12 = [0, 1, 2, 3, chain11, 5];
    let chain13 = {O1: EncCall9R2T3, O2: 1, O3: "sdf"}
    let chain14 = [0, chain13, 2, 3];
    let chain15 = [0, 1, EncCall11R2T3, 3];
    let chain16 = {O1: 1, O2: "sdf", O3: 12, O4: chain15};
    let chain17 = chain15[2].O4;
    
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, chain2[3]));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await chain4.O2));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, chain6));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await chain9[4].O2[5]));
    console.log(await chain12[4].O2[5]);
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await chain14[1].O1[4].O2));
    console.log(await window.crypto.subtle.sign({name: "RSASSA-PKCS1-v1_5"}, signkeyR2T1.privateKey, await chain17[2]));

}

Regel2Test3();