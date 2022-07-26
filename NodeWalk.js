async function d(node, end, auslassen) {
    let nexti = [];
    let waiting = [];
    if (node != null && node.start < end) {
        if (Object.keys(node) != null && Object.keys(node)[0] === '0') {
            for (let bodyy = 0; bodyy < Object.keys(node).length; bodyy++) {
                if (bodyy === 0) {
                    nexti.push(node[bodyy]);
                }
                else {
                    waiting.unshift(node[bodyy])
                }
            }
            return [nexti, waiting];
        }
        if (node.type === auslassen) {
            return [nexti, waiting];
        }
        else {
            let gefunden = false;
            Object.entries(node).forEach(([key, value]) => {
                if (typeof value === "object" && value != null) {
                    try {
                        value.forEach(element => {
                            if (element.type != auslassen && element.start < end) {
                                if (gefunden === false) {
                                    nexti.push(element);
                                    gefunden = true;
                                }
                                else {
                                    waiting.unshift(element)
                                }
                            }
                        })
                    }
                    catch (e) {
                        if (gefunden === false) {
                            nexti.push(value);
                            gefunden = true;
                        }
                        else {
                            waiting.unshift(value)
                        }
                    }
                }

            });
            return [nexti, waiting];
        }
    }
    return [nexti, waiting];
}

async function NodeWalk(node, end, auslassen) {
    let next = [node];
    let arr = [];
    let waiting = [];
    if (auslassen === undefined) {
        auslassen = "";
    }
    if (end === undefined) {
        end = Number.POSITIVE_INFINITY;
    }
    do {
        if (next.length > 0) {
            arr.push(next[0]);
            let result = await d(next[0], end, auslassen);
            next = result[0];
            result[1].forEach(element => { waiting.push(element) })
        }
        else {
            arr.push(waiting[waiting.length - 1]);
            let result = await d(waiting.pop(), end, auslassen);
            next = result[0];
            result[1].forEach(element => { waiting.push(element) });
        }
    } while (next.length > 0 || waiting.length > 0)
    return arr;
}