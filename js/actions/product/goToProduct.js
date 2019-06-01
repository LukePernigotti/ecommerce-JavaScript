const goToProduct = (i, isFromTrendings, redirectedFromHome) => {
    if (!isFromTrendings) {
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
    else if (isFromTrendings && !redirectedFromHome) {   //viene de trendings
        if (onSection == 'home') { //trendings del home
            //guardo los elementos que voy a utilizar en el local y lo llevo al documento principal
            localStorage.setItem('goToProduct', 'true');
            localStorage.setItem('id', trendingProducts[i].id);
            window.location.href = './buyProcess.html'; //redirijo
            //una vez esté en el buyProcess.html vuelvo a llamar a la función desde el main.js
        }
        else if (onSection == 'categories' || onSection == 'products') remove('leftInfo');
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
    } else { //viene desde el trendings del home
        remove('leftInfo');
        for (const cat in products) {
            for (const subcat in products[cat]) {
                for (const prod in products[cat][subcat]) {
                    if (products[cat][subcat][prod].id == i) {
                        productObject = {
                            'name': prod,
                            'price': products[cat][subcat][prod].price,
                            'id': products[cat][subcat][prod].id,
                            'description': products[cat][subcat][prod].description,
                            'category': cat.replaceAll('_', '-'),
                            'subcategory': subcat.replaceAll('_', '-')
                        }
                    }
                }
            }
        }

    }

    products[productObject.category][productObject.subcategory.replaceAll('-', '_')][productObject.name].discount
        ?
        productObject.discount = products[productObject.category][productObject.subcategory.replaceAll('-', '_')][productObject.name].discount
        :
        productObject.discount = false;
    addProductSection();
    addBreadcrumb();
}