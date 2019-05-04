const addAsideBuyInfo = () =>
{
  const buyInfoContainer = createContainer('aside', 'buy-info');
  productsContentElement.appendChild(buyInfoContainer);

    const deliveryBox = createContainer('div', 'buy-info-box');
    buyInfoContainer.appendChild(deliveryBox);

      const truckImg = createImg('img/res3.svg', 'Camión de envío');
      deliveryBox.appendChild(truckImg);

      const deliveryTextWrapper = createContainer('div');
      deliveryBox.appendChild(deliveryTextWrapper);

        const deliveryText = createText('p', 'Envíos por:');
        deliveryTextWrapper.appendChild(deliveryText);

        const deliveryMethods = createContainer('ul');
        deliveryTextWrapper.appendChild(deliveryMethods);

          const deliveryMethod1 = createText('li', 'OCA');
          deliveryMethods.appendChild(deliveryMethod1);

          const deliveryMethod2 = createText('li', 'Encomienda');
          deliveryMethods.appendChild(deliveryMethod2);

          const deliveryMethod3 = createText('li', 'Retiro por local');
          deliveryMethods.appendChild(deliveryMethod3);

    const paymentBox = createContainer('div', 'buy-info-box');
    buyInfoContainer.appendChild(paymentBox);

      const cardsImg = createImg('img/res2.svg', 'Tarjetas');
      paymentBox.appendChild(cardsImg);

      const paymentTextWrapper = createContainer('div');
      paymentBox.appendChild(paymentTextWrapper);

        const paymentText = createText('p', 'Métodos de pago:');
        paymentTextWrapper.appendChild(paymentText);

        const paymentMethods = createContainer('ul');
        paymentTextWrapper.appendChild(paymentMethods);

          const paymentMethod1 = createText('li', 'Mercado pago');
          paymentMethods.appendChild(paymentMethod1);

          const paymentMethod2 = createText('li', 'Transferencia / Depósito');
          paymentMethods.appendChild(paymentMethod2);

          const paymentMethod3 = createText('li', 'Rapipago');
          paymentMethods.appendChild(paymentMethod3);

          const paymentMethod4 = createText('li', 'Efectivo en Sucursal');
          paymentMethods.appendChild(paymentMethod4);

    const confidenceBox = createContainer('div', 'buy-info-box');
    buyInfoContainer.appendChild(confidenceBox);

      const thumbUpImg = createImg('img/res5.svg', 'Camión de envío');
      confidenceBox.appendChild(thumbUpImg);

      const confidenceTextWrapper = createContainer('div');
      confidenceBox.appendChild(confidenceTextWrapper);

        const confidenceText = createText('p', 'En ArtStore tus compras son:');
        confidenceTextWrapper.appendChild(confidenceText);

        const confidenceItems = createContainer('ul');
        confidenceTextWrapper.appendChild(confidenceItems);

          const secureItem = createText('li', 'Seguras');
          confidenceItems.appendChild(secureItem);

          const fastItem = createText('li', 'Rápidas');
          confidenceItems.appendChild(fastItem);

          const easyItem = createText('li', 'Fáciles');
          confidenceItems.appendChild(easyItem);
}
