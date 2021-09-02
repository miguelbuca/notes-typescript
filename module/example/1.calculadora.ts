type Operation = "Adição" | "Subtração" | "Multiplicação" | "Divisão";

class Calculator {
    constructor(protected x: number, protected y: number) { }
    run( operator: Operation) : number {
        return operator === 'Adição' ?
            this.x + this.y : operator === 'Divisão' ? this.x / this.y :
                operator === 'Multiplicação' ? this.x * this.y : this.x - this.y
    }
}


let calc = new Calculator(5, 8).run('Divisão');
console.log(calc)