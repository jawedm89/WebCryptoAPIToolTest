let data12 = new TextEncoder().encode("ich werde verschlüsselt");
let key = async function() {return await window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"])}

    window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256,
    },
        false,
        ["encrypt", "decrypt"]).then(result => window.crypto.subtle.encrypt({name: "AES-CBC",iv: window.crypto.getRandomValues(new Uint8Array(16)),}, result,data12)).then(
            async function (res) {
                let sig = await window.crypto.subtle.generateKey(
                    {
                      name: "RSASSA-PKCS1-v1_5",
                      modulusLength: 2048, 
                      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                      hash: { name: "SHA-256" },
                    },
                    false,
                    ["sign", "verify"]
                  );
                  return [res, sig]
            }
        ).then(async function (result) {
            let key  = await result[1].privateKey;
            console.log(key);
            let cipher = await result[0];
            return window.crypto.subtle.sign(
            {
              name: "RSASSA-PKCS1-v1_5"
            },
            key,
            cipher
          );
        }).then(console.log)
    

window.crypto.subtle.generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048, 
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: { name: "SHA-256" },
        },
        false,
        ["sign", "verify"]
      ).then()