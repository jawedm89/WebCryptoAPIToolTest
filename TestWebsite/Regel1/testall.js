let data = new TextEncoder().encode("ich werde verschlüsselt")

window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(async function (key) {
        let cipher = await window.crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv: window.crypto.getRandomValues(new Uint8Array(16)),
            },
            key,
            data);
            return cipher;
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CBC aus der then()-Methode", result)
    });

window.crypto.subtle.generateKey({
    name: "AES-CTR",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(async function (key) {
        let cipher = await window.crypto.subtle.encrypt(
            {
                name: "AES-CTR",
                counter: window.crypto.getRandomValues(new Uint8Array(16)),
                length: 128,
            },
            key,
            data
        );
        return cipher;
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
).then(async function (key) {
    let cipher = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: window.crypto.getRandomValues(new Uint8Array(12)),
        },
        key,
        data);
        return cipher;
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


let iv = window.crypto.getRandomValues(new Uint8Array(16));

window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,
},
    false,
    ["encrypt", "decrypt"]).then(async function (key) {
        let cipher = await window.crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv: iv,
            },
            key,
            data);
            return cipher;
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CBC aus der then()-Methode", result)
    });

    async function encryptCTR2() {
        let iv2 = window.crypto.getRandomValues(new Uint8Array(16));
        let key = await window.crypto.subtle.generateKey({
            name: "AES-CTR",
            length: 256,
        },
            false,
            ["encrypt", "decrypt"]);
    
        let chiffre = await window.crypto.subtle.encrypt(
            {
                name: "AES-CTR",
                counter: iv2,
                length: 128
            },
            key,
            data
        );
        console.log("hier kommt die Chiffre von AES-CTR aus der async Funktion", chiffre);
    }

    async function encryptGCM2() {
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

encryptCTR2();
encryptGCM2();

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

    async function encryptGCM3() {
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

    async function encryptGCM4() {
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

encryptGCM3();
encryptGCM4();

async function encryptCBC5(key, rand) {
    let chiffre = await window.crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv: rand,
        },
        key,
        data
    );
    return chiffre;
}

async function enc() {
    let key = await window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256,
    },
        false,
        ["encrypt", "decrypt"]);
    console.log(encryptCBC5(key, window.crypto.getRandomValues(new Uint8Array(16))));
}

let encryptCBC6 = async function (key, rand) {
    let chiffre = await window.crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv: rand,
        },
        key,
        data
    );
    return chiffre;
}

let enc2 = async function () {
    let iv =  window.crypto.getRandomValues(new Uint8Array(16));
    let key = await window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256,
    },
        false,
        ["encrypt", "decrypt"]);
    return encryptCBC6(key, iv);
}

enc();
enc2();

