function groupBy(array, keySelector) {
    let map = new Map();
    for (let i = 0, count = array.length; i < count; ++i) {
        let val = array[i], key = keySelector(val);
        if (map.has(key))
            map.get(key).push(val);
        else
            map.set(key, [val]);
    }
    return [...map];
}

(function main() {
    let array = process.argv.slice(2); //["ABCDE", "EDBCA", "XYZ", "ZYX", "ZXY"],
    if (!array.length)
        return;
    let groups = groupBy(array, e => [...e].sort().join("")),
        max1 = Math.max(...groups.map(e => e[1].length)); // Некрасивый якобы штатный поиск максимума в массиве. Лучше реализовать отдельную функцию

    for (let item of groups.find(e => e[1].length === max1)[1]) { // Вспомнил, что есть find() :-)
        console.log(item);
    }
})();
