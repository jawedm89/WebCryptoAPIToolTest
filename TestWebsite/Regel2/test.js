let data2 = new TextEncoder().encode("ich werde verschlüsselt");
let key = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(result => {key = result});


function test2() {
    //Eine Funktion die das Promise der Cipher wieder gibt.
    async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}
    //Hier wird das Promis der Cipher in t2 gespeichert
    let t2 = window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)

    let t3 = window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)
    let t4, t5, t6;
    //Hier wird das Promis der Cipher in einem Objekt gespeichter unter dem Key t4. 
    t4 = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}
    let t4a = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}
    //Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 4.
    t5 = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)]
    let t5a = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)]
    //Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 2. Hier wird es als Objekt unter dem Key t6 aufrufbar. 
    t6 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}]
    let t6a = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2), b: 12}]

    return [t1(), t2, t3, t4, t4a, t5, t5a, t6, t6a]
}
let signkey2 = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  ).then(result => {return result})

function signieren(cipher) {
    return window.crypto.subtle.sign(
        {
          name: "RSASSA-PKCS1-v1_5"
        },
        signkey2.privateKey,
        cipher)
}

test2()[0].then(result => window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[4].then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[7][3].t6.then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[7][3].then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[7][3].t6.then(result => signieren(result));

test2()[7][3].t6.then(function (result) {
    console.log("gleich wird signiert");
    return result;
    }).then(result2 => signieren(result2))