let li_categoryListBarElement, categoryShowElement, subcategoryElement;

const listBarEvents = () =>{
  /***********************************************/
  /*       Category List Bar Item onHover        */
  /***********************************************/
  li_categoryListBarElement = document.getElementsByClassName('category-list-bar')[0].getElementsByTagName('li');
  categoryShowElement = document.getElementsByClassName('category-show');

  for (let i = 0; i < li_categoryListBarElement.length; i++) {
    li_categoryListBarElement[i].onmouseover = function(){categoryShowElement[i].style.display = 'block';}
    categoryShowElement[i].onmouseover = function(){categoryShowElement[i].style.display = 'block';}
    li_categoryListBarElement[i].onmouseleave = function(){categoryShowElement[i].style.display = 'none';}
    categoryShowElement[i].onmouseleave = function(){categoryShowElement[i].style.display = 'none';}
  }

  /*************************************/
  /*             onclick               */
  /*************************************/
  //Ver de organizar todo
  li_categoryListBarElement[0].onclick = () => goToCategory('Pinturas');
  li_categoryListBarElement[1].onclick = () => goToCategory('Dibujo');
  li_categoryListBarElement[2].onclick = () => goToCategory('Soportes');
  li_categoryListBarElement[3].onclick = () => goToCategory('Herramientas');

  /*************************************/
  /*          Subcategorías            */
  /*************************************/
  for (let i = 0; i < categoryShowElement.length; i++) 
  {
    //guardo los li que necesito en cada subcategoría
    subcategoryElement = categoryShowElement[i].getElementsByTagName('li');
    
    //recorro segun cuántos elementos tenga cada ul
    for (let j = 0; j < categoryShowElement[i].childElementCount; j++)
    {
      //tengo que reemplazar las letras para que coincida porque no viene del objeto, viene del html
      let subcategoryName = 
      categoryShowElement[i].children[j].firstChild.firstChild.textContent.
      replaceAll(' ', '_').replaceAll('á','a').replaceAll('é', 'e').replaceAll('í','i');
      
      categoryShowElement[i].children[j].firstChild.onclick = function()
      {
        switch (i)
        {
          case 0: goToCategory('Pinturas', subcategoryName); break;
          case 1: goToCategory('Dibujo', subcategoryName); break;
          case 2: goToCategory('Soportes', subcategoryName); break;
          case 3: goToCategory('Herramientas', subcategoryName); break;
        }
      }
    }
    
  }
}