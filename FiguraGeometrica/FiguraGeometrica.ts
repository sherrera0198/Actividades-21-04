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

//Cada clase debe implementar los métodos calcularPerímetro, calcularArea, calcularVolumen
//Se debe imprimir todos los resultados en pantalla.


interface Funciones {
    CalCularArea(): void;
    CalcularPerimtro(): void;
    CalcularVolumen(): void;
}

class Figura2d {
    protected nombre : string;
    protected lados : number;

    constructor (nombre: string ,  lados: number){
        this.nombre = nombre;
        this.lados = lados;
    };

}


class Cuadrado extends Figura2d implements Funciones{
    private valorLado : number ;


    constructor(nombre: string ,  lados: number, valorLado: number  ){
        super(nombre, lados);
        this.valorLado = valorLado;

    }

    CalCularArea(){
        let area = this.valorLado * this.valorLado
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = this.valorLado * 4
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        console.log(`Ell ${this.nombre} no cuenta con volumen`)
    }

} 

class Rectangulo extends Figura2d implements Funciones{
    private alto : number ;
    private ancho : number ;

    constructor(nombre: string ,  lados: number, alto: number , ancho :number ){
        super(nombre, lados);
        this.alto = alto;
        this.ancho = ancho;

    }

    CalCularArea(){
        let area = this.ancho * this.alto
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = (this.alto * 2)  + (this.ancho*2)
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        console.log(`Ell ${this.nombre} no cuenta con volumen`)
    }

} 

class Triangulo extends Figura2d implements Funciones{
    private valorLado: number ;
    private altura: number;


    constructor(nombre: string ,  lados: number, valorLado: number , altura: number  ){
        super(nombre, lados);
        this.valorLado = valorLado;
        this.altura = altura

    }

    CalCularArea(){
        
        let area = (this.valorLado* this.altura) / 2
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = this.valorLado * 3
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        console.log(`Ell ${this.nombre} no cuenta con volumen`)
    }

} 

class Circulo extends Figura2d implements Funciones{
    private radio: number ;



    constructor(nombre: string ,  lados: number,  radio: number  ){
        super(nombre, lados);
        this.radio = radio;


    }

    CalCularArea(){
        
        let area = (this.radio*this.radio) * 3.14
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = this.radio * (2* 3.14)
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        console.log(`Ell ${this.nombre} no cuenta con volumen`)
    }

} 

class Esfera extends Figura2d implements Funciones{
    private radio: number ;



    constructor(nombre: string ,  lados: number,  radio: number  ){
        super(nombre, lados);
        this.radio = radio;


    }

    CalCularArea(){
        
        let area =(this.radio * this.radio)*4* 3.14
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = (this.radio * 2)* 3.14
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        let volumen = (4/3) * (this.radio * this.radio * this.radio)
        console.log(`El volumen de  ${this.nombre} es ${volumen}`)
    }

} 


class Cono extends Figura2d implements Funciones{
    private radio: number ;
    private generatriz: number;
    private altura : number



    constructor(nombre: string ,  lados: number,  radio: number ,  generatriz: number,  altura: number ){
        super(nombre, lados);
        this.radio = radio;
        this.generatriz = generatriz;
        this.altura = altura;

    }

    CalCularArea(){
        
       let area = 3.14 * this.radio*(this.radio + this.generatriz)
        console.log(`El área del ${this.nombre} es   ${area}`)
    }
    CalcularPerimtro(){
        let perimetro = (this.radio * 2)* 3.14
        console.log(`El perimetro del ${this.nombre} es   ${perimetro}`)
    }
    CalcularVolumen(){
        let volumen = (1/3) *3.14*this.altura *(this.radio * this.radio)
        console.log(`El volumen de  ${this.nombre} es ${volumen}`)
    }

} 



let cuadrado = new Cuadrado("Cuadrado" , 4, 5);
cuadrado.CalCularArea();
cuadrado.CalcularPerimtro();


let rectangulo = new Rectangulo("Rectangulo" , 4, 5, 7);
rectangulo.CalCularArea();
rectangulo.CalcularPerimtro();


let triangulo = new Triangulo("Triangulo" , 3, 5, 5);
triangulo.CalCularArea();
triangulo.CalcularPerimtro();

let circulo = new Circulo("Circulo" , 0, 5);
circulo.CalCularArea();
circulo.CalcularPerimtro();


let esfera = new Esfera("Esfera" , 0, 5);
esfera.CalCularArea();
esfera.CalcularPerimtro();
esfera.CalcularVolumen();

let cono = new Cono("Cono" , 0, 4,8,10);
cono.CalCularArea();
cono.CalcularPerimtro();
cono.CalcularVolumen();