function fix() {
    var k = document.getElementById('k').value;
    var x = document.getElementById('x').value;
    var t = false;
    var array = Array.from(k);
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '0') {
            t = true;
            break; // Можно прервать цикл, как только найден ноль.
        }
    }

    if (!t && array.length < x) {
        array.push('0');
    } else if (!t) {
        array[x] = '0';
    }

    for (let i = 0; i < array.length; i++) {
        document.writeln(array[i]);
        if (array[i] === '0') {
            break;
        }
    }
}
