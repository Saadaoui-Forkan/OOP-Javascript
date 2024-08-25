# OOP Javascript
Learning OOP in Javascript 

### instanceof
```
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
const auto_2 = Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); //true
console.log(auto_2); //undefined
console.log(auto_2 instanceof Car) //false
```
