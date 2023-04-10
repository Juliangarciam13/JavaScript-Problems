const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2,
        "stock": [2,4,6]
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1,
        "stock": [1,3,5]
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15,
        "stock": [8,6,6]
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25,
        "stock": [4,7,9]
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05,
        "stock": [3,7,10]
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

const createBill = (userName, productName, productQuant, storeId) => {
    const findCustomer = (customer) => customer.name === userName;
    const findProduct = (product) => product.name === productName;
    const customer = customers.find(findCustomer);
    const product = products.find(findProduct);
    if (customer === undefined) {
        console.log("Sorry, user not found");
      } else if (product === undefined) {
        console.log("Sorry, we don't have that product in stock");
      } else if (productQuant <= 0) {
        console.log("Sorry, the quatity of the product must be greater than 0")
      } else if (product.stock[storeId] === undefined){
        console.log("Sorry, store not found")
      };

      if (product.stock[storeId] >= 0 && productQuant <= product.stock[storeId]) {
        product.stock[storeId] = product.stock[storeId] - productQuant;
        let discountPrice = product.price - (product.discount * product.price);
        let totalPrice = productQuant * discountPrice;

        const bill = {
           userName: `${customer.name}, ${customer.surname}`,
           adress: `${customer.address.street}, ${customer.address.city}`,
           productName: productName,
           productQuantity: productQuant,
           total: totalPrice,
           totalStock: products.stock -= productQuant,
    }
    return bill;
} else {
    console.log("Sorry, we do not have the quatity of the requested product")
}
}

console.log(createBill("Mary", "cap", 6, 1));