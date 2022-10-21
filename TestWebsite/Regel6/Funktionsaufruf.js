let klarTextR4T4 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR4T4 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

async function ExKey1R2T4() {
    return await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4);
}


async function Regel2Test4() {
    let ExKey2R2T4 = await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4);
    let ExKey4R2T4 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4)};
    let ExKey6R2T4 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4)];
    let ExKey8R2T4 = [0, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4), 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4)];
    let ExKey9R2T4 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4)}];
    let ExKey11R2T4 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T4), 3, 4]};
    
    func1(await ExKey1R2T4());
    func2("placeholder1", "placeholder2", ExKey2R2T4);
    func3("placeholder1", ExKey4R2T4.O3, "placeholder1");
    func4("placeholder1", "placeholder2", ExKey6R2T4[5]);
    func5(ExKey8R2T4[1], "placeholder1", "placeholder2");
    func2("placeholder1", "placeholder2", ExKey9R2T4[4].O2);
    func5(ExKey11R2T4.O4[2], "placeholder1", "placeholder2");

}

async function func1(ExportKey) {
    console.log(ExportKey);   
}

async function func2(placeholder1, placeholder2, ExportKey) {
    Storage.setItem('key', ExportKey)
    console.log(ExportKey, ExKey2, placeholder1, placeholder2);   
}

async function func3(placeholder1, ExportKey, placeholder2) {

    console.log(ExportKey, placeholder1, placeholder2);   
}

async function func4(placeholder1, placeholder2, ExportKey) {
    document.cookie = ExportKey.k;
    console.log(ExportKey, placeholder1, placeholder2);   
}

async function func5(ExportKey, placeholder1, placeholder2) {
    console.log(ExportKey, placeholder1, placeholder2);
    return func3(placeholder1, ExportKey, placeholder2)
}

Regel2Test4();