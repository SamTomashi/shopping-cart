let products = [];
document.addEventListener('DOMContentLoaded', async()=> {
    products = await getProducts();
    updateUI(products);
})

const itemList = document.querySelector("#item-list");
const getProducts = ()=> {
    return fetch('http://localhost:3000/products')
    .then((response)=> response.json())
}

const getProductById = (id)=> {
    const product = products.filter((item)=> item.id === id);
    return products;
}

const postProducts = async (id)=> {
    const products = await getProductById(id);
    return fetch('http://localhost:3000/cart',{
        method: "POST",
        headers:{
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(products)
    })
}


const updateUI = (products) => {
    products.forEach((item, index)=> {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'col-3 text-center');
    
        const img = document.createElement('img'); 
        img.setAttribute('src', `${item.image}`);
        imageContainer.appendChild(img);
    
        const h5 = document.createElement('h5');
        h5.textContent = item.name;
    
        const p = document.createElement('p');
        p.textContent = item.description;
    
        const qty = document.createElement('input')
        qty.setAttribute('id', index);
        qty.setAttribute('placeholder', 'QTY');
        qty.setAttribute('type', 'number');
    
        const addToCartBtn = document.createElement('button');
        addToCartBtn.setAttribute('class', 'btn btn-warning btn-sm m-4 add-to-cart');
        addToCartBtn.textContent = "Add To Cart";
        addToCartBtn.setAttribute('id', item.id);

        imageContainer.appendChild(h5);
        imageContainer.appendChild(p);
        imageContainer.appendChild(qty);
        imageContainer.appendChild(addToCartBtn);
    
        itemList.appendChild(imageContainer)
    })
}

// const addToCartBtns = document.querySelector('.add-to-cart');

// addToCartBtns.forEach((btn)=>{
//     btn.addEventListener('click', (event)=>{
//         let id = event.target.getAttribute('id');
//         postProducts(id)
//         alert(id);

//     })
// })


document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      console.log("Sam")
    })
  })