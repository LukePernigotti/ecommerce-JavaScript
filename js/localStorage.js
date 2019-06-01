let localFavItems = [];
let localCartItems = [];
const homeNavLink = document.getElementsByClassName('navbar')[0].firstElementChild.firstElementChild.firstChild;
const productsNavLink = document.getElementsByClassName('navbar')[0].firstElementChild.firstElementChild.nextElementSibling.firstChild;
const contactNavLink = document.getElementsByClassName('navbar')[0].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstChild;

//let cart = [];
//let local = [];
//let localIndex = [];

const localStorageActions = () => {
    //Favoritos
    if (localStorage.getItem("Product")) {
        localFavItems = JSON.parse(localStorage.getItem("Product"));
        for (const cat in products) {
            for (const subcat in products[cat]) {
                for (const prod in products[cat][subcat]) {

                    //itero los items que tenía en el local con fav: true; y comparo con los de la db para igualar
                    for (let i = 0; i < localFavItems.length; i++) {
                        if (localFavItems[i].id == products[cat][subcat][prod].id) {
                            products[cat][subcat][prod].fav = localFavItems[i].fav;
                        }

                    }
                }
            }
        }
    }

    //Carrito
    //cuando cambio de html si hay productos actualizo la cantidad de todos los productos (en sí actualizo los productos enteros)
    homeNavLink.onclick = () => { if (localStorage.getItem("Cart")) modifyQuantity(); }
    contactNavLink.onclick = () => { if (localStorage.getItem("Cart")) modifyQuantity(); }
    cartNavLink.onclick = () => {
        //guardo los elementos que voy a utilizar en el local y el link lo lleva al documento principal
        localStorage.setItem('goToCart', 'true');
        //una vez esté en el buyProcess.html llamo a la función goToCart
    }

    if (localStorage.getItem("Cart")) {
        cart = JSON.parse(localStorage.getItem("Cart"));

        //carrito flotante
        totalNavElement = document.getElementsByClassName('total-nav')[0];
        navCartProductsCounter();

        //link extra del carrito flotante agregado al haber algún producto en el carrito
        cartNavLink.nextElementSibling.onclick = () => {
            //hago lo mismo que con cartNavLink pero en esta ocasión redirijo porque tiene de href un ancla
            localStorage.setItem('goToCart', 'true');
            window.location.href = './buyProcess.html'; //redirijo
        }
    }



}