class Shape{  //Se crea una clase llamada Shape
    constructor(name, sides, sideLength){
        this.name = name;  // Asigna el nombre del objeto
        this.sides = sides;  // Asigna el número de lados del objeto
        this.sideLength = sideLength;  // Asigna la longitud de cada lado del objeto
    }
    calcPerimeter(){  //Se crea un método dentro de la clase llamado calcPerimeter
        let Perimeter = 0;  // Inicializa una variable para el perímetro
        for (let i = 0; i < this.sides; i++){  // Bucle para sumar la longitud de todos los lados
            Perimeter += this.sideLength;  // Añade la longitud de cada lado al perímetro
        }
        console.log(`Perimetro: ${Perimeter}`);  // Imprime el perímetro calculado
    }
}

class Square extends Shape{  //Se crea una clase heredada Square de Shape
    constructor(sideLength){
        super("square", 4, sideLength);  // Llama al constructor de la clase padre y asigna valores predeterminados para el cuadrado
    }

    calcArea(){ //Se crea un método dentro de la clase Square llamado calcArea
        let Area = this.sideLength**(2);  // Calcula el área del cuadrado
        console.log(`Area: ${Area}`);  // Imprime el área calculada
    }
}

let square = new Square(5);  // Crea una nueva instancia de Square llamada square con una longitud de lado de 5
square.calcArea();  // Llama al método calcArea() en el objeto square para calcular el área
square.calcPerimeter();  // Llama al método calcPerimeter() en el objeto square para calcular el perímetro
