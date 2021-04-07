let carts = document.querySelectorAll('.btn-outline-dark');

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    }) 

}

function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.fa-shopping-bag').textContent = productNumbers;
    }

}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.fa-shopping-bag').textContent = productNumbers + 1;

    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.fa-shopping-bag').textContent = 1;
    }

}
onLoadcartNumbers();
