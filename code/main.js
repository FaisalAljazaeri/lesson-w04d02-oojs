const makeCar = function (model, color) {
    return {
        model,
        color,
        fuel: 100,
        drive: function () {
            this.fuel--;
            return 'Vroom!';
        },
        refuel: function () {
            this.fuel = 100;
        }
    }
}

const celica = makeCar("Toy-Yoda Celica", "limegreen");
const civic = makeCar('Honda Civic', 'lemonchiffon')

console.log(celica);
console.log(civic);