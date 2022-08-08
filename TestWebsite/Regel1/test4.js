let data = new TextEncoder().encode("ich werde verschlüsselt")


async function encryptCBC(key, rand) {
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
    console.log(encryptCBC(key, window.crypto.getRandomValues(new Uint8Array(16))));
}