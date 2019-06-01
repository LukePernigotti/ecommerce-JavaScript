const divProductElements = document.getElementsByClassName('product');

const remove = (whatToRemove) => {
  if (onSection == 'categories') {
    //removeSectionProducts
    productsContentElement.removeChild(sectionCategoriesElement);
    mainElement.removeChild(trendingElement);
    if (whatToRemove == 'leftInfo') productsContentElement.removeChild(leftInfoElement);

    if (whatToRemove == 'bar and leftInfo')//lo uso cuando voy al cart
    {
      mainElement.removeChild(barElement);
      productsContentElement.removeChild(leftInfoElement);
      mainElement.removeChild(productsContentElement);
    }
  }
  else if (onSection == 'products') {
    if (whatToRemove == 'products') {
      //removeProducts
      const numOfProductsInPage = divProductElements.length;
      for (let i = 0; i < numOfProductsInPage; i++) {
        divProductsBodyElement.removeChild(divProductElements[0]);
      }
    }
    else if (whatToRemove == 'pagination') {
      //removePagination
      paginationElement = document.getElementsByClassName('pagination')[0];
      divProductsBodyElement.removeChild(paginationElement);
    }
    else {
      //removePagination
      paginationElement = document.getElementsByClassName('pagination')[0];
      divProductsBodyElement.removeChild(paginationElement);

      //removeProducts
      const numOfProductsInPage = divProductElements.length;
      for (let i = 0; i < numOfProductsInPage; i++) {
        divProductsBodyElement.removeChild(divProductElements[0]);
      }

      //removeProductsBody
      sectionCategoryElement.removeChild(divProductsBodyElement);

      //removeSorter
      const sorter = document.getElementsByClassName('sorter')[0];
      sectionCategoryElement.removeChild(sorter);

      //removeTitle
      const h2Title = sectionCategoryElement.getElementsByTagName('h2')[0];
      sectionCategoryElement.removeChild(h2Title);

      //removeSectionProducts
      productsContentElement.removeChild(sectionCategoryElement);

      //removeFilter
      leftInfoElement.removeChild(divFilterElement);

      //removeBreadcrumb
      mainElement.removeChild(breadcrumbElement);

      //debugger;
      mainElement.removeChild(trendingElement);

      //removeLeftInfo
      if (whatToRemove == 'leftInfo') productsContentElement.removeChild(leftInfoElement);
      if (whatToRemove == 'bar and leftInfo') //lo uso cuando voy al cart
      {
        mainElement.removeChild(barElement);
        productsContentElement.removeChild(leftInfoElement);
        mainElement.removeChild(productsContentElement);
      }

    }
  }
  else if (onSection == 'product') {
    productsContentElement.removeChild(asideBuyInfoElement);
    productsContentElement.removeChild(productSelfSectionElement);

    if (whatToRemove != 'all but productsContentElement') mainElement.removeChild(productsContentElement);
    mainElement.removeChild(trendingElement);
    mainElement.removeChild(breadcrumbElement);
    if (whatToRemove == 'bar') mainElement.removeChild(barElement);
  }
  else if (onSection == 'cart') {
    mainElement.removeChild(sectionCartElement);
    mainElement.removeChild(trendingElement);
  }
  else if (onSection == 'checkout') {
    mainElement.removeChild(sectionCheckoutElement);
    if (whatToRemove == 'thanksMsg') {
      mainElement.removeChild(shadowBoxElement);
      mainElement.removeChild(thanksMsgBoxElement);
    }
  }
}
