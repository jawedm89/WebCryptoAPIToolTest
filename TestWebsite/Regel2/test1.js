let klarTextR2T1 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR2T1 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]);


async function EncCall1R2T1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await AESKeyR2T1,klarTextR2T1)}
let EncCall2R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))

let EncCall3R2T1 = AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))
let EncCall4R2T1, t5, t6;
EncCall4R2T1 = {O1: 23,O2: "sdf", O3: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))}
let t4a = {a: 23,b: "sdf", t4: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))}
t5 = [1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))]
let t5a = [1, 2, 3, 4, AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))]
t6 = [1, 2, {a: 3}, {t6: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1))}]
let t6a = [1, 2, {a: 3}, {t6: AESKeyR2T1.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,klarTextR2T1)), b: 12}]
let signkeyR2T1 = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  ).then(result => {return result});

  EncCall1R2T1().then(async function (result) {
    let signkey2 = await signkeyR2T1;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  EncCall2R2T1.then(async function (result) {
    let signkey2 = await signkeyR2T1;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t4.t4.then(async function (result) {
    let signkey2 = await signkeyR2T1;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t4a.t4.then(async function (result) {
    let a = new TextDecoder().decode(result)
    return a;
    }).then(console.log)

  t5[4].then(async function (result) {
    let signkey2 = await signkeyR2T1;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t5a[4].then(async function (result) {
    let a = new TextDecoder().decode(result)
    return a;
    }).then(console.log)

  t6[3].t6.then(async function (result) {
    let signkey2 = await signkeyR2T1;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t6a[3].t6.then(async function (result) {
    let a = new TextDecoder().decode(result)
    return a;
    }).then(console.log)

