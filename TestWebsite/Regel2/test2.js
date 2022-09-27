let data2 = new TextEncoder().encode("ich werde verschlüsselt");
let key = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]);


async function t2() {
    async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await key,data2)}
    let t2 = {a: 23,b: "sdf", t4: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await key,data2)}
    t3 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await key,data2)}]

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
  )

async function signieren(cipher) {
  let signkey = await signkey2;
    return await window.crypto.subtle.sign(
        {
          name: "RSASSA-PKCS1-v1_5"
        },
        signkey.privateKey,
        await cipher)
}

t2().then(async function (result) {
  let signkey = await signkey2;
  window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey.privateKey,
    await result[0])});

t2().then(async function (result) {
  let signkey = await signkey2;
  window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey.privateKey,
    await result[1].t4)});

t2().then(async function (result) {
  let a = await result[1].t4;
  let b = new TextDecoder().decode(a)
  console.log(a, b)
  });

t2().then(async function (result) {
  let signkey = await signkey2;
  window.crypto.subtle.sign(
    {
        name: "RSASSA-PKCS1-v1_5"
    },
    signkey.privateKey,
    await result[2][3].t6)});

t2().then(async function (result) { 
  let a = await result[2][3].t6;
  let b = new TextDecoder().decode(a)
  console.log(a, b)
  });

t2().then(result => signieren(result[2][3].t6));

t2().then(function (result) {
    console.log("gleich wird signiert");
    return result[2][3].t6;
    }).then(signieren)