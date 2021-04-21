// Se necesita realizar algunos calculos con figuras geometricas
// para ello deberá construir una interface llamada "FiguraGeometrica"
// esta interface deberá contener la definición de métodos correspondientes a las figuras
//1. Cuadrado
//2. Circulo
//3. Rectángulo
//4. Triángulo
//5. Esfera
//6. Cono
//7. Cilindro
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura2d = /** @class */ (function () {
    function Figura2d(nombre, lados) {
        this.nombre = nombre;
        this.lados = lados;
    }
    ;
    return Figura2d;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(nombre, lados, valorLado) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.valorLado = valorLado;
        return _this;
    }
    Cuadrado.prototype.CalCularArea = function () {
        var area = this.valorLado * this.valorLado;
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Cuadrado.prototype.CalcularPerimtro = function () {
        var perimetro = this.valorLado * 4;
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Cuadrado.prototype.CalcularVolumen = function () {
        console.log("Ell " + this.nombre + " no cuenta con volumen");
    };
    return Cuadrado;
}(Figura2d));
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(nombre, lados, alto, ancho) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.alto = alto;
        _this.ancho = ancho;
        return _this;
    }
    Rectangulo.prototype.CalCularArea = function () {
        var area = this.ancho * this.alto;
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Rectangulo.prototype.CalcularPerimtro = function () {
        var perimetro = (this.alto * 2) + (this.ancho * 2);
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Rectangulo.prototype.CalcularVolumen = function () {
        console.log("Ell " + this.nombre + " no cuenta con volumen");
    };
    return Rectangulo;
}(Figura2d));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(nombre, lados, valorLado, altura) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.valorLado = valorLado;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.CalCularArea = function () {
        var area = (this.valorLado * this.altura) / 2;
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Triangulo.prototype.CalcularPerimtro = function () {
        var perimetro = this.valorLado * 3;
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Triangulo.prototype.CalcularVolumen = function () {
        console.log("Ell " + this.nombre + " no cuenta con volumen");
    };
    return Triangulo;
}(Figura2d));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(nombre, lados, radio) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.CalCularArea = function () {
        var area = (this.radio * this.radio) * 3.14;
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Circulo.prototype.CalcularPerimtro = function () {
        var perimetro = this.radio * (2 * 3.14);
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Circulo.prototype.CalcularVolumen = function () {
        console.log("Ell " + this.nombre + " no cuenta con volumen");
    };
    return Circulo;
}(Figura2d));
var Esfera = /** @class */ (function (_super) {
    __extends(Esfera, _super);
    function Esfera(nombre, lados, radio) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.radio = radio;
        return _this;
    }
    Esfera.prototype.CalCularArea = function () {
        var area = (this.radio * this.radio) * 4 * 3.14;
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Esfera.prototype.CalcularPerimtro = function () {
        var perimetro = (this.radio * 2) * 3.14;
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Esfera.prototype.CalcularVolumen = function () {
        var volumen = (4 / 3) * (this.radio * this.radio * this.radio);
        console.log("El volumen de  " + this.nombre + " es " + volumen);
    };
    return Esfera;
}(Figura2d));
var Cono = /** @class */ (function (_super) {
    __extends(Cono, _super);
    function Cono(nombre, lados, radio, generatriz, altura) {
        var _this = _super.call(this, nombre, lados) || this;
        _this.radio = radio;
        _this.generatriz = generatriz;
        _this.altura = altura;
        return _this;
    }
    Cono.prototype.CalCularArea = function () {
        var area = 3.14 * this.radio * (this.radio + this.generatriz);
        console.log("El \u00E1rea del " + this.nombre + " es   " + area);
    };
    Cono.prototype.CalcularPerimtro = function () {
        var perimetro = (this.radio * 2) * 3.14;
        console.log("El perimetro del " + this.nombre + " es   " + perimetro);
    };
    Cono.prototype.CalcularVolumen = function () {
        var volumen = (1 / 3) * 3.14 * this.altura * (this.radio * this.radio);
        console.log("El volumen de  " + this.nombre + " es " + volumen);
    };
    return Cono;
}(Figura2d));
var cuadrado = new Cuadrado("Cuadrado", 4, 5);
cuadrado.CalCularArea();
cuadrado.CalcularPerimtro();
var rectangulo = new Rectangulo("Rectangulo", 4, 5, 7);
rectangulo.CalCularArea();
rectangulo.CalcularPerimtro();
var triangulo = new Triangulo("Triangulo", 3, 5, 5);
triangulo.CalCularArea();
triangulo.CalcularPerimtro();
var circulo = new Circulo("Circulo", 0, 5);
circulo.CalCularArea();
circulo.CalcularPerimtro();
var esfera = new Esfera("Esfera", 0, 5);
esfera.CalCularArea();
esfera.CalcularPerimtro();
esfera.CalcularVolumen();
var cono = new Cono("Cono", 0, 4, 8, 10);
cono.CalCularArea();
cono.CalcularPerimtro();
cono.CalcularVolumen();
