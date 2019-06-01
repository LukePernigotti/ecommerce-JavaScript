const changeFav = (category, subcategory, product, element, elementText) => {
    products[category][subcategory.replaceAll('-', '_')][product].fav = !products[category][subcategory.replaceAll('-', '_')][product].fav;
    element.className == 'fav' ? element.classList.remove('fav') : element.className = 'fav';
    if (elementText)
        elementText.nodeValue == 'Agregar a Favoritos' ? elementText.nodeValue = 'Agregado a Favoritos' : elementText.nodeValue = 'Agregar a Favoritos';


    //localStorage
    const productItem = products[category][subcategory.replaceAll('-', '_')][product];
    let localFlag = false;
    localFavItems = [];

    //si no productos guardados
    if (!localStorage.getItem("Product")) {
        localFavItems.push(productItem);
        localStorage.setItem("Product", JSON.stringify(localFavItems));
    }
    //si los hay
    else {
        localFavItems = JSON.parse(localStorage.getItem("Product"));
        localStorage.removeItem("Product");
        for (let i = 0; i < localFavItems.length; i++) {
            if (localFavItems[i].id === productItem.id) { //si ya está en el local lo elimino
                const index = localFavItems.indexOf(localFavItems[i])
                localFavItems.splice(index, 1);
                localFlag = false;
                break;
            } else localFlag = true; //sino enciendo el flag para luego guardarlo fuera del ciclo
        }
        if (localFlag) localFavItems.push(productItem);
        localStorage.setItem("Product", JSON.stringify(localFavItems));
    }
}