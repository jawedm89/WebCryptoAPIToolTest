let klarTextR3T2 = new TextEncoder().encode("ich werde verschlüsselt");
let SignKeyR3T2 = window.crypto.subtle.generateKey({
    name: "RSASSA-PKCS1-v1_5",
    modulusLength: 2048,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: { name: "SHA-256" },
},
    false,
    ["sign", "verify"]);



async function func1R3T2() {
    return SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2));
}

async function func2R3T2() {
    let EncCall3R3T2 = SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2));
    return EncCall3R3T2;
}

async function func3R3T2() {
    let EncCall4R3T2 = { O1: 23, O2: "sdf", O3: SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)) };
    return EncCall4R3T2
}

async function func4R3T2() {
    let EncCall5R3T2 = { O1: 23, O2: "sdf", O3: SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)) };
    return EncCall5R3T2
}

async function func5R3T2() {
    let EncCall6R3T2 = [0, 1, 2, 3, 4, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2))];
    return EncCall6R3T2
}

async function func6R3T2() {
    let EncCall7R3T2 = [0, 1, 2, 3, 4, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2))];
    return EncCall7R3T2
}

async function func7R3T2() {
    let EncCall8R3T2 = [0, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)), 2, 3, 4, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2))];
    return EncCall8R3T2
}

async function func8R3T2() {
    let EncCall9R3T2 = [0, 1, { O1: 3 }, 3, { O2: SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)) }];
    return EncCall9R3T2
}

async function func9R3T2() {
    let EncCall10R3T2 = [0, 1, { O1: 3 }, 3, { O2: SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)) }];
    return EncCall10R3T2;
}

async function func10R3T2() {
    let EncCall11R3T2 = { O1: 3, O2: "sdf", O3: { O1: 3 }, O4: [0, 1, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)), 3, 4] };
    let EncCall12R3T2 = { O1: 3, O2: "sdf", O3: { O1: 3 }, O4: [0, 1, SignKeyR3T2.then(result => window.crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, result.privateKey, klarTextR3T2)), 3, 4] };
    return [EncCall11R3T2, EncCall12R3T2];
}

async function func11R3T2() {
    return await func10R3T2();
}

async function func12R3T2() {
    let func10 = await func10R3T2();
    return func10[0].O4[2];
}

async function Regel2Test2() {
    let AESKeyR3T2 = await window.crypto.subtle.generateKey(
        {
            name: "AES-CBC",
            length: 256,
        },
        false,
        ["encrypt", "decrypt"]);

    let func3 = await func3R3T2();
    let func4 = await func4R3T2();
    let func5 = await func5R3T2();
    let func6 = await func6R3T2();
    let func7 = await func7R3T2();
    let func8 = await func8R3T2();
    let func9 = await func9R3T2();
    let func10 = await func10R3T2();
    let func11 = await func11R3T2();

    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func1R3T2()));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func2R3T2()));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func3.O3));
    console.log(await func4.O3);
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func5[5]));
    console.log(await func6[5]);
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func7[1]));
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func8[4].O2));
    console.log(await func9[4].O2);
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func10[1].O4[2]));
    console.log(await func11[1].O4[2]);
    console.log(await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, AESKeyR3T2, await func12R3T2()));
}

Regel2Test2();