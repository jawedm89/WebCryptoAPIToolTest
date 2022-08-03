let data = new TextEncoder().encode("ich werde verschlüsselt")

window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(key => {
        window.crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv: window.crypto.getRandomValues(new Uint8Array(16)),
            },
            key,
            data)
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CBC aus der then()-Methode", result)
    });

window.crypto.subtle.generateKey({
    name: "AES-CTR",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(key => {
        window.crypto.subtle.encrypt(
            {
                name: "AES-CTR",
                counter: window.crypto.getRandomValues(new Uint8Array(16)),
                length: 128,
            },
            key,
            data
        )
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CTR aus der then()-Methode", result)
    });


window.crypto.subtle.generateKey(
    {
        name: "AES-GCM",
        length: 256,
    },
    false,
    ["encrypt", "decrypt"]
).then(key => {
    window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: window.crypto.getRandomValues(new Uint8Array(12)),
        },
        key,
        data)
}).then(result => {
    console.log("hier kommt die Chiffre von AES-GCM aus der then()-Methode", result)
});

async function encryptCBC() {
    let key = await window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256,
    },
        false,
        ["encrypt", "decrypt"]);

    let chiffre = await window.crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv: window.crypto.getRandomValues(new Uint8Array(16)),
        },
        key,
        data
    );
    console.log("hier kommt die Chiffre von AES-CBC aus der async Funktion", chiffre);
}

async function encryptCTR() {
    let key = await window.crypto.subtle.generateKey({
        name: "AES-CTR",
        length: 256,
    },
        false,
        ["encrypt", "decrypt"]);

    let chiffre = await window.crypto.subtle.encrypt(
        {
            name: "AES-CTR",
            counter: window.crypto.getRandomValues(new Uint8Array(16)),
            length: 128
        },
        key,
        data
    );
    console.log("hier kommt die Chiffre von AES-CTR aus der async Funktion", chiffre);
}


async function encryptGCM() {
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
            iv: window.crypto.getRandomValues(new Uint8Array(12)),
        },
        key,
        data
    );
    console.log("hier kommt die Chiffre von AES-GCM aus der async Funktion", chiffre);
}
encryptCBC();
encryptCTR();
encryptGCM();
