let data12 = new TextEncoder().encode("ich werde verschlüsselt")

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
            data12);
            return cipher;
    }).then(result => {
        console.log("hier kommt die Chiffre von AES-CBC aus der then()-Methode", result)
    });


function test1() {
    console.log("test 1");
}

let test2 = function() {
    console.log("test 2");
}

let test3 = () => function() {
    console.log("test 3");
}

let test4 = [function() {console.log("test 4");}];

let test5 = [{t: function() {console.log("test 4");}}];

let test6 = {t: function() {console.log("test 6")}};

let test7, test8, test9, test10, test11;

test7 = function() {
    console.log("test 7");
}

test8 = () => function() {
    console.log("test 8");
}

test9 = [function() {console.log("test 9");}];

test10 = [{t: function() {console.log("test 10");}}];

test11 = {t: function() {console.log("test 11")}};

test1(); 
test2(); 
test3(); 
test4[0](); 
test5[0].t(); 
test6.t(); 
test7(); 
test8(); 
test9[0](); 
test10[0].t(); 
test11.t();

