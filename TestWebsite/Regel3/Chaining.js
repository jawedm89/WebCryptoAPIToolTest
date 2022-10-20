let klarTextR3T3 = new TextEncoder().encode("ich werde verschlüsselt");
let SignKeyR3T3 = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]);

async function EncCall1R3T3() {
    let key = await SignKeyR3T3;
    return await window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, key.privateKey,klarTextR3T3);
}

let EncCall2R3T3 = SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3));
let EncCall4R3T3 = {O1: 23,O2: "sdf", O3: SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3))};
let EncCall6R3T3 = [0, 1, 2, 3, 4, SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3))];
let EncCall7R3T3 = [0, 1, 2, 3, 4, SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3))];
let EncCall9R3T3 = [0, 1, {O1: 3}, 3, {O2: SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3))}];
let EncCall10R3T3 = [0, 1, {O1: 3}, 3, {O2: SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3))}];
let EncCall11R3T3 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, SignKeyR3T3.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T3)), 3, 4]};

async function Regel2Test3() {
    let AESKeyR3T3 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);
    
    let chain1 = await EncCall1R3T3();
    let chain2 = [1, 2, 3, chain1];
    let chain3 = EncCall2R3T3;
    let chain4 = {O1: "sdf", O2: chain3};
    let chain5 = EncCall4R3T3;
    let chain6 = await chain5.O3;
    let chain7 = EncCall6R3T3;
    let chain8 = {O1: 12, O2: chain7, O3: "sdf"};
    let chain9 = [0, 1, 2, 3, chain8, 5];
    let chain10 = EncCall7R3T3;
    let chain11 = {O1: 12, O2: chain10, O3: "sdf"};
    let chain12 = [0, 1, 2, 3, chain11, 5];
    let chain13 = {O1: EncCall9R3T3, O2: 1, O3: "sdf"}
    let chain14 = [0, chain13, 2, 3];
    let chain15 = [0, 1, EncCall11R3T3, 3];
    let chain16 = {O1: 1, O2: "sdf", O3: 12, O4: chain15};
    let chain17 = chain15[2].O4;
    
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, chain2[3]));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, await chain4.O2));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, chain6));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, await chain9[4].O2[5]));
    console.log(await chain12[4].O2[5]);
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, await chain14[1].O1[4].O2));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T3, await chain17[2]));

}

Regel2Test3();