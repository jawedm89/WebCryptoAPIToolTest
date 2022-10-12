function verschachtelungsCheck(found, node) {
    let foundId, foundInit, returnElement;
    if (found.type === "VariableDeclarator") {
        foundId = found.id;
        foundInit = found.init;
    }
    else {
        foundId = found.left;
        foundInit = found.right;
    }
    node = makeArray2(node);
    foundId = makeArray2(foundId);
    for (let i = 0; i < foundId.length; i++) {
        if (node[i].type === "Identifier" && foundId[i].type === "Identifier") {
            if (node[i].name === foundId[i].name) {
                node.shift();
            }
            else {
                return false;
            }
        }
        else if (node[i].type === "Literal" && foundId[i].type === "Literal") {
            if (node[i].value === foundId[i].value) {
                node.shift();
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    for (let i = 0; i < node.length; i++) {
        if (node[i].type === "Identifier" && foundInit.type === "ObjectExpression") {
            let weiter = false;
            foundInit.properties.forEach(element => {
                if (element.key.name === node[i].name) {
                    foundInit = element.value;
                    weiter = true;
                }
            });
            if (weiter === true) {
                node.shift();
            }
            else {
                return false; 
            }
        }
        else if (node[i].type === "Literal" && foundInit.type === "ArrayExpression") {
            if (foundInit.elements[node[i].value]) {
                foundInit = foundInit.elements[node[i].value];
                node[i].shift;
            }
            else {
                return false; 
            }
        }
        else {
            return false;
        }
    }
    return foundInit;
}

function makeArray2(node) {
    let result = [];
    let stop = false
    do {
      if (node.type === "Identifier") {
        stop = true;
        result.unshift(node)
      }
      else {
        result.unshift(node.property);
        node = node.object;
      }
    }
    while (stop === false)
    return result;
  }