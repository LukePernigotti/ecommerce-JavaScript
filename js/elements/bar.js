const addCategoryListBar = () => {
  const container = createContainer('div', 'bar');
  //mainElement.appendChild(container);
  mainElement.insertBefore(container, floatingCartElement.nextSibling);
  barElement = container;

  const barList = createContainer('ul', 'category-list-bar');
  container.appendChild(barList);

  const subcategoryContainer = createContainer('div');
  container.appendChild(subcategoryContainer);

  for (let categories in products) {
    const barListItem = createContainer('li');
    const categoryLink = createA(`${categories}`, '#navbar');
    barListItem.appendChild(categoryLink);
    barList.appendChild(barListItem);

    const subcategoryList = createContainer('ul', `category-show ${categories.toLowerCase()}`);
    subcategoryContainer.appendChild(subcategoryList);

    for (let subcategories in products[categories]) {
      const subcategory = `${subcategories
        .replaceAll('_', ' ')
        .replaceAll('Acrilicos', 'Acrílicos')
        .replaceAll('Caligrafia', 'Caligrafía')
        .replaceAll('Lapices', 'Lápices')
        .replaceAll('Espatulas', 'Espátulas')}`;

      const listItem = createContainer('li');
      const subcategoryLink = createA(subcategory, '#navbar');
      listItem.appendChild(subcategoryLink);
      subcategoryList.appendChild(listItem);
    }
  }
  listBarEvents();
}