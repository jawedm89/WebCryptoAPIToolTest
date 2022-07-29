window.objectGen = async function (WebCryptoAPIScripts, jsscripts, scripts) {
    const acorn = require('acorn');
    const walk = require("acorn-walk");
    let j = 0;
    let indexx;
    for (let i = 0; i < jsscripts.length; i++) {

      if (jsscripts[i].indexOf('window.crypto.subtle') != -1) {
        WebCryptoAPIScripts[j] = new Object();
        WebCryptoAPIScripts[j].src = scripts[i].src;
        WebCryptoAPIScripts[j].script = jsscripts[i];
        WebCryptoAPIScripts[j].ast = acorn.parse(jsscripts[i]);
        WebCryptoAPIScripts[j].entrys = [];
        WebCryptoAPIScripts[j].functions = [];
        walk.fullAncestor(WebCryptoAPIScripts[j].ast, ancestors => {
          if (ancestors.type === "FunctionDeclaration") {
            WebCryptoAPIScripts[j].functions.push(ancestors);
          }
        });
        WebCryptoAPIScripts[j].regel1 = [];
        WebCryptoAPIScripts[j].regel2 = [];
        WebCryptoAPIScripts[j].regel3 = [];
        WebCryptoAPIScripts[j].regel4 = [];
        WebCryptoAPIScripts[j].regel5 = [];
        WebCryptoAPIScripts[j].regel6 = [];
        WebCryptoAPIScripts[j].regel7 = [];
        let start = 0;
        do {
          indexx = WebCryptoAPIScripts[j].script.indexOf("window.crypto.subtle", start)
          if (indexx != -1) {
            let cryptoCallee = WebCryptoAPIScripts[j].script.substring(indexx + 21, WebCryptoAPIScripts[j].script.indexOf("(", indexx));
            switch (cryptoCallee) {
              case "encrypt":
                WebCryptoAPIScripts[j].regel1.push(indexx);
                WebCryptoAPIScripts[j].regel2.push(indexx);
                WebCryptoAPIScripts[j].regel3.push(indexx);
                break;
              case "sign":
                //WebCryptoAPIScripts[j].regel2.push(indexx);
                WebCryptoAPIScripts[j].regel3.push(indexx);
                break;
              case "exportKey":
                WebCryptoAPIScripts[j].regel4.push(indexx);
                WebCryptoAPIScripts[j].regel7.push(indexx);
                break;
              case "deriveBits":
                WebCryptoAPIScripts[j].regel5.push(indexx);
                break;
              case "deriveKey":
                WebCryptoAPIScripts[j].regel6.push(indexx);
                break;
            }
            WebCryptoAPIScripts[j].entrys.push(indexx);
            start = indexx + 1;
          }
        } while (indexx != -1);
        j++;
      }
    }
    return WebCryptoAPIScripts;
  }