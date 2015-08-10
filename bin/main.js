var Utils = (function () {
    function Utils() {
    }
    Utils.toBin = function (value) {
        var s = '';
        for (var i = 1 << 7; i != 0; i >>= 1)
            s += (value & i) > 0 ? "1" : "0";
        return s;
    };
    Utils.fromBin = function (value) {
        var ret = 0;
        for (var i = value.length; i >= 0; i--)
            if (value.charAt(i) === '1') {
                ret += 2 ^ i;
                console.log("added 2 ^ " + i + " = " + ret);
            }
        return ret;
    };
    return Utils;
})();

console.log("123 to bin = " + Utils.toBin(123));
console.log("110101  from bin = " + Utils.fromBin("110101"));
//# sourceMappingURL=main.js.map
