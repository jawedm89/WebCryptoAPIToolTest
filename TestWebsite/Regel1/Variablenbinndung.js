let klarTextR1T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR1T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    false,
    ["encrypt", "decrypt"]);


async function func1R1T1() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let iv2 = new Uint8Array(16);
    let key = await AESKeyR1T1;
    let iv3 = iv;
    let iv4 = iv2;
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv3,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv4,}, key, klarTextR1T1));

    iv = new Uint8Array(16);
    iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv,}, key, klarTextR1T1));
    iv2 = window.crypto.getRandomValues(new Uint8Array(16));
    iv2 = new Uint8Array(16);
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2,}, key, klarTextR1T1));
}

async function func2R1T1() {
    let key = await AESKeyR1T1;
    let iv1 = [0, 1, new Uint8Array(16), window.crypto.getRandomValues(new Uint8Array(16))];
    let iv2 = {O1: window.crypto.getRandomValues(new Uint8Array(16)), O2: "sdf", O3: new Uint8Array(16)}
    let iv3 = [0, {O1: "sdf", O2: window.crypto.getRandomValues(new Uint8Array(16)), O3: new Uint8Array(16)}, 2, 3];
    let iv4 = {O1: "sdf", O2: [0, 1, 2, 3, new Uint8Array(16)], O3: [0, 1, 2, 3, window.crypto.getRandomValues(new Uint8Array(16))]};

    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv1[3],}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv1[2],}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2.O1,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv2.O3,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv3[1].O2,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv3[1].O3,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv4.O3[4],}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv4.O2[4],}, key, klarTextR1T1));
    iv3[1].O2 = new Uint8Array(16);
    iv4.O3[4] = new Uint8Array(16);
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv3[1].O2,}, key, klarTextR1T1));
    console.log(await window.crypto.subtle.encrypt({name: "AES-CBC",iv: iv4.O3[4],}, key, klarTextR1T1));
}

func1R1T1();
func2R1T1();