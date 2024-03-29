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

let square = new Shape("square", 4, 5);  // Crea una nueva instancia de Shape llamada square con nombre "square", 4 lados y longitud de lado 5
square.calcPerimeter();  // Llama al método calcPerimeter() en el objeto square

let triangle = new Shape("triangle", 3, 3);  // Crea una nueva instancia de Shape llamada triangle con nombre "triangle", 3 lados y longitud de lado 3
triangle.calcPerimeter();  // Llama al método calcPerimeter() en el objeto triangle
