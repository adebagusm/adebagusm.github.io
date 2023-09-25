let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}
const product ="https://fakestoreapi.com/products";

    fetch(product)
    .then(response=>response.json())
    .then(data=>{ document.getElementById(`isian`).innerHTML=``
    data.forEach(function(product){
    let element = document.createElement(`div`)
    element.className = `produk`
    
    let nama = document.createElement(`h2`)
    nama.innerHTML = product.title;
    element.appendChild(nama)
    
    let image = document.createElement(`img`)
    image.src = product.image;
    element.appendChild(image)
    
    let deskripsi = document.createElement(`p`)
    deskripsi.className = `Product-description`
    deskripsi.innerHTML = product.price;
    element.appendChild(deskripsi)
    
    let output = document.getElementById(`isian`)
    output.appendChild(element)
    })
})
// let products =[
//     {
//         nama :`Ninja 250 mono`,
//         Image : `assets/gambarP/gambar1.JPG`,
//         deskripsi :`berharga 36,4 juta.`
//     },{
//         nama :`CBR1000RR`,
//         Image :`assets/gambarP/gambar2.jpg`,
//         deskripsi :`harga motor ini mencapai 1,8milyar`
//     },{
//         nama :`Aerox`,
//         Image :`assets/gambarP/gambar3.jpg`,
//         deskripsi :`disini juga menjual motor aerox dengan harga hanya 24juta`
//     },{
//         nama :`ZX25R`,
//         Image :`assets/gambarP/gambar4.JPG`,
//         deskripsi :`motor ini bisa di bandrol harga dengan kisaran 98,85 juta - 100 juta`
//     },{
//         nama :`CBR250RR`,
//         Image :`assets/gambarP/gambar6.jpg`,
//         deskripsi :`motor ini cukup trendi yang bisa di bandrol dengan harga 75,15 juta.`
//     },{
//         nama :`Yamaha YZF-25`,
//         Image :`assets/gambarP/gambar7.JPG`,
//         deskripsi :`R25 menurut mimin motoer ini sangat keren di bandrol dengan harga 70,56 juta.`
//     }
// ]
