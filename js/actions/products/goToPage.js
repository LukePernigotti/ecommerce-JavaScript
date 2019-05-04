const goToPage = (page) =>{
    //modifico el class active y la página actual
    if(flag){
        //si flag es true no es necesario remover la clase active ya que no figura en los li
        currentPage = page +1;
        pagesItems[currentPage - 1].firstChild.className = 'active';
        flag=false;
    }else if(currentPage == 1){
        pagesItems[currentPage -1].firstChild.classList.remove('active');
        currentPage = page +1;
        pagesItems[currentPage - 1].firstChild.className = 'active';
    }else{
        //if para solucionar el bug al cambiar el value del showPerPageElement estando en la última pag
        if (currentPage < pagesItems.length) pagesItems[currentPage].firstChild.classList.remove('active');
    
        currentPage = page +1;
        pagesItems[currentPage].firstChild.className = 'active';
    }
  
    //actualizo para evitar bugs
    pagesItems = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
    firstPageItem = pagesItems[0].firstChild;
    lastPageItem = pagesItems[pagesItems.length -1].firstChild;
    
    //Agregar flecha Anterior
    if( currentPage !=1 && firstPageItem.firstChild.nodeValue != 'Anterior'){
      addPrevious(firstPageItem);
    }
    
    //Agrego flecha Siguiente
    if ( currentPage != pagesItems.length - 1 && lastPageItem.firstChild.nodeValue != 'Siguiente' ){
      addNext(lastPageItem);
    }
  
    //Eliminar flecha Anterior
    if ( currentPage == 1 && firstPageItem.firstChild.nodeValue == 'Anterior' ){
      pagsContainerElement.removeChild(pagesItems[0]);
    }
  
    //Eliminar flecha Siguiente
    if ( currentPage == pagesItems.length -2 && lastPageItem.firstChild.nodeValue == 'Siguiente' ){ 
      pagsContainerElement.removeChild(pagesItems[pagesItems.length -1]);
    }
    
    remove('products');
    addProduct(page);
  
    //cambio el número de productos mostrandose en el sorter
    sorterProductsShowingValues = document.getElementsByClassName('sorter')[0].firstChild.firstChild.firstChild.nextSibling.firstChild;
    sorterProductsShowingValues.nodeValue = 
    `${page * parseInt(showPerPageElement.value) + 1} a 
    ${//si el número resultante es mayor a la cantidad de productos
      page * parseInt(showPerPageElement.value) + parseInt(showPerPageElement.value) > productsArray.length 
      ? //me da la cantidad máxima de productos
      productsArray.length 
      : //sino me da el número resultante
      page * parseInt(showPerPageElement.value) + parseInt(showPerPageElement.value) 
    }`;
}