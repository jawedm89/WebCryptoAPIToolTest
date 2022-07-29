document.addEventListener("DOMContentLoaded", function (event) {
    let scripts = document.scripts;
    let jsscripts = [];
    let WebCryptoAPIScripts = [];
    const acorn = require('acorn');
    const walk = require("acorn-walk");
    const obj = require("./bundle")

    async function RegelVerteiler(WebCryptoAPIScripts) {
      try {
        for (let i = 0; i < Object.keys(WebCryptoAPIScripts).length; i++) {
          if (WebCryptoAPIScripts[i].regel1.length != 0) {
            console.log("starte regel 1", WebCryptoAPIScripts[i].regel1, i);
            Regel1(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel2.length != 0) {
            console.log("starte Regel 2");
            Regel2(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel3.length != 0) {
            Regel3(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel4.length != 0) {
            Regel4(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel5.length != 0) {
            Regel5(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel6.length != 0) {
            Regel6(WebCryptoAPIScripts[i]);
          }
          if (WebCryptoAPIScripts[i].regel7.length != 0) {
            Regel7(WebCryptoAPIScripts[i]);
          }
        }
      }
      catch (e) {
        console.log(e);
      }
    }

    async function hin() {
      jsscripts = await laden(scripts, jsscripts);
      WebCryptoAPIScripts = await objectGen(WebCryptoAPIScripts, jsscripts, scripts);
      await RegelVerteiler(WebCryptoAPIScripts);
    }
    hin();


    async function Regel1(WebCryptoAPIScripts) {
      for (let i = 0; i < WebCryptoAPIScripts.regel1.length; i++) {
        try {
          let props = walk.findNodeAround(WebCryptoAPIScripts.ast, WebCryptoAPIScripts.regel1[i], "CallExpression").node.arguments[0].properties;
          let encMode = props[0].value.value;
          if (encMode == "AES-CTR" || encMode == "AES-GCM" || encMode == "AES-CBC") {
            let arr = [props[1].value];
            let ergebnis = [];
            do {
              let s = await typeCheck(arr.pop(), WebCryptoAPIScripts);
              if (typeof s === "boolean") {
                ergebnis.push(s);
              }
              else {
                console.log(s);
                s.forEach(element => { arr.push(element) })
              }
            } while (arr.length > 0)
            if (ergebnis.every(element => element === true)) {
              console.log("Regel 1 wurde eingehalte für: ", WebCryptoAPIScripts.src, "an der Stelle: ", WebCryptoAPIScripts.regel1[i])
            }
            else {
              console.log("Regel 1 wurde nicht eingehalte für: ", WebCryptoAPIScripts.src, "an der Stelle: ", WebCryptoAPIScripts.regel1[i])
              window.alert("IV wurde nicht korrekt initialisiert!");
            }
          }
        }
        catch (e) {
          console.log("War wohl ein Kommentar und kein richtiger API Call ", e);
        }
      }
    }



    async function Regel2(WebCryptoAPIScripts) {
      let sign = [];
      for (let i = 0; i < WebCryptoAPIScripts.regel3.length; i++) {
        let signTyp = walk.findNodeAround(WebCryptoAPIScripts.ast, WebCryptoAPIScripts.regel3[i], "CallExpression").node.arguments[0].properties[0].value.value;
        if (signTyp === "RSASSA-PKCS1-v1_5" || signTyp === "RSA-PSS" || signTyp === "ECDSA" || signTyp === "HMAC") {
          sign.push(signTyp);
        }
      }
      for (let i = 0; i < WebCryptoAPIScripts.regel2.length; i++) {
        let encMode = walk.findNodeAround(WebCryptoAPIScripts.ast, WebCryptoAPIScripts.regel2[i], "CallExpression").node.arguments[0].properties[0].value.value;
        if (encMode === "AES-CBC" || encMode === "AES-CTR" && sign.length != 0) {
          console.log("Regel 2")
        }
        else {
          console.log("Verstoß gegen Regel 2!");
        }
      }
    }


    function Regel3(WebCryptoAPIScripts) {
      console.log("regel3")
    }

    function Regel4(WebCryptoAPIScripts) {
      console.log("regel4")
    }

    function Regel5(WebCryptoAPIScripts) {
      console.log("regel5")
    }

    function Regel6(WebCryptoAPIScripts) {
      console.log("regel6")
    }

    function Regel7(WebCryptoAPIScripts) {
      console.log("regel7")
    }


    async function correctRandomValueCheck(node) {
      console.log("Check ob die Callexpression der API call ist: ", node);
      if (node.callee.object.object.name === "window" && node.callee.object.property.name === "crypto" && node.callee.property.name === "getRandomValues") {
        return true;
      }
      else {
        return false;
      }
    }

    async function typeCheck(node, WebCryptoAPIScripts) {
      if (node.type === "Identifier") {
        console.log("jetzt wird der Identifier gecheckt für: ", node);
        let r = await identifierValueCheck(node, WebCryptoAPIScripts);
        console.log(r);
        return r;
      }
      if (node.type === "CallExpression" && node.callee.type === "MemberExpression") {
        console.log("jetzt wird die Callexpression gecheckt für: ", node);
        let r = await correctRandomValueCheck(node);
        return r;
      }
      if (node.type === "CallExpression" && node.callee.type != "MemberExpression") {
        let chek = [];
        for (let i = 0; WebCryptoAPIScripts.functions.length > i; i++) {
          if (WebCryptoAPIScripts.functions[i].id.name === node.callee.name) {
            chek = await NodeWalk(WebCryptoAPIScripts.functions[i]);
          }
        }
        let filter = chek.filter(element => element.type === "ReturnStatement");
        filter.forEach(function (element, index, arr) {
          arr[index] = element.argument;
        });
        return filter;
      }
      else {
        return false;
      }
    }


    async function identifierValueCheck(node, WebCryptoAPIScripts) {
      let RegelEingehalten = true;
      let check = [];
      let inOrOut = await inOrOutFunction(node.start, WebCryptoAPIScripts.functions);
      let arr = [];
      if (inOrOut === "OutSideFunction") {
        arr = await NodeWalk(WebCryptoAPIScripts.ast, node.end, "FunctionDeclaration");
      }
      else {
        arr = await NodeWalk(inOrOut);
      }
      let i = arr.length - 1;
      let found = [];
      let SwitchOrIf = [];
      do {
        try {
          switch (arr[i].type) {
            case "VariableDeclaration":
              if (arr[i].declarations.id.name === node.name) {
                found.push(arr[i].declarations.init);
                console.log("gefunden", arr[i].declarations.id.name);
              }
              break;
            case "AssignmentExpression":
              if (arr[i].left.name === node.name) {
                found.push(arr[i].right);
              }
              break;
            case "IfStatement":
              SwitchOrIf.push(arr[i]);
              break;
            case "SwitchStatement":
              SwitchOrIf.push(arr[i]);
              break;
          }
        }
        catch (e) {//console.log(e)
        }
        i = i - 1;
      } while (i > 0)
      console.log("test hier", found);
      if (SwitchOrIf.length > 0) {
        console.log(SwitchOrIf, found)
        for (let i = 0; found.length > i; i++) {
          SwitchOrIf.forEach(element => {
            console.log(found[i].start, element.start)
            if (found[i].start > element.start && found[i].end < element.end) {
              found[i].keepMe = true;
            }
            else {
              found[i].keepMe = false;
            }
          });
        }
        found.forEach(element => {
          if (element.keepMe === true) {
            console.log("ich pushe das", element)
            check.push(element);
          }
        });
      }
      if (found.length >= 1) {
        check.push(found[found.length - 1]);
        console.log("check this", check);
        return check;
      }
      else {
        if (inOrOut = ! "OutSideFunction") {
          if (node.name === inOrOut.params.Identifier.name) {
            //Suche alle Function calls, für jeden checken ob in or outside einer Funktion. 
          }
          else {
            let searchHere = await NodeWalk(WebCryptoAPIScripts.ast, WebCryptoAPIScripts.ast.end, "FunctionDeclaration");

          }
        }
        else {
          return false;
        }
      }
    }

    async function inOrOutFunction(start, functions) {
      let arr = [];
      functions.forEach(element => {
        if (element.start <= start && element.end >= start) {
          arr.push(element);
        }
      });
      if (arr.length >= 1) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i].start < min.start) {
            min = arr[i];
          }
        }
        return min;
      }
      else {
        return "OutSideFunction";
      }
    }
  });