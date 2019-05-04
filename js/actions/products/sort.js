const sort = (sortBy, subcategory) =>
{
    let sorterProductsObjectsArray = []
    for (let i = 0; i < productsArray.length; i++) {
        sorterProductsObjectsArray.push(
        {
            'name': productsArray[i], 
            'price': productsPriceArray[i], 
            'id': productsIDArray[i], 
            'description': productsDescriptionArray[i], 
            'subcategory': subcateoriesRepeatArray[i]
        }
        );
    }

    sorterProductsObjectsArray.sort
    (
        function (a, b)
        {
        return ((a[sortBy] < b[sortBy]) ? -1 : ((a[sortBy] == b[sortBy]) ? 0 : 1));
        }
    );

    for (let j = 0; j < productsArray.length; j++) {
        productsArray[j] = sorterProductsObjectsArray[j].name;
        productsPriceArray[j] = sorterProductsObjectsArray[j].price;
        productsIDArray[j] = sorterProductsObjectsArray[j].id;
        productsDescriptionArray[j] = sorterProductsObjectsArray[j].description;
        
        //No necesito el array si quiero ver una subcategoría en particular
        if(!subcategory) subcateoriesRepeatArray[j] = sorterProductsObjectsArray[j].subcategory;
    }
    sorterProductsObjectsArray = [];
    sortFlag = true;

    return subcateoriesRepeatArray;
}

const sortChanges = () =>{
    sort(sortSelectElement.value); 
    remove('products');
    //si toqué el ordenar por nombre/precio llevo a la página 1
    if(sortFlag)
    {
        currentPage = 1;
        remove('pagination');
        addPagination();
        //cambio el número de productos mostrandose en el sorter
        if(!sorterProductsShowingValues) 
        sorterProductsShowingValues = document.getElementsByClassName('sorter')[0].firstChild.firstChild.firstChild.nextSibling.firstChild;

        sorterProductsShowingValues.nodeValue = 
        `${currentPage} a 
        ${
            parseInt(showPerPageElement.value) > productsArray.length 
            ? 
            productsArray.length 
            :
            parseInt(showPerPageElement.value) 
        }`;

    } 
addProduct()
}
