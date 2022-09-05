let data12 = new TextEncoder().encode("ich werde verschlüsselt");
let key = async function() {return await window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"])}
async function testi3() {
async function t1() {return await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)}
 
let cip = 12;
let t2 = await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, await key(),data12)
let t3, t4, t5, t6, chain1;
t3 = await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)
t4 = {a: 23,b: "sdf", t4: await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)}
t5 = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)]
t6 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)}]
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


window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(async function(re) {let cip = await window.crypto.subtle.encrypt({
  	name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},
   re,data12); return cip;
   }).then(async function(result)  {
        let signatur = await window.crypto.subtle.sign(
          {
            name: "RSASSA-PKCS1-v1_5"
          },
          signkey.privateKey,
          result
        );
        return signatur;
      }).then(result => console.log(result))
      return [t1(), t2, t3, t4, t5, t6, chain1]
    }
    console.log(testi3());
    let das = testi3();

    async function chain3(argu) {
        let chain4 = async function () {return await argu[6];}
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
        await chain4().then(async function(result)  {
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

    async function ee(a) {
    console.log(await chain3(await testi3()));

    }
    ee();