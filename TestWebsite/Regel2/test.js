let data1 = new TextEncoder().encode("ich werde verschlüsselt");
let key = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(result => {key = result});


function test2() {
    //Eine Funktion die das Promise der Cipher wieder gibt.
    async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)}
    //Hier wird das Promis der Cipher in t2 gespeichert
    let t2 = window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)

    let t3 = window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)
    let t4, t5, t6;
    //Hier wird das Promis der Cipher in einem Objekt gespeichter unter dem Key t4. 
    t4 = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)}
    let t4a = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)}
    //Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 4.
    t5 = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)]
    let t5a = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)]
    //Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 2. Hier wird es als Objekt unter dem Key t6 aufrufbar. 
    t6 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1)}]
    let t6a = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data1), b: 12}]

    return [t1(), t2, t3, t4, t4a, t5, t5a, t6, t6a]
}

test2()[0].then()