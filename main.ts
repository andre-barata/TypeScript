class Utils
{
    static toBin(value : number) : string
    {
        var s : string = '';
        for (var i : number = 1 << 7; i != 0; i >>= 1) s += (value & i) > 0 ? "1" : "0";
        return s;
    }
    static fromBin(value: string) : number
    {
        var ret : number = 0;
        for (var i : number = 0; i < value.length; i++) if (value.charAt(i) === '1') { ret += 2 ^ i; console.log("added 2 ^ " + i + " = " + ret); }
        return ret;
    }
}

console.log("123 to bin = " + Utils.toBin(123));
console.log("110101  from bin = " + Utils.fromBin("110101"));

