let klarTextR1T3 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T3 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);
  
async function func1R1T3(iv) {
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T3, klarTextR1T3));
}
async function func2R1T3(placeholder1, iv, placeholder2) {
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T3, klarTextR1T3), placeholder1, placeholder2);
}

async function func3R1T3(iv, placeholder2, placeholder1) {
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T3, klarTextR1T3), placeholder1, placeholder2);
}

async function func4R1T3(placeholder1, placeholder2, iv) {
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv}, await AESKeyR1T3, klarTextR1T3), placeholder1, placeholder2);
}

function func4R1T3() {
    return window.crypto.getRandomValues(new Uint8Array(16));
}

function func5R1T3() {
    return new Uint8Array(16);
}

async function Regel1T3() {
    let iv2 = window.crypto.getRandomValues(new Uint8Array(16));
    let iv3 = new Uint8Array(16);
    func1R1T3(iv);
    func2R1T3("placeholder", window.crypto.getRandomValues(new Uint8Array(16)), "placeholder");
    func2R1T3("placeholder",iv2, "placeholder");
    func2R1T3("placeholder", func4R1T3(), "placeholder");
    func3R1T3(new Uint8Array(16), "placeholder", "placeholder");
    func3R1T3(iv3, "placeholder", "placeholder");
    func3R1T3(func5R1T3(), "placeholder", "placeholder");
    func4R1T3("placeholder", "placeholder", window.crypto.getRandomValues(new Uint8Array(16)));
    func4R1T3("placeholder", "placeholder", iv2);
    func4R1T3("placeholder", "placeholder", func4R1T3());
}


let iv = window.crypto.getRandomValues(new Uint8Array(16));
func1R1T3(window.crypto.getRandomValues(new Uint8Array(16)));
func1R1T3(new Uint8Array(16));
func1R1T3(iv);
func2R1T3("placeholder", window.crypto.getRandomValues(new Uint8Array(16)), "placeholder");
func2R1T3("placeholder", func4R1T3(), "placeholder");
func3R1T3(new Uint8Array(16), "placeholder", "placeholder");
func3R1T3(iv, "placeholder", "placeholder");
func3R1T3(func5R1T3(), "placeholder", "placeholder");
func4R1T3("placeholder", "placeholder", window.crypto.getRandomValues(new Uint8Array(16)));
func4R1T3("placeholder", "placeholder", func5R1T3());