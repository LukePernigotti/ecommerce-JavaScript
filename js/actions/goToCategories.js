const goToCategories = () =>{
    if (thanksMsgBoxElement) remove('thanksMsg');
    else if (onSection == 'products') remove('bar and leftInfo');
    else if (onSection == 'product') remove('bar');
    else remove(); 
    
    if(onSection == 'cart' || onSection == 'checkout'){
        //quito los estilos que agregué en goToCart() para que se siga viendo bien luego de agregar productos
        floatingCartElement.removeAttribute('style');
        floatingCartElement.firstChild.nextSibling.removeAttribute('style');
    }
    productObject = {}; //reseteo porque sino lo deja guardado y se buguea el breadcrumb
    addCategoriesSection(); 
    clearArrays(); 

    navProductsItemElement.className = 'active';
}