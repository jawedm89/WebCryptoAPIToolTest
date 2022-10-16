async function compare(WebCryptoAPIScripts, node) {
    let result;
    for(let i = 0; WebCryptoAPIScripts.functions.length > i; i++) {
      let comp = WebCryptoAPIScripts.functions[i][0]
      do {
        if (comp.type === "MemberExpression" && node.type === "MemberExpression") {
          if (comp.property.type === node.property.type) {
            if (comp.property.type === "Identifier") {
              if (comp.property.name === node.property.name) {
                comp = comp.object;
                node = node.object;
              }
              else {
                stop = true;
              }
            }
            else {
              if (comp.property.value === node.property.value) {
                comp = comp.object;
                node = node.object;
              }
              else {
                stop = true;
              }
            }
          }
          else {
            stop = true;
          }
        }
        else if (comp.type === "Identifier" && node.type === "Identifier") {
          if (comp.name === node.name) {
            result = WebCryptoAPIScripts.functions[i];
            stop = true;
          }
          else {
            stop = true
          }
        }
        else {
          stop = true;
        }
      }
      while (stop === false)
    }
    return result;
  }