let sectionCheckoutElement;

const addCheckout = () =>{
    onSection= 'checkout';
    
    const checkoutContainer = document.createElement('section');
    checkoutContainer.className = 'checkout';
    mainElement.appendChild(checkoutContainer);
  
    sectionCheckoutElement = checkoutContainer;

    const checkoutDataContainer = createContainer('div', 'checkout-data');
    checkoutContainer.appendChild(checkoutDataContainer);
  
        const checkoutDataTitle = createText('h2', 'Completá tus datos');
        checkoutDataContainer.appendChild(checkoutDataTitle);
    
        const formContainer = document.createElement('form');
        formContainer.action = 'checkout.php';
        formContainer.method = 'post';
        checkoutDataContainer.appendChild(formContainer);
    
            const customerDataBox = createContainer('div', 'customer-data');
            formContainer.appendChild(customerDataBox);  
    
            const customerDataTitle = createText('h3', 'Datos del comprador');
            customerDataBox.appendChild(customerDataTitle);
    
            const firstnameWrapper = document.createElement('div');
                const firstnameLabel = createText('label', 'Nombre:');
                firstnameLabel.htmlFor = 'name';
                firstnameWrapper.appendChild(firstnameLabel);
                firstnameInput = createInputText('name', 'Nombre');
                firstnameWrapper.appendChild(firstnameInput);
            customerDataBox.appendChild(firstnameWrapper);
            
            const lastnameWrapper = document.createElement('div');
                const lastNameLabel = createText('label', 'Apellido:');
                lastNameLabel.htmlFor = 'lastname';
                lastnameWrapper.appendChild(lastNameLabel);
                lastnameInput = createInputText('lastname', 'Apellido');
                lastnameWrapper.appendChild(lastnameInput);
            customerDataBox.appendChild(lastnameWrapper);
    
            const emailWrapper = document.createElement('div');
                const emailLabel = createText('label', 'Correo electrónico:');
                emailLabel.htmlFor = 'email';
                emailWrapper.appendChild(emailLabel);
                emailInput = createInputText('email', 'algo@email.com');
                emailWrapper.appendChild(emailInput);
            customerDataBox.appendChild(emailWrapper);
    
            const provinceWrapper = document.createElement('div');
                const provinceLabel = createText('label', 'Provincia:');
                provinceLabel.htmlFor = 'province';
                provinceWrapper.appendChild(provinceLabel);
                provinceInput = createInputText('province', 'Ej: Buenos Aires');
                provinceWrapper.appendChild(provinceInput);
            customerDataBox.appendChild(provinceWrapper);
    
            const locationWrapper = document.createElement('div');
                const locationLabel = createText('label', 'Localidad:');
                locationLabel.htmlFor = 'location';
                locationWrapper.appendChild(locationLabel);
                locationInput = createInputText('location', 'Ej: CABA');
                locationWrapper.appendChild(locationInput);
            customerDataBox.appendChild(locationWrapper);
    
            const zipWrapper = document.createElement('div');
                const zipLabel = createText('label', 'Código postal:');
                zipLabel.htmlFor = 'zip';
                zipWrapper.appendChild(zipLabel);
                zipInput = createInputText('zip', 'Ej: 1234');
                zipWrapper.appendChild(zipInput);
            customerDataBox.appendChild(zipWrapper);
    
            const telWrapper = document.createElement('div');
                const telLabel = createText('label', 'Teléfono:');
                telLabel.htmlFor = 'tel';
                telWrapper.appendChild(telLabel);
                telInput = createInputText('tel', 'Ej: 1234-5678');
                telWrapper.appendChild(telInput);
            customerDataBox.appendChild(telWrapper);
    
            const shippingMethodBox = createContainer('div', 'shipping-method');
            formContainer.appendChild(shippingMethodBox);
    
                const shippingMethodTitle = createText('h3', 'Métodos de Envío');
                shippingMethodBox.appendChild(shippingMethodTitle);

                const homeDeliveryInput = createInputRadio('home-delivery', 'send-method', 'home-delivery');
                shippingMethodBox.appendChild(homeDeliveryInput);
                const homeDeliveryLabel = createText('label', 'OCA - Estandar - Entrega a domicilio');
                homeDeliveryLabel.htmlFor = 'home-delivery';
                shippingMethodBox.appendChild(homeDeliveryLabel);

                const branchOfficeInput = createInputRadio('branch-office', 'send-method', 'branch-office');
                shippingMethodBox.appendChild(branchOfficeInput);
                const branchOfficeLabel = createText('label', 'OCA - Estandar - Entrega en sucursal');
                branchOfficeLabel.htmlFor = 'branch-office';
                shippingMethodBox.appendChild(branchOfficeLabel);

                const dontSendInput = createInputRadio('dont-send', 'send-method', 'dont-send');
                shippingMethodBox.appendChild(dontSendInput);
                const dontSendLabel = createText('label', 'Retirar en sucursal de ArtStore');
                dontSendLabel.htmlFor = 'dont-send';
                shippingMethodBox.appendChild(dontSendLabel);

            const paymentMethodBox = createContainer('div', 'payment-method');
            formContainer.appendChild(paymentMethodBox);

                const paymentMethodTitle = createText('h3', 'Métodos de Pago');
                paymentMethodBox.appendChild(paymentMethodTitle);

                const transferInput = createInputRadio('wire-transfer', 'payment-method' ,'wire-transfer');
                paymentMethodBox.appendChild(transferInput);
                const transferLabel = createText('label', 'Transferencia o depósito bancario');
                transferLabel.htmlFor = 'wire-transfer';
                paymentMethodBox.appendChild(transferLabel);

                const cashInput = createInputRadio('cash', 'payment-method' ,'cash');
                paymentMethodBox.appendChild(cashInput);
                const cashLabel = createText('label', 'Pago en efectivo en nuestro local');
                cashLabel.htmlFor = 'cash';
                paymentMethodBox.appendChild(cashLabel);
                
                const mercadopagoInput = createInputRadio('mercadopago', 'payment-method' ,'mercadopago');
                paymentMethodBox.appendChild(mercadopagoInput);
                const mercadopagoLabel = createText('label', 'Tarjéta de Crédito a través de Mercado Pago');
                mercadopagoLabel.htmlFor = 'mercadopago';
                paymentMethodBox.appendChild(mercadopagoLabel);

            const submitInput = document.createElement('input');
            submitInput.type = 'submit';
            submitInput.value = 'Finalizar compra';
            formContainer.appendChild(submitInput);

            formContainer.onsubmit = () => validation();
            
    addPurchaseData();
}

const addPurchaseData = () => {
    const purchaseDataContainer = createContainer('div', 'purchase-data');
    sectionCheckoutElement.appendChild(purchaseDataContainer);

        const purchaseDataTitle = createText('h2', 'Revisá tu compra');
        purchaseDataContainer.appendChild(purchaseDataTitle);

        const purchaseDataTable = document.createElement('table');
        purchaseDataContainer.appendChild(purchaseDataTable);

            const tableHead = document.createElement('thead');
            purchaseDataTable.appendChild(tableHead);

                const labelRow = document.createElement('tr');
                tableHead.appendChild(labelRow);

                    const tableLabel = createText('th', 'Tu compra:');
                    tableLabel.colSpan = '3';
                    labelRow.appendChild(tableLabel);

            //comienzo productos
            for (let i = 0; i < cart.length; i++) 
            {
                const productRow = document.createElement('tr');
                purchaseDataTable.appendChild(productRow);
    
                    const productName = createText('td', createText('span', `${cart[i].name.replaceAll('-',' ')}`));
                    productRow.appendChild(productName);
                    const productQuantity = createText('td', createText('span', `x${cart[i].quantity}`));
                    productRow.appendChild(productQuantity);
                    const productPriceCell = document.createElement('td');
                    productRow.appendChild(productPriceCell);

                        let price;
                        if(cart[i].discount) price = createText('span', `$${cart[i].discount * cart[i].quantity}`);
                        else price = createText('span', `$${cart[i].price * cart[i].quantity}`);

                        price.className = 'price';
                        productPriceCell.appendChild(price);
            }
            //fin productos

            const totalPriceRow = document.createElement('tr');
            purchaseDataTable.appendChild(totalPriceRow);

                const totalCell = document.createElement('td');
                totalCell.colSpan = '2';
                totalPriceRow.appendChild(totalCell);
                const totalLabel = createText('span', 'Total: ');
                totalCell.appendChild(totalLabel);

                getTotalPrice();

                const priceCell = document.createElement('td');
                totalPriceRow.appendChild(priceCell);
                const price = createText('span', `$${totalPrice}`);
                price.className = 'price';
                priceCell.appendChild(price);

        const addMoreProductsButton = createA('Agregar más productos', '#navbar');
        addMoreProductsButton.className = 'button';
        purchaseDataContainer.appendChild(addMoreProductsButton);

        addMoreProductsButton.onclick = () => goToCategories(); 
}