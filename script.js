// 1. Write a function called `addToCart` that takes one argument of `itemName`
// 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// 3. Call the function

// function addToCart (itemName){
//     const itemsInCart = `The ${itemName} has been added to your cart!`;
//     console.log(itemsInCart);
// }

// addToCart("tacos");

// const inventory = ["Coats", "Gloves", "Hats", "Scarves"]
// const printInventory = function(){
// for(let i=0; i < inventory.length; i++){
// console.log(inventory[i]);
// }
// }

// printInventory();

// const printInventory = function(inventoryArray){
//     for(let i=0; i < inventoryArray.length; i++){
//     console.log(inventoryArray[i]);
//     }
//     }

//     printInventory(inventory);
    

const detailedInventory = [
    {
      name: "Coat",
      quantity: 9,
      price: 79.99
    },
    {
      name: "Gloves",
      quantity: 24,
      price: 12.99
    },
    {
      name: "Hats",
      quantity: 16,
      price: 9.99
    },
    {
      name: "Scarves",
      quantity: 6,
      price: 14.99,
    }
  ]


  const printInventory = function(){
  for(let i=0; i < detailedInventory.length; i++){
      if(detailedInventory[i].price < 20.00){
          console.log(detailedInventory[i].name)
      }
      else {
  console.log("item is too expensive", detailedInventory[i]);
  }
}
  }
  
  printInventory();