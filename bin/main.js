//# sourceMappingURL=main.js.map

var Teste = (function () {
    function Teste() {
        console.log("constructor called");
    }
    Teste.prototype.test = function () {
        console.log("test called");
    };
    Teste.prototype.method2 = function () {
        console.log("teste");
    };
    return Teste;
})();

console.log("hello");

var a = new Teste();
a.test();
a.method2();


