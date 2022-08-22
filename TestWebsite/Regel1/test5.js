test1f(); 
test2f(); 
test3f(); 
test4f[0](); 
test5f[0].t(); 
test6f.t(); 
test7f(); 
test8f(); 
test9f[0](); 
test10f[0].t(); 
test11f.t();

let data12 = new TextEncoder().encode("ich werde verschlüsselt")

        let cipher = window.crypto.subtle.encrypt(
            {
                name: "AES-CBC",
                iv: window.crypto.getRandomValues(new Uint8Array(16)),
            },
            key,
            data12);


function test1f() {
    console.log("test 1");
}

let test2f = function() {
    console.log("test 2");
}

let test3f = () => function() {
    console.log("test 3");
}

let test4f = [function() {console.log("test 4");}];

let test5f = [{t: function() {console.log("test 4");}}];

let test6f = {t: function() {console.log("test 6")}};

let test7f, test8f, test9f, test10f, test11f;

test7f = function() {
    console.log("test 7");
}

test8f = () => function() {
    console.log("test 8");
}

test9f = [function() {console.log("test 9");}];

test10f = [{t: function() {console.log("test 10");}}];

test11f = {t: function() {console.log("test 11")}};



