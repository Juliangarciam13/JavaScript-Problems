const discountsByCountries = [
    {
        country: "MEXICO",
        discount: 0.2
    },
    {
        country: "BRAZIL",
        discount: 0.5
    },
    {
        country: "ARGENTINA",
        discount: 0
    }
];
const products = [
    {
        "name": "Shirt",
        "price": 25.99
    },
    {
        "name": "Pants",
        "price": 55.99
    },
    {
        "name": "Jacket",
        "price": 80.99
    },
    {
        "name": "Shoes",
        "price": 60.99
    },
    {
        "name": "cap",
        "price": 15.99
    }
]

const customers = [
    {
        name: 'John',
        surname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
            }
    },
    {
        name: 'Mary',
        surname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
            }
    },
    {
        name: 'Peter',
        surname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        }
    }
]

const inventory = (customerCountry) => {
    let expensive = [];
    let chep = [];
    expensive = products.filter(product => product.price > 50);
    chep = products.filter(product => product.price < 50);
    const newPrices = (product) => {
    return {
        name: product.name, 
        price: product.price, 
        newPrice: product.price-(customerCountry.discount*product.price)
        }
    }
    return products.map(newPrices)
}
    
const createBill = (userName, productName, productQuant) => {
    const findCustomer = (customer) => customer.name === userName;
    const findProduct = (product) => product.name === productName;
    const countryDiscount = (discount) => discount.country === customer.address.country;
    let customer = customers.find(findCustomer);
    let productDiscount = discountsByCountries.find(countryDiscount);
    const productWithDiscount = inventory(productDiscount);
    let product = productWithDiscount.find(findProduct);

    switch (true) {
        case (customer === undefined):
            return `"Error: ${customer} not found"`;
        case (product === undefined):
            return `"error: ${product} not found"`;
        case (productQuant < 0):
            return "Please Choose An Quantity";
        default:
    }
    const bill = {
        userName: `${customer.name}, ${customer.surname}`,
        adress: `${customer.address.street}, ${customer.address.city}`,
        productName: productName,
        productQuantity: productQuant,
        total: product.newPrice * productQuant
    }
    return bill;
}
console.log(createBill("Mary", "cap", 5));
console.log(createBill("John", "Shoes", 3));