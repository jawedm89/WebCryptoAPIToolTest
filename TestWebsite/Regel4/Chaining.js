let klarTextR4T3 = new TextEncoder().encode("ich werde verschlüsselt");
let AESKeyR4T3 = window.crypto.subtle.generateKey({
    name: "AES-CBC",
    length: 256,},
    true,
    ["encrypt", "decrypt"]);

async function ExKey1R2T3() {
    return await await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3);
}


async function Regel4Test3() {
  
    let ExKey2R2T3 = await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3);
    let ExKey4R2T3 = {O1: 23,O2: "sdf", O3: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3)};
    let ExKey6R2T3 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3)];
    let ExKey7R2T3 = [0, 1, 2, 3, 4, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3)];
    let ExKey9R2T3 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3)}];
    let ExKey10R2T3 = [0, 1, {O1: 3}, 3, {O2: await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3)}];
    let ExKey11R2T3 = {O1: 3, O2: "sdf", O3: {O1: 3}, O4: [0, 1, await window.crypto.subtle.exportKey("jwk", await AESKeyR4T3), 3, 4]};
    let chain1 = await ExKey1R2T3();
    let chain2 = [1, 2, 3, chain1];
    let chain3 = ExKey2R2T3;
    let chain4 = {O1: "sdf", O2: chain3};
    chain4.O2 = "vict943nq9xemxefq9uhcn9xm3e"
    let chain5 = ExKey4R2T3;
    let chain6 = chain5.O3;
    let chain7 = ExKey6R2T3;
    let chain8 = {O1: 12, O2: chain7, O3: "sdf"};
    let chain9 = [0, 1, 2, 3, chain8, 5];
    let chain10 = ExKey7R2T3;
    let chain11 = {O1: 12, O2: chain10, O3: "sdf"};
    let chain12 = [0, 1, 2, 3, chain11, 5];
    let chain13 = {O1: ExKey9R2T3, O2: 1, O3: "sdf"}
    let chain14 = [0, chain13, 2, 3];
    let chain15 = [0, 1, ExKey11R2T3, 3];
    let chain16 = {O1: 1, O2: "sdf", O3: 12, O4: chain15};
    let chain17 = chain15[2].O4;
    
    console.log(chain2[3].k);
    console.log(chain4.O2);
    console.log(chain6);
    console.log(chain9[4].O2[5]);
    console.log(chain12[4].O2[5]);
    console.log(chain14[1].O1[4].O2);
    console.log(chain17[2]);

}

Regel4Test3();