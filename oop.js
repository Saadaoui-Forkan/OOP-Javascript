/**
 * Constructor Function
*/
function Product(id, name, category, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
}

const product1 = new Product(101, "Airpods", "Telephonie et Accessoires", 80)
const product2 = new Product(111, "PC Asus", "Orinateurs", 1080)
const product3 = new Product(121, "Samsung A20s", "Telephonie et Accessoires", 800)

console.log(product1)
/**
    Product {
        id: 101, 
        name: 'Airpods', 
        category: 'Telephonie et Accessoires', 
        price: 80
    }
*/

console.log(product2)
/**
    Product {
        id: 111, 
        name: 'PC Asus', 
        category: 'Orinateurs', 
        price: 1080
    }
*/

console.log(product3)
/**
    Product {
        id: 121, 
        name: 'Samsung A20s', 
        category: 'Telephonie et Accessoires', 
        price: 800
    }
*/