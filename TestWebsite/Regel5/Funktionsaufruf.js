let klarTextR1T2 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T2 = window.crypto.subtle.generateKey({
    name: "AES-GCM",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);
    
let a = {b: function () {
        let c = [0, 1, window.crypto.getRandomValues(new Uint8Array(16))]
        return c;
    }
}

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

function func5R1T2() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    return [0, 1, 2, iv];
}

function func6R1T2() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let obj = {O1: 12, O2: function () {return iv}};
    let obj2 = {O1: 12, O2: function () {return [window.crypto.getRandomValues(new Uint8Array(16)), new Uint8Array(16)]}};
    return [0, 1, 2, obj, obj2];
}

function func7R1T2() {
    return function () {return window.crypto.getRandomValues(new Uint8Array(16))}
}

async function Regel1T2() {    
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func6R1T2()[4].O2()[0]}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func6R1T2()[3].O2()}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func5R1T2()[3]}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func4R1T2().O2[4],}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func4R1T2().O3[4],}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func3R1T2(),}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func2R1T2()}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func1R1T2()}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: a.b()[2]}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func7R1T2()()}, await AESKeyR1T2, klarTextR1T2));
    console.log(await window.crypto.subtle.encrypt({name: "AES-GCM",iv: func6R1T2()[4].O2()[1]}, await AESKeyR1T2, klarTextR1T2));
}