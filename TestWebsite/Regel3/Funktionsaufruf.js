let klarTextR3T4 = new TextEncoder().encode("ich werde verschlüsselt");
let SignKeyR3T4 = window.crypto.subtle.generateKey({
    name: "RSASSA-PKCS1-v1_5",
    modulusLength: 2048,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: { name: "SHA-256" },
},
    false,
    ["sign", "verify"]);

async function EncCall1R3T4() {
    let key = await SignKeyR3T4;
    return await window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, key.privateKey, klarTextR3T4);
}

let EncCall2R3T4 = SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4));
let EncCall4R3T4 = {O1: 23,O2: "sdf", O3: SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4))};
let EncCall6R3T4 = [0, 1, 2, 3, 4, SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4))];
let EncCall8R3T4 = [0, SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4)), 2, 3, 4, SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4))];
let EncCall9R3T4 = [0, 1, {O1: 3}, 3, {O2: SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4))}];
let EncCall11R3T4 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, SignKeyR3T4.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey,klarTextR3T4)), 3, 4]};

async function Regel2Test4() {
    
    func1(await EncCall1R3T4());
    func2("placeholder1", "placeholder2", await EncCall2R3T4);
    func3("placeholder1", await EncCall4R3T4.O3, "placeholder1");
    func4("placeholder1", "placeholder2", await EncCall6R3T4[5]);
    func5(await EncCall8R3T4[1], "placeholder1", "placeholder2");
    func2("placeholder1", "placeholder2", await EncCall9R3T4[4].O2);
    func5(await EncCall11R3T4.O4[2], "placeholder1", "placeholder2");

}

async function func1(cipher) {
    let AESkeyR3T4 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);

    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESkeyR3T4, cipher));   
}

async function func2(placeholder1, placeholder2, cipher) {
    let AESkeyR3T4 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);

    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESkeyR3T4, cipher), placeholder1, placeholder2);   
}

async function func3(placeholder1, cipher, placeholder2) {
    let AESkeyR3T4 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);

    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESkeyR3T4, cipher), cipher, placeholder1, placeholder2);   
}

async function func4(placeholder1, placeholder2, cipher) {
    let buffer = klarTextR3T4.buffer;
    let AESkeyR3T4 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);

    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESkeyR3T4, buffer), cipher, placeholder1, placeholder2);   
}

async function func5(cipher, placeholder1, placeholder2) {
    console.log(cipher, placeholder1, placeholder2);
    return func3(placeholder1, cipher, placeholder2)
}

Regel2Test4();