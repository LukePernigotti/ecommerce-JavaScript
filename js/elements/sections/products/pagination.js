let pagesItems, currentPage, firstPageItem, lastPageItem, pagsContainerElement, flag = false;

const add = (previousOrNext,deg, append) =>{
  const pageArrowLink = createA(`${previousOrNext}`, '#navbar');
  const pageArrowItem = createText('li', pageArrowLink);
  pageArrowLink.style.fontSize = 0;
  pageArrowLink.style.background = "url('img/arrow.png') no-repeat 5px 7px";
  pageArrowLink.style.backgroundSize = "50%";
  pageArrowLink.style.transform = `rotate(${deg}deg)`;
  if(append == 'insertBefore') pagsContainerElement.insertBefore(pageArrowItem, pagsContainerElement.firstChild);
  if(append == 'appendChild') pagsContainerElement.appendChild(pageArrowItem);
}

const addPrevious = (firstPageItem) =>{
  add('Anterior', 90, 'insertBefore');
  firstPageItem.parentNode.previousSibling.firstChild.onclick = () =>  goToPage(currentPage-2);
}

const addNext = (lastPageItem) =>{
  add('Siguiente', 270, 'appendChild');
  lastPageItem.parentNode.nextSibling.firstChild.onclick = () =>  goToPage(currentPage);
}

const addPagination = () => {
  const paginationContainer = createContainer('div', 'pagination');
  divProductsBodyElement.appendChild(paginationContainer);
  
  const paginatorIndicator = createText('span', 'Página:');
  paginationContainer.appendChild(paginatorIndicator);

  const pagesContainer = createContainer('ul');
  paginationContainer.appendChild(pagesContainer);

  //declaro la cantidad de páginas que voy a tener
  const pages = Math.ceil(productsArray.length / parseInt(showPerPageElement.value));

  //creo las páginas
  for (let i = 0; i < pages; i++) 
  {
    const pageLink = createA(`${i+1}`, '#navbar');
    const pageItem = createText('li', pageLink);
    pagesContainer.appendChild(pageItem);
  
    if (currentPage == i +1) pageLink.className = 'active';

    //esto puede saltar al cambiar el showPerPages value, enciendo el flag para que en la función goToPage() solucione el bug
    if ( currentPage > pages ) flag = true;

    pageLink.onclick = () => goToPage(i);
  }

  pagesItems = document.getElementsByClassName('pagination')[0].getElementsByTagName('li');
  firstPageItem = pagesItems[0].firstChild;
  lastPageItem = pagesItems[pagesItems.length -1].firstChild;
  pagsContainerElement = document.getElementsByClassName('pagination')[0].getElementsByTagName('ul')[0];

  //Agregar flecha Anterior
  if( currentPage !=1 && firstPageItem.firstChild.nodeValue != 'Anterior' && currentPage <= pagesItems.length ){
    addPrevious(firstPageItem);
  }
  
  //Agrego flecha Siguiente
  if ( currentPage < pagesItems.length && lastPageItem.firstChild.nodeValue != 'Siguiente'){
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
}