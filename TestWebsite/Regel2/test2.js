let data2 = new TextEncoder().encode("ich werde verschlüsselt");
let key = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(result => {key = result});


function test2() {
    async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}
    let t2 = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}
    t3 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, key,data2)}]

    return [t1(), t2, t3]
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

test2()[1].then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[2][3].t6.then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[2][3].then(result => window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result));

test2()[2][3].t6.then(result => signieren(result));

test2()[2][3].t6.then(function (result) {
    console.log("gleich wird signiert");
    return result;
    }).then(signieren)