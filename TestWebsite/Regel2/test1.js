let data1 = new TextEncoder().encode("ich werde verschlüsselt");
let key = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]);


//Eine Funktion die das Promise der Cipher wieder gibt.
async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await key,data1)}
//Hier wird das Promis der Cipher in t2 gespeichert
let t2 = key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))

let t3 = key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))
let t4, t5, t6;
//Hier wird das Promis der Cipher in einem Objekt gespeichter unter dem Key t4. 
t4 = {a: 23,b: "sdf", t4: key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))}
let t4a = {a: 23,b: "sdf", t4: key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))}
//Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 4.
t5 = [1, 2, 3, 4, key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))]
let t5a = [1, 2, 3, 4, key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))]
//Hier wird das Promis der Cipher in einem Array gespeichert unter dem Index 2. Hier wird es als Objekt unter dem Key t6 aufrufbar. 
t6 = [1, 2, {a: 3}, {t6: key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1))}]
let t6a = [1, 2, {a: 3}, {t6: key.then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data1)), b: 12}]
let signkey = window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048, 
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  ).then(result => {return result});

  t1().then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t2.then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t4.t4.then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t4a.a.then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t5[4].then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t5a[1].then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t6[3].t6.then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t6a[0].then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  t6a[3].b.then(async function (result) {
    let signkey2 = await signkey;
    return window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey2.privateKey,
    result
  );}).then(console.log)

  