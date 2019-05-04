const addSorter = () => {
    const sorterContainer = createContainer('div', 'sorter');
    sectionCategoryElement.appendChild(sorterContainer);
  
    /*1er Div*/
    const prodsQuantityInfoWrapper = createContainer('div');
    sorterContainer.appendChild(prodsQuantityInfoWrapper);
  
    const prodsQuantityInfo = createText('p', `Productos `);
    const quantityFromTo = createText('span', `1 a ${8 > productsArray.length ? productsArray.length : 8}`);
    const prodsQuantityInfoLastText = document.createTextNode(` de ${productsArray.length} en total`);
    prodsQuantityInfo.appendChild(quantityFromTo);
    prodsQuantityInfo.appendChild(prodsQuantityInfoLastText);
    prodsQuantityInfoWrapper.appendChild(prodsQuantityInfo);
  
    /*2do Div*/
    const orderWrapper = createContainer('div');
    sorterContainer.appendChild(orderWrapper);
  
    const labelOrderBy = createText('label', 'Ordenar por:');
    labelOrderBy.for = 'ordenar';
    orderWrapper.appendChild(labelOrderBy);
    
    const selectOrderBy = createContainer('select');
    selectOrderBy.name = 'ordenar';
    selectOrderBy.id = 'ordenar';
    orderWrapper.appendChild(selectOrderBy);
  
      sortSelectElement = selectOrderBy;
      sortSelectElement.onchange = () => sortChanges();
  
    const optionNombre = createText('option', 'Nombre');
    optionNombre.value = 'name';
    selectOrderBy.appendChild(optionNombre);
  
    const optionPrecio = createText('option', 'Precio');
    optionPrecio.value = 'price';
    selectOrderBy.appendChild(optionPrecio);
  
    /*3er Div*/
    const showPerPageWrapper = createContainer('div');
    sorterContainer.appendChild(showPerPageWrapper);
  
    const labelShow = createText('label', 'Ver')
    showPerPageWrapper.appendChild(labelShow);
  
    const selectVer = createContainer('select');
    selectVer.name = 'ver';
    selectVer.id = 'ver';
    showPerPageWrapper.appendChild(selectVer);
  
    const option8 = createText('option', '8');
    option8.value = '8';
    selectVer.appendChild(option8);
  
    const option10 = createText('option', '10');
    option10.value = '10';
    selectVer.appendChild(option10);
  
    const perPageText = createText('span', 'por página');
    showPerPageWrapper.appendChild(perPageText);
    
      showPerPageElement = selectVer;
      showPerPageElement.onchange = () => {remove('pagination');addPagination();};
  
    /*4to Div*/
    const showingModeWrapper = createContainer('div');
    sorterContainer.appendChild(showingModeWrapper);
  
    const seeAsLabel = createText('label', 'Ver como:');
    showingModeWrapper.appendChild(seeAsLabel);
  
    const showAsList = createA('lista', 'javascript: void(0)');
    showAsList.className = 'selected';
    showingModeWrapper.appendChild(showAsList);
    
    const showAsGrid = createA('grilla', 'javascript: void(0)');
    showingModeWrapper.appendChild(showAsGrid);
  }