let klarTextR4T2 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR4T2 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    true,
    ["encrypt", "decrypt"]);



async function func1R4T2() {
    return await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2);
}

async function func2R4T2() {
    let ExKey3R4T2 = await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2);    
    return ExKey3R4T2; 
}

async function func3R4T2() {
    let ExKey4R4T2 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)};
    return ExKey4R4T2
}

async function func4R4T2() {
    let ExKey5R4T2 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)};
    return ExKey5R4T2
}

async function func5R4T2() {
    let ExKey6R4T2 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)];
    return ExKey6R4T2
}

async function func6R4T2() {
    let ExKey7R4T2 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)];
    return ExKey7R4T2
}

async function func7R4T2() {
    let ExKey8R4T2 = [0, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2), 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)];
    return ExKey8R4T2
}

async function func8R4T2() {
    let ExKey9R4T2 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)}];
    return ExKey9R4T2
}

async function func9R4T2() {
    let ExKey10R4T2 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2)}];
    return ExKey10R4T2;
}

async function func10R4T2() {
    let ExKey11R4T2 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2), 3, 4]};
    let ExKey12R4T2 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T2), 3, 4]};
    return [ExKey11R4T2 ,ExKey12R4T2];
}

async function func11R4T2() {
    return await func10R4T2();
}

async function func12R4T2() {
    let func10 = await func10R4T2();
    return func10[0].O4[2];
}

async function Regel4Test2() {

    let func3 = await func3R4T2();
    let func4 = await func4R4T2();
    let func5 = await func5R4T2();
    let func6 = await func6R4T2();
    let func7 = await func7R4T2();
    let func8 = await func8R4T2();
    let func9 = await func9R4T2();
    let func10 = await func10R4T2();
    let func11 = await func11R4T2();
    func3.O3 = "aasdfasdfdfgfdgsdflcmoirjtNSäJRPJPIJE"
    func4.O3 = "aasdfasdfdfgfdgsdflcmoirjtNSäJRPJPIJE"
    func5[5].k = "aasdfasdfdfgfdgsdflcmoirjtNSäJRPJPIJE"
    func9[4].O2 = "aasdfasdfdfgfdgsdflcmoirjtNSäJRPJPIJE"
    func11[1].O4[2].k = "aasdfasdfdfgfdgsdflcmoirjtNSäJRPJPIJE"
    
    console.log(await func1R4T2());
    console.log(await func2R4T2());
    console.log(func3.O3);
    console.log(func4.O3);
    console.log(func5[5]);
    console.log(func6[5]);
    console.log(func7[1]);
    console.log(func8[4].O2);
    console.log(func9[4].O2);
    console.log(func10[1].O4[2]);
    console.log(func11[1].O4[2]);
    console.log(await func12R4T2());
}

Regel4Test2();