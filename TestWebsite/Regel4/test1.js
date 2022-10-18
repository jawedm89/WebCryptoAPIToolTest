async function func1R4T1() {
    let key = await window.crypto.subtle.generateKey(
        {
            name: "AES-CTR",
            length: 256, //can be  128, 192, or 256
        },
        true, //whether the key is extractable (i.e. can be used in exportKey)
        ["encrypt", "decrypt"] //can "encrypt", "decrypt", "wrapKey", or "unwrapKey"
    );
    let exkey = await window.crypto.subtle.exportKey(
        "jwk", //can be "jwk" or "raw"
        key //extractable must be true
    );
    exkey = "1234";
}