const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


const preapp = $('.preapp');
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





// Show both preapp and container at start
preapp.style.display = "flex";
container.style.display = "flex";

// Hide preapp only when F11 is pressed
window.addEventListener('keydown', function(e) {
    if (e.key === 'F11') {
        preapp.style.opacity = "0";
        setTimeout(() => {
            preapp.style.display = "none";
        }, 300);
        localStorage.setItem('rubius_fullscreen', '1');
    }
});


Allcategory.forEach(div => {
    div.addEventListener("click", async function(e) {
        e.stopPropagation();
        lastCategoryId = div.id;
        container.style.display = "none";
        // Solicitar fullscreen antes de navegar
        try {
            var el = document.documentElement,
                rfs = el.requestFullscreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                    || el.msRequestFullscreen;
            if (rfs && !document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
                await rfs.call(el);
            }
        } catch (err) {}
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

// --- Mantener fullscreen en subpáginas ---
window.addEventListener('DOMContentLoaded', function() {
    // Si venimos de fullscreen, intentar restaurar
    if (localStorage.getItem('rubius_fullscreen') === '1') {
        var el = document.documentElement,
            rfs = el.requestFullscreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
                || el.msRequestFullscreen;
        if (rfs && !document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            rfs.call(el);
        }
    }
});

