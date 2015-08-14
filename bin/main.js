var Utils = (function () {
    function Utils() {
    }
    Utils.numToBin = function (value) {
        var s = '';
        for (var i = 1 << 7; i != 0; i >>= 1)
            s += (value & i) > 0 ? "1" : "0";
        return s;
    };
    Utils.binToNum = function (value) {
        var ret = 0;
        for (var i = 0; i < value.length; i++)
            if (value.charAt(value.length - i - 1) === '1')
                ret += 1 << i;
        return ret;
    };
    return Utils;
})();

console.log("123 to bin = " + Utils.numToBin(123));
console.log("110101  from bin = " + Utils.binToNum("110101"));
//# sourceMappingURL=main.js.map
