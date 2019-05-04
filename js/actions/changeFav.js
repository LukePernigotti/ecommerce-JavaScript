const changeFav = (category, subcategory, product, element, elementText) =>{
    products[category][subcategory.replaceAll('-','_')][product].fav = !products[category][subcategory.replaceAll('-','_')][product].fav;
    element.className == 'fav' ? element.classList.remove('fav') : element.className = 'fav';
    if(elementText)
    elementText.nodeValue == 'Agregar a Favoritos' ? elementText.nodeValue = 'Agregado a Favoritos' : elementText.nodeValue = 'Agregar a Favoritos';
}