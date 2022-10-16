let klarTextR1T2 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T2 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);

function func1R1T2() {
    return window.crypto.getRandomValues(new Uint8Array(16));
}

function func2R1T2() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    return iv;
}

function func3R1T2() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let iv2 = new Uint8Array(16);
    return iv2;
}

function func4R1T2() {
    let iv = {O1: "sdf", O2: [0, 1, 2, 3, new Uint8Array(16)], O3: [0, 1, 2, 3, window.crypto.getRandomValues(new Uint8Array(16))]};
    return iv;
}
