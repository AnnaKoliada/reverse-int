module.exports = function reverse(n) {
    num = String(parseInt(n));
    num = num.split("").reverse().join("");
    number = String(parseInt(num));
    return number;
};
