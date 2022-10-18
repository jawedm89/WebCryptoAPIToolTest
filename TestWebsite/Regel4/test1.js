async function func1R4T1() {
    let key = await window.crypto.subtle.generateKey(
        {
            name: "AES-CTR",
            length: 256, 
        },
        true,
        ["encrypt", "decrypt"] 
    );
    let exkey = await window.crypto.subtle.exportKey(
        "jwk",
        key 
    );
    exkey.k = "1234";
    exkey = 123;
}

async function func2R4T1() {
    let key = await window.crypto.subtle.generateKey(
        {
            name: "AES-CTR",
            length: 256, 
        },
        true, 
        ["encrypt", "decrypt"] 
    );
    let exkey = await window.crypto.subtle.exportKey("jwk", key);
    exkey = 123;
}