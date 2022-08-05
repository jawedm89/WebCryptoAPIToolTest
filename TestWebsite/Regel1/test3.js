let data = new TextEncoder().encode("ich werde verschlüsselt")

function rand() {
    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    return iv;
} 

window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(async function (key) {
        let cipher = await window.crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv: rand(),
            },
            key,
            data);
            return cipher;
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CBC aus der then()-Methode", result)
    });

    async function encryptGCM() {
        let bool = true;
        if (bool === true) {
            let iv = rand();
        }
        else {
            let iv = window.crypto.getRandomValues(new Uint8Array(16));
        }
        let key = await window.crypto.subtle.generateKey(
            {
                name: "AES-GCM",
                length: 256,
            },
            false,
            ["encrypt", "decrypt"]
        )
        let chiffre = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            key,
            data
        );
        console.log("hier kommt die Chiffre von AES-GCM aus der async Funktion", chiffre);
    }

    async function encryptGCM2() {
        let bool = true;
        if (bool === true) {
            let iv = rand();
        }
        else {
            let iv = new Uint8Array(16);
        }
        let key = await window.crypto.subtle.generateKey(
            {
                name: "AES-GCM",
                length: 256,
            },
            false,
            ["encrypt", "decrypt"]
        )
        let chiffre = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            key,
            data
        );
        console.log("hier kommt die Chiffre von AES-GCM aus der async Funktion", chiffre);
    }

encryptGCM();
encryptGCM2();