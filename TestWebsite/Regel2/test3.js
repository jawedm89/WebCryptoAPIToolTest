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
let t3, t4, t5, t6;
t3 = await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)
t4 = {a: 23,b: "sdf", t4: await window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)}
t5 = [1, 2, 3, 4, window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)]
t6 = [1, 2, {a: 3}, {t6: window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),},await key(),data12)}]

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
      return [t1(), t2, t3, t4, t5, t6]
    }
    testi3()