/*Create 2 arrays with n items containing a vegetarian and a non-vegetarian menu,
You must also declare a variable that is true or false, then create a function that chooses
a menu if it is true and choose the other if it is false.*/
const vegetarianMenus = ["Lentils", "Peas", "Carrots"];
const noVegetarianMenus = ["Sausage", "Salami", "Cheese"];
const vegetarian = false;
const selectMenu = (vegetarianMenus, noVegetarianMenus, vegetarian) => {
    if(vegetarian === true){
        console.log("Vegetarian Menu");
        return vegetarianMenus;
    } else (vegetarian === false);{
        console.log("No Vegetarian Menu");
        return noVegetarianMenus;
    }
}
let menus = selectMenu(vegetarianMenus,noVegetarianMenus, vegetarian);
console.log("Menus: "+ menus);