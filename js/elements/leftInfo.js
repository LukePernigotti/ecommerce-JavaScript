const addLeftInfoDiv = () =>{
     const productsMainContainer = createContainer('div', 'products-content');
     mainElement.appendChild(productsMainContainer);
     
     productsContentElement = productsMainContainer;
   
     const leftInfoContainer = createContainer('div', 'left-info');
     productsMainContainer.appendChild(leftInfoContainer);

     leftInfoElement = leftInfoContainer;
   
       const instructionsWrapper = createContainer('aside', 'instructions-vertical');
       leftInfoContainer.appendChild(instructionsWrapper);
   
         const chooseBox = createContainer('div');
         instructionsWrapper.appendChild(chooseBox);
   
           const chooseImg = createImg('img/res1.svg', 'Elección')
           chooseBox.appendChild(chooseImg);
   
           const chooseText = createText('p', 'Elegí el producto')
           chooseBox.appendChild(chooseText);
   
         const buyBox = createContainer('div');
         instructionsWrapper.appendChild(buyBox);
   
           const buyImg = createImg('img/res2.svg', 'Tarjetas');
           buyBox.appendChild(buyImg);
   
           const buyText = createText('p', 'Comprá');
           buyBox.appendChild(buyText);
   
         const waitBox = createContainer('div');
         instructionsWrapper.appendChild(waitBox);
   
           const waitImg = createImg('img/res3.svg', 'Camión');
           waitBox.appendChild(waitImg);
   
           const waitText = createText('p', 'Esperalo en tu casa');
           waitBox.appendChild(waitText);
   
         const locationBox = createContainer('div');
         instructionsWrapper.appendChild(locationBox);
   
           const locationImg = createImg('img/res4.svg', 'Tarjetas')
           locationBox.appendChild(locationImg);
   
           const locationText1 = createText('p', '¡También podés venir al local!');
           locationBox.appendChild(locationText1);
   
           const locationText2 = createText('p', 'Av. Juan B. Justo 5327');
           locationBox.appendChild(locationText2);
   }