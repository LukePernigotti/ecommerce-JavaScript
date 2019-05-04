const validation = () =>{
    const inputs = document.getElementsByTagName('input');
    let validation = true;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text') {
            if (inputs[i].value != '') inputs[i].style.border = 'green solid 1px';
            else {
                inputs[i].style.border = 'red solid 1px';
                validation = false;
            }
        }
    }
    if (!inputs[7].checked && !inputs[8].checked && !inputs[9].checked){
        inputs[7].nextSibling.style.border = 'red solid 1px';
        inputs[8].nextSibling.style.border = 'red solid 1px';
        inputs[9].nextSibling.style.border = 'red solid 1px';
        validation = false;
    }else{
        inputs[7].nextSibling.removeAttribute('style');
        inputs[8].nextSibling.removeAttribute('style');
        inputs[9].nextSibling.removeAttribute('style');
    }
    if (!inputs[10].checked && !inputs[11].checked && !inputs[12].checked){
        inputs[10].nextSibling.style.border = 'red solid 1px';
        inputs[11].nextSibling.style.border = 'red solid 1px';
        inputs[12].nextSibling.style.border = 'red solid 1px';
        validation = false;
    }else{
        inputs[10].nextSibling.removeAttribute('style');
        inputs[11].nextSibling.removeAttribute('style');
        inputs[12].nextSibling.removeAttribute('style');
    }

    if (validation) { addThanksMsg(); return false;}
    else return false;
}
