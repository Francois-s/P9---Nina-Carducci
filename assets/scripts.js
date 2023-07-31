const slides = [
    {
        "image": "ryoji-iwata-wUZjnOv7t0g-unsplash.webp",
    },
    {
        "image": "nicholas-green-nPz8akkUmDI-unsplash.webp",
    },
    {
        "image": "edward-cisneros-3_h6-1NPDGw-unsplash.webp",
    },
]

/*-- Content loaded _ initialisation ---*/

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    let img = document.createElement('img');

    img.classList.add("index");
    img.src = "./assets/images/slider/" + slides[0].image;
    img.setAttribute('actual', 0)
    img.setAttribute('id', 'img_banner');
    img.setAttribute('alt', 'Image slider ' + (1)); 
    console.log(slides[0].image);
    banner.appendChild(img);
    banner.setAttribute('current', 0);
    initDot();
});

/*-- initDot _ initialisation des bullet points ---*/

function initDot() {
    const containerDiv = document.getElementById('dots');

    slides.forEach((s, idx) => {
        let dot = document.createElement('DIV');
        dot.classList.add('dot');
        if (idx == 0)
            dot.classList.add('dot_selected');
        dot.setAttribute('idx', idx)
        containerDiv.appendChild(dot);
    });
}

/*-- activeDot _ Change le bullet point en valeur ---*/

function activeDot(scrollSens, stock) {
    document.querySelector('[idx="' + stock + '"]').classList.add('dot_selected');
    document.querySelector('[idx="' + (scrollSens == 0 ? (stock == 0 ? (slides.length - 1) : stock - 1) : (stock == slides.length - 1 ? 0 : stock + 1)) + '"]').classList.remove('dot_selected');
}

/*-- scrollLeft | scrollRight _ Change l'image du caroussel au clique ---*/

document.getElementById("left_arrow").addEventListener("click", function () {
    let img_banner = document.getElementById('img_banner');
    let stock = img_banner.getAttribute('actual');

    stock--;
    if (stock == -1) {
        stock = slides.length - 1;
    }
    img_banner.src = "./assets/images/slider/" + slides[stock].image;
    img_banner.setAttribute('actual', stock);
    img_banner.setAttribute('alt', 'Image slider ' + (stock));
    activeDot(1, stock);
});


document.getElementById("right_arrow").addEventListener("click", function () {
    let img_banner = document.getElementById('img_banner');
    let stock = img_banner.getAttribute('actual');

    stock++;
    if (stock == (slides.length)) {
        stock = 0;
    }
    img_banner.src = "./assets/images/slider/" + slides[stock].image;
    img_banner.setAttribute('actual', stock)
    activeDot(0, stock);
});

setInterval(function () {
    document.getElementById("right_arrow").click();
}, 5000); 
