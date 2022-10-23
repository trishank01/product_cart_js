var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }


let container = document.querySelector("#container");



function productlist(){
 
    let left_side = document.createElement('div');
    left_side.classList = "left-side"
    let preImg = document.createElement('img')
    preImg.src = productData.preview
    preImg.classList = "preImg"
    left_side.append(preImg)
    container.append(left_side)
 
 
    let right_side = document.createElement('div');
    right_side.classList = "right-side";
    let heading = document.createElement('div')
    heading.classList = "heading"
    heading.innerHTML = productData.name
    let heading_sub = document.createElement('div')
    heading_sub.classList = "sub-heading"
    heading_sub.innerHTML = productData.brand
    let price = document.createElement('div')
    price.classList = "price"
    price.innerHTML = productData.price
    let desc = document.createElement('div')
    desc.classList = "desc"
    desc.innerHTML = "Description"
    let desc_para = document.createElement('div')
    desc_para.classList = "desc-para"
    desc_para.innerHTML = productData.description
    let product_review = document.createElement('div')
    product_review.classList = "product-review"
    product_review.innerHTML = "Product Preview"


    let img_gallery = document.createElement('div')
    img_gallery.classList = "img-gallery"

    let img_card_1 = document.createElement('img')
    img_card_1.setAttribute("src", productData.photos[0]);
    img_card_1.classList = "active img-card-1"

    let img_card_2 = document.createElement('img')
    img_card_2.setAttribute("src", productData.photos[1]);
    img_card_2.classList = "img-card-2"

    let img_card_3 = document.createElement('img')
    img_card_3.setAttribute("src", productData.photos[2]);
    img_card_3.classList = "img-card-3"

    let img_card_4 = document.createElement('img')
    img_card_4.setAttribute("src", productData.photos[3]);
    img_card_4.classList = "img-card-4"

    let img_card_5 = document.createElement('img')
    img_card_5.setAttribute("src", productData.photos[4]);
    img_card_5.classList = "img-card-5"


    let btn = document.createElement('button')
    btn.classList = "btn"
    btn.innerHTML = "Add to Cart"
   



    right_side.append(heading)
    right_side.append(heading_sub)
    right_side.append(price)
    right_side.append(desc)
    right_side.append(desc_para)
    right_side.append(product_review)
    img_gallery.append(img_card_1)
    img_gallery.append(img_card_2)
    img_gallery.append(img_card_3)
    img_gallery.append(img_card_4)
    img_gallery.append(img_card_5)
    right_side.append(img_gallery)
    right_side.append(btn)
    container.append(right_side)

 
 



    
let imgCard1 = document.querySelector(".img-card-1");
let imgCard2 = document.querySelector(".img-card-2");
let imgCard3 = document.querySelector(".img-card-3");
let imgCard4 = document.querySelector(".img-card-4");
let imgCard5 = document.querySelector(".img-card-5");





    imgCard1.addEventListener('click',function(){
        preImg.src = productData.photos[0]
        imgCard1.classList.add("active");
        imgCard2.classList.remove("active");
        imgCard3.classList.remove("active");
        imgCard4.classList.remove("active");
        imgCard5.classList.remove("active");
    })

    imgCard2.addEventListener('click',function(){
        preImg.src = productData.photos[1]
        imgCard2.classList.add("active");
        imgCard1.classList.remove("active");
        imgCard3.classList.remove("active");
        imgCard4.classList.remove("active");
        imgCard5.classList.remove("active");
    })

    imgCard3.addEventListener('click',function(){
      preImg.src = productData.photos[2]
        imgCard3.classList.add("active");
        imgCard1.classList.remove("active");
        imgCard2.classList.remove("active");
        imgCard4.classList.remove("active");
        imgCard5.classList.remove("active");
        
    })

    imgCard4.addEventListener('click',function(){
       preImg.src = productData.photos[3]
        imgCard4.classList.add("active");
        imgCard1.classList.remove("active");
        imgCard2.classList.remove("active");
        imgCard3.classList.remove("active");
        imgCard5.classList.remove("active");
    })

    imgCard5.addEventListener('click',function(){
        preImg.src = productData.photos[4]
        imgCard5.classList.add("active");
        imgCard1.classList.remove("active");
        imgCard2.classList.remove("active");
        imgCard3.classList.remove("active");
        imgCard4.classList.remove("active");
    })
   
  }


productlist()



// Array.from(gallery).forEach(function(item){
//     item.addEventListener('click',function(){
//         if(item.classList == "noActive"){
//             item.classList.replace("noActive","active");
//         }else if(item.classList == "active"){
//             item.classList.replace("active","noActive");
//         }else{
//             item.classList.remove("active");
//         }
//     })
// })








