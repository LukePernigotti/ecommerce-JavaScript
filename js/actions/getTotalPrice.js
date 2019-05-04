const getTotalPrice = () =>{
    //reinicio el precio total
    totalPrice = 0;
          
    //establezco el precio total
    for(prod in cart){
      if (cart[prod].discount) totalPrice += cart[prod].discount * cart[prod].quantity;
      else totalPrice += cart[prod].price * cart[prod].quantity;
    }
  }