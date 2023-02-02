String.prototype.toAlternatingCase = function () {
    return this.split('').map(function(char) {
    if (char === char.toUpperCase()) {
    return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
    return char.toUpperCase();
    } else {
    return char;
    }
    }).join('');
    }