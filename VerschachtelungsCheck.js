function verschachtelungsCheck(found, node) {
    let foundId, foundInit, returnElement;
    if (found.type === "VariableDeclarator") {
        console.log(found, node)
        foundId = makeArray2(found.id);
        foundInit = found.init;
        node = makeArray2(node);
    }
    else if (found.type === "AssignmentExpression") {
        foundId = makeArray2(found.left);
        foundInit = found.right;
        node = makeArray2(node);
    }
    else {
        foundId = [];
        foundInit = found;
    }
    for (let i = 0; i < foundId.length; i++) {
        if (node[i].type === "Identifier" && foundId[i].type === "Identifier") {
            if (node[i].name === foundId[i].name) {
            }
            else {
                return false;
            }
        }
        else if (node[i].type === "Literal" && foundId[i].type === "Literal") {
            if (node[i].value === foundId[i].value) {
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
        if (i + 1 === foundId.length) {
            node = node.slice(i + 1);
        }
    }
    for (let i = 0; i < node.length; i++) {
        console.log(node, foundInit)
        if (node[i].type === "Identifier" && foundInit.type === "ObjectExpression") {
            let weiter = false;
            foundInit.properties.forEach(element => {
                if (element.key.name === node[i].name) {
                    foundInit = element.value;
                    weiter = true;
                }
            });
            if (weiter === true) {
            }
            else {
                return false;
            }
        }
        else if (node[i].type === "Literal" && foundInit.type === "ArrayExpression") {
            if (foundInit.elements[node[i].value]) {
                foundInit = foundInit.elements[node[i].value];
            }
            else {
                return false;
            }
        }
        else if (foundInit.type === "Identifier") {
            let newNode = foundInit;
            for (i = i; i < node.length; i++) {
                newNode = { property: node[i], object: newNode, type: "MemberExpression", start: foundInit.start, end: foundInit.end }
            }
            return newNode;
        }
        else if (foundInit.type === "CallExpression") {
            let newNode = foundInit;
            for (let j = 0; j < node.length; j++) {
                newNode = { property: node[j], object: newNode, type: "MemberExpression", start: foundInit.start, end: foundInit.end }
            }
            return newNode;
        }
        else if (foundInit.type === "MemberExpression") {
            let newNode = foundInit;
            for (let j = 0; j < node.length; j++) {
                newNode = { property: node[j], object: newNode, type: "MemberExpression", start: foundInit.start, end: foundInit.end }
            }
            return newNode;
        }
        else {
            return false;
        }
    }
    return foundInit;
}

function makeArray2(node, callex) {
    let result = [];
    let stop = false;
    let callExpr;
    do {
        if (node.type === "Identifier") {
            stop = true;
            result.unshift(node)
        }
        else if (callex === true && node.type === "CallExpression") {
            console.log(callex, node.type)
            //result.unshift(node);
            callExpr = node;
            node = node.callee;
        }
        else {
            result.unshift(node.property);
            node = node.object;
        }
    }
    while (stop === false);
    if (callex) {
        return [result, callExpr]
    }
    else {
        return result;
    }
}