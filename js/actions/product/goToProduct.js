const goToProduct = (i, isFromTrendings) =>{
    if(!isFromTrendings)
    {
        if (onSection != 'cart') {
            remove('leftInfo');
            //lo guardo acá para que sea más cómodo el manejo de datos
            productObject = {
                'name': productsArray[i], 
                'price': productsPriceArray[i], 
                'id': productsIDArray[i], 
                'description': productsDescriptionArray[i], 
                'category': category 
            }
            !subcategory ? productObject.subcategory = subcateoriesRepeatArray[i] : productObject.subcategory = subcategory.replaceAll('_', '-');
        }
        else {
            remove();
            addCategoryListBar();
            //lo vuelvo a crear porque para el carrito lo borro
            const mainContainer = createContainer('div', 'products-content');
            mainElement.appendChild(mainContainer);
            productsContentElement = mainContainer;

            //para evitar que se rompa el carrito flotante
            floatingCartElement.style.top = '75px';
            floatingCartElement.firstChild.nextSibling.style.top = '-75px';

            productObject = {
                'name': cart[i].name, 
                'price': cart[i].price, 
                'id': cart[i].id, 
                'description': cart[i].description, 
                'category': cart[i].category, 
                'subcategory': cart[i].subcategory
            }
        }
    }
    else
    {   //viene de trendings
        if(onSection == 'categories' || onSection == 'products') remove('leftInfo');
        else if (onSection == 'product') remove('all but productsContentElement');
        else {//onSection = 'cart'
            remove();
            addCategoryListBar();
            const productsMainContainer = createContainer('div', 'products-content');
            mainElement.appendChild(productsMainContainer);
            productsContentElement = productsMainContainer;
        }
        productObject = {
            'name': trendingProducts[i].name, 
            'price': trendingProducts[i].price, 
            'id': trendingProducts[i].id, 
            'description': trendingProducts[i].description, 
            'category': trendingProducts[i].category, 
            'subcategory': trendingProducts[i].subcategory 
        }
    }

    products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].discount 
    ?
    productObject.discount = products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].discount
    :
    productObject.discount = false;
    addProductSection();
    addBreadcrumb();
}