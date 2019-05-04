const addFilter = (category) => {
    const filterContainer = createContainer('div');
    leftInfoElement.insertBefore(filterContainer, leftInfoElement.firstChild);
    
    const categoryNameTitle = createText('h2', `${category}`);
    filterContainer.appendChild(categoryNameTitle);
  
    const subcategoriesContainer = createContainer('ul');
    filterContainer.appendChild(subcategoriesContainer);
  
    for (let k = 0; k < subcategoryArray.length; k++) {
      //Creo el nodo de texto agregando tildes y corrigiendo guiones
      switch(subcategoryArray[k]){
        case 'Acrilicos': subcategoryFilterName = 'Acrílicos'; break;
        case 'Caligrafia': subcategoryFilterName = 'Caligrafía'; break;
        case 'Lapices_para_dibujo': subcategoryFilterName = 'Lápices para dibujo'; break;
        case 'Lapices-para-dibujo': subcategoryFilterName = 'Lápices para dibujo'; break;
        case 'Espatulas': subcategoryFilterName = 'Espátulas'; break;
        default: subcategoryFilterName = `${subcategoryArray[k].replaceAll('-',' ').replaceAll('_',' ')}`;
      }
  
      let subcategoryFilterLink = createA(subcategoryFilterName, 'javascript: void(0)');
      let subcategoryItem = createText('li', subcategoryFilterLink);
      subcategoriesContainer.appendChild(subcategoryItem);
      
      //replaceAll porque en el db.js está con '_'
      let subcategoryInFilter = subcategoryArray[k].replaceAll('-','_');
      subcategoryFilterLink.onclick = function(){ goToCategory(category, subcategoryInFilter)}
    }
    
    //guardo para usar en la función remove
    divFilterElement = leftInfoElement.getElementsByTagName('div')[0];
}