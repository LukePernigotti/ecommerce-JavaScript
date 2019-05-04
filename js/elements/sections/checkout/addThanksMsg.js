const addThanksMsg = () =>{
    shadowBox = createContainer('div', 'shadow-box');
    mainElement.appendChild(shadowBox);

    thanksMsgBox = createContainer('div', 'thanks-box');
    mainElement.appendChild(thanksMsgBox);

    messageTitle = createText('h2', 'Gracias por tu compra');
    thanksMsgBox.appendChild(messageTitle);

    message = createText('p','Acabamos de recibir tu pedido. Estará listo a la brevedad. Mientras tanto puedes seguir comprando otros productos en ArtStore y descubrir las novedades que tenemos para vos.');
    thanksMsgBox.appendChild(message);

    continueButton = createA('Continuar comprando', '#navbar');
    continueButton.className = 'button';
    thanksMsgBox.appendChild(continueButton);

    shadowBoxElement = shadowBox;
    thanksMsgBoxElement = thanksMsgBox;
    continueButton.onclick = () =>{
        goToCategories(); 
        thanksMsgBoxElement = ''; //lo borro porque lo uso como indicador de si existe en goToCategories()
        
        cart = [];
        
        //elimino el contador de productos del nav
        cartNavLink.removeChild(cartNavLink.getElementsByClassName('count')[0]);

        //elimino el total del nav
        floatingCartElement.firstChild.nextSibling.removeChild(totalNavElement);

        //agrego atributos para deshabilitar el carrito flotante
        floatingCartElement.style.position = 'relative';
        floatingCartElement.style.top = '0';
    }

}