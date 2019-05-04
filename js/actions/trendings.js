const getDiscountProducts = () =>{
    for (const category in products){
        for (const subcategory in products[category]){
            for (const product in products[category][subcategory]) {
                if (products[category][subcategory][product].discount) {
                    discountProductsArray.push({'name': product, 'category': category,'subcategory': subcategory.replaceAll('_','-'), ...products[category][subcategory][product]});
                }
            }
        }
    }
}



const choose15products = () =>{
    randomNumArray = [];
    for (let i=0; i < discountProductsArray.length; i++) randomNumArray.push(i);
    randomNumArray = randomNumArray.sort(function() {return Math.random() - 0.5});
    
    trendingProducts = [];
    for (let j = 0; j < 15; j++) {
    trendingProducts.push(discountProductsArray[randomNumArray[j]]);
    }
}

const slideTrendings = (loadProducts) =>{
    productBoxElement = document.getElementsByClassName('product-box');
    trendingItemsElement = document.getElementsByClassName('trending-items')[0];
    
    for (let i = 0; i < 3; i++) trendingItemsElement.removeChild(productBoxElement[0]);
    loadProducts;
}