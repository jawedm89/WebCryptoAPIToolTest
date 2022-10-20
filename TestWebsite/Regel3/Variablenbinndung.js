let klarTextR3T1 = new TextEncoder().encode("ich werde verschlüsselt");
let SignKeyR3T1 = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]);

async function EncCall1R3T1() {
    let key  = await SignKeyR3T1;
    return await window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, key.privateKey, klarTextR3T1);
}

let EncCall2R3T1 = SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1));
let EncCall3R3T1 = SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1));
let EncCall4R3T1 = {O1: 23,O2: "sdf", O3: SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))};
let EncCall5R3T1 = {O1: 23,O2: "sdf", O3: SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))};
let EncCall6R3T1 = [0, 1, 2, 3, 4, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))];
let EncCall7R3T1 = [0, 1, 2, 3, 4, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))];
let EncCall8R3T1 = [0, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1)), 2, 3, 4, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))];
let EncCall9R3T1 = [0, 1, {O1: 3}, 3, {O2: SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))}];
let EncCall10R3T1 = [0, 1, {O1: 3}, 3, {O2: SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1))}];
let EncCall11R3T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1)), 3, 4]};
let EncCall12R3T1 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, SignKeyR3T1.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T1)), 3, 4]};

async function Regel2Test1() {
    let AESKeyR3T1 = await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);
    
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall1R3T1()));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall2R3T1));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall4R3T1.O3));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall6R3T1[5]));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall8R3T1[1]));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall9R3T1[4].O2));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T1, await EncCall11R3T1.O4[2]));

}

Regel2Test1();