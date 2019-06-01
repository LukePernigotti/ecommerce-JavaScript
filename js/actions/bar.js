let li_categoryListBarElement, categoryShowElement, subcategoryElement;

const listBarEvents = () => {
  /***********************************************/
  /*       Category List Bar Item onHover        */
  /***********************************************/
  li_categoryListBarElement = document.getElementsByClassName('category-list-bar')[0].getElementsByTagName('li');
  categoryShowElement = document.getElementsByClassName('category-show');

  for (let i = 0; i < li_categoryListBarElement.length; i++) {
    li_categoryListBarElement[i].onmouseover = function () { categoryShowElement[i].style.display = 'block'; }
    categoryShowElement[i].onmouseover = function () { categoryShowElement[i].style.display = 'block'; }
    li_categoryListBarElement[i].onmouseleave = function () { categoryShowElement[i].style.display = 'none'; }
    categoryShowElement[i].onmouseleave = function () { categoryShowElement[i].style.display = 'none'; }
  }

  /*************************************/
  /*             onclick               */
  /*************************************/
  //si estoy en el home me manejo con localStorage y redirijo
  if (onSection == 'home') {
    for (let i = 0; i < li_categoryListBarElement.length; i++) {
      li_categoryListBarElement[i].onclick = () => {
        localStorage.setItem('goToCategory', li_categoryListBarElement[i].firstChild.firstChild.nodeValue);
        window.location.href = './buyProcess.html'; //redirijo
      }
    }
  }
  //si estoy en Producto uso directo la función
  else {
    for (let i = 0; i < li_categoryListBarElement.length; i++) {
      li_categoryListBarElement[i].onclick = () => goToCategory(li_categoryListBarElement[i].firstChild.firstChild.nodeValue);
    }
  }

  /*************************************/
  /*          Subcategorías            */
  /*************************************/
  for (let i = 0; i < categoryShowElement.length; i++) {
    //guardo los li que necesito en cada subcategoría
    subcategoryElement = categoryShowElement[i].getElementsByTagName('li');

    //recorro segun cuántos elementos tenga cada ul
    for (let j = 0; j < categoryShowElement[i].childElementCount; j++) {
      //tengo que reemplazar las letras para que coincida porque no viene del objeto, viene del html
      let subcategoryName =
        categoryShowElement[i].children[j].firstChild.firstChild.textContent.
          replaceAll(' ', '_').replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i');

      //si estoy en home me manejo con localStorage y redirijo
      if (onSection == 'home') {
        categoryShowElement[i].children[j].firstChild.onclick = function () {
          switch (i) {
            case 0: localStorage.setItem('goToCategory', 'Pinturas'); localStorage.setItem('goToSubcategory', subcategoryName); break;
            case 1: localStorage.setItem('goToCategory', 'Dibujo'); localStorage.setItem('goToSubcategory', subcategoryName); break;
            case 2: localStorage.setItem('goToCategory', 'Soportes'); localStorage.setItem('goToSubcategory', subcategoryName); break;
            case 3: localStorage.setItem('goToCategory', 'Herramientas'); localStorage.setItem('goToSubcategory', subcategoryName); break;
          }
          window.location.href = './buyProcess.html'; //redirijo
        }
      }
      else {
        categoryShowElement[i].children[j].firstChild.onclick = function () {
          switch (i) {
            case 0: goToCategory('Pinturas', subcategoryName); break;
            case 1: goToCategory('Dibujo', subcategoryName); break;
            case 2: goToCategory('Soportes', subcategoryName); break;
            case 3: goToCategory('Herramientas', subcategoryName); break;
          }

        }
      }
    }

  }
}