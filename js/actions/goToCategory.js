const goToCategory = function(cat, subcat) {
    category = cat;
    subcategory = subcat;
    remove(); 
    if(sortFlag) clearArrays();
    if(onSection == 'product') {addLeftInfoDiv(); productObject = {};} //reseteo el productObject porque sino lo deja guardado y se buguea el breadcrumb
    addProductsCategorySection();
    addTrendings();
}