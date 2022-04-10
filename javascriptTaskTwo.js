function myFunction(array) {
    let products = array;
    let priceOfAllProducts = 0;
    products.map(function(value){
        priceOfAllProducts = priceOfAllProducts + value.price;
    
        if (value.price <= 100) {
            console.log("Product: "+value.product+" - Category: cheap")
        } else if (value.price > 100 && value.price <= 500) {
            console.log("Product: "+value.product+" - Category: normal price")
        } else if (value.price > 500 && value.price <= 3000) {
            console.log("Product: "+value.product+" - Category: expensive")
        } else {
            console.log("Product: "+value.product+" - Category: very expensive")
        }
    });
    console.log("All products price: "+priceOfAllProducts);
  
  }




  myFunction([
	{ product: "Shirt", price: 10 },
	{ product: "Laptop", price: 2400 },
	{ product: "Bike", price: 450 },
	{ product: "Chair", price: 150 },
	{ product: "Phone", price: 1500 },
	{ product: "Shoes", price: 60 },
	{ product: "Car", price: 25000 },
	{ product: "Coffe Machine", price: 500 }
]);