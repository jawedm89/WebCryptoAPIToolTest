let iv = window.crypto.getRandomValues(new Uint8Array(16));
    let encoder = new TextEncoder();
    let data = encoder.encode("ich bin verschlüsselt");
    let encryption, signatur;

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
      window.crypto.subtle.encrypt(
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
      }).then(result => {
        signatur = result;
        console.log("hier kommt die Verschlüssleung", encryption);
        console.log("hier kommt die signatur", signatur);
      }).then(function () {console.log("hallo")})
    }

    start();
