let data3 = new TextEncoder().encode("ich werde verschlüsselt");
let key3 = async function () {
  return await window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
  },
    false,
    ["encrypt", "decrypt"])
}
async function testi3() {
  async function t1() { return await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await key3(), data3) }

  let t3, t4, t5, t6, chain1;
  t3 = await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await key3(), data3)
  t4 = { a: 23, b: "sdf", t4: await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await key3(), data3) }
  t5 = [1, 2, { a: 3 }, { t6: window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await key3(), data3) }]
  t6 = [1, 2, { a: 3 }, { t6: window.crypto.subtle.encrypt({ name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)), }, await key3(), data3) }]
  let signkey = await window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  );

  let chain2 = t3;
  chain1 = chain2;
  let abc = t6[3].t6;
  abc.then(result => {
    window.crypto.subtle.sign(
      {
        name: "RSASSA-PKCS1-v1_5"
      },
      signkey.privateKey,
      result
    );
  })

  let ab = t6[3];

  ab.t6.then(result => {
    window.crypto.subtle.sign(
      {
        name: "RSASSA-PKCS1-v1_5"
      },
      signkey.privateKey,
      result
    );
  })


  window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
  },
    false,
    ["encrypt", "decrypt"]).then(async function (re) {
      let cip = await window.crypto.subtle.encrypt({
        name: "AES-CBC", iv: window.crypto.getRandomValues(new Uint8Array(16)),
      },
        re, 
        data3); 
      return cip;
    }).then(async function (result) {
      let signatur = await window.crypto.subtle.sign(
        {
          name: "RSASSA-PKCS1-v1_5"
        },
        signkey.privateKey,
        result
      );
      return signatur;
    }).then(result => console.log(result))

  return [t1(), t3, t4, t5, t6, chain1]
}
let das = testi3();

async function chain3(argu) {
  let chain4 = async function () { return await argu[5]; }
  let signkey = await window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  );

  return await chain4().then(async function (result) {
    let signatur = await window.crypto.subtle.sign(
      {
        name: "RSASSA-PKCS1-v1_5"
      },
      signkey.privateKey,
      result
    );
    console.log("chain", signatur);
    return signatur;
  });
}

async function ee() {
  console.log(await chain3(await testi3()));
  let chain5 = await das;
  let chain6 = await chain5[3][3].t6;
  let chain7 = das;
  let signkey = await window.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  );

  chain7.then(async function(result) {
    return await result[2].t4
  }).then(result2 => console.log(result2, "halo"))

  window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey.privateKey,
    chain6
  ).then(result => console.log("huhu", result));
}
ee();