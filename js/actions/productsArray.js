let 
productsArray = [],
productsDescriptionArray = [],
productsPriceArray = [],
productsIDArray = [],
subcategoryArray = [],
numberOfProductsInSubcategory = [],
subcateoriesRepeatArray = [],
numberOfProducts_inEachSubcategory = [];

const productsArrayFunction = (category) => 
{
  for (const p in category)
  {
    //agrego las subcategorias
    subcategoryArray.push(p.replaceAll('_','-'));
    
    //agrego los productos
    productsArray = [...productsArray, ...Object.keys(category[p])];
    
    //agrego la cantidad de productos en cada etapa
    numberOfProductsInSubcategory.push(productsArray.length);

    for (const a in category[p]){
      //agrego la descripciones y los precios a un array
      productsDescriptionArray.push(category[p][a].description);
      productsPriceArray.push(category[p][a].price);
      productsIDArray.push(category[p][a].id)
    }
  }

  //genero el array de subcategorías según posición del producto
  for (let i = 0; i < numberOfProductsInSubcategory.length; i++) 
  {
    i == 0 
    ? 
    numberOfProducts_inEachSubcategory.push(numberOfProductsInSubcategory[i])
    : 
    numberOfProducts_inEachSubcategory.push(numberOfProductsInSubcategory[i] - numberOfProductsInSubcategory[i-1]);
  }
  
  for (let j = 0; j < subcategoryArray.length; j++) {
    for (let k = 0; k < numberOfProducts_inEachSubcategory[j]; k++) 
    {
      subcateoriesRepeatArray.push(subcategoryArray[j]);
    }
  }
}


const productsSubcategoryArrayFunction = (category, subcategory) => {
    subcategoryArray = Object.keys(products[category]);
  
    for (const prod in products[category][subcategory])
    {
      //agrego los productos, precio y descripción
      productsArray.push(prod);
      productsPriceArray.push(products[category][subcategory][prod].price);
      productsDescriptionArray.push(products[category][subcategory][prod].description);
      productsIDArray.push(products[category][subcategory][prod].id);
    }
}