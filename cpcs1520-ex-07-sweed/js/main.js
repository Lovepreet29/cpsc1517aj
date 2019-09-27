/*
    ref vars: form, display, selects
    addlistener to the form : i.e submit
    change out the image

*/
const orderForm=document.querySelector('#order-form')
const productImage=document.querySelector('#output img')
const products=document.querySelector('#products')

// console.log(orderForm, output, products)

orderForm.addEventListener('submit', function(e){
    
    e.preventDefault();
    const url='img'+ products.Value;
    productImage.src=url;
    
})