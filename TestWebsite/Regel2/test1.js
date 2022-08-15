let iv = window.crypto.getRandomValues(new Uint8Array(16));
let encoder = new TextEncoder();
let data = encoder.encode("ich bin verschlüsselt");
let encSign;

async function genKeyAES() {
  let key = await window.crypto.subtle.generateKey(
    {
      name: "AES-CBC",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"]
  );
  return key;
}

async function genSignKey() {
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
  return signkey;
}

async function start() {
  let key = await genKeyAES();
  let signkey = await genSignKey();
  let encryption;
  let encSign = await window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv
    },
    key,
    data
  ).then(async function(result)  {
    encryption = result;
    signatur = await window.crypto.subtle.sign(
      {
        name: "RSASSA-PKCS1-v1_5"
      },
      signkey.privateKey,
      result 
    );
    return signatur;
  })
}

async function sign(cipher) {
  let signkey = await genSignKey();
  signatur = await window.crypto.subtle.sign(
    {
      name: "RSASSA-PKCS1-v1_5"
    },
    signkey.privateKey,
    cipher
  );
  return signatur;
}

async function encryp() {
  let cipher = await window.crypto.subtle.encrypt(
  {
    name: "AES-CBC",
    iv
  },
  key,
  data
);
return cipher;
}

async function encryp2() {
  return await window.crypto.subtle.encrypt(
  {
    name: "AES-CBC",
    iv
  },
  key,
  data
);
}

async function encryp3() {
  let cipher;
  cipher = await window.crypto.subtle.encrypt(
  {
    name: "AES-CBC",
    iv
  },
  key,
  data
);
return cipher;
}

let ci = encryp();
let sig = sign(ci);

console.log(ci, sig);
