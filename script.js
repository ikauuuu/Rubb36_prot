const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


const container = $('.container');
const Allcategory = $$('.Category');
const selected = $('.selected');
const selCategories = $$('.selCategory');

const categoryToUrl = {
    'Verse': 'Rubiusverse.html',
    'Gaming': 'Gaming.html',
    'Japon': 'Japon2009.html'
};

let lastCategoryId = null;

// Mostrar solo el contenedor al inicio
container.style.display = "flex";




Allcategory.forEach(div => {
    div.addEventListener("click", function(e) {
        e.stopPropagation();
        lastCategoryId = div.id;
        container.style.display = "none";
        if (lastCategoryId && categoryToUrl[lastCategoryId]) {
            window.location.href = categoryToUrl[lastCategoryId];
        }
    });
});

selCategories.forEach(selDiv => {
    selDiv.addEventListener("click", function(e) {
        e.stopPropagation();
        if (lastCategoryId && categoryToUrl[lastCategoryId]) {
            window.location.href = categoryToUrl[lastCategoryId];
        }
    });
});



