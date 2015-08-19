class Utils
{
	static numToBin(value : number) : string
	{
		var s : string = '';
		for (var i : number = 1 << 31; i != 0; i >>= 1) s += (value & i) > 0 ? "1" : "0";
		return s;
	}
	static binToNum(value: string) : number
	{
		var ret : number = 0;
		for (var i : number = 0; i < value.length; i++) if (value.charAt(value.length-i-1) === '1') ret += 1<<i;
		return ret;
	}
}

console.log("123 to bin = " + Utils.numToBin(123));
console.log("110101  from bin = " + Utils.binToNum("110101"));


