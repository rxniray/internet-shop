const buttonCatalog = document.querySelector('.button__catalog');
const catalog = document.querySelector('.catalogs__catalog');

const catalogsLists = document.querySelector('.catalogs__lists');

catalogsLists.addEventListener('click', function(event) { 
    const target = event.target; 

    if (target.classList.contains('button__catalog')) { 
        const catalog = target.nextElementSibling; 
        if (catalog.style.display === 'block') {
            catalog.style.display = 'none';
        } else {
            catalog.style.display = 'block';
        }
    }
});

// 

const showMoreButton = document.getElementById('showMoreButton');
const productsRows = document.querySelectorAll('.products__row');

if (productsRows.length > 3) {
    showMoreButton.style.display = 'block';
}

let visibleRows = 3;
showMoreButton.addEventListener('click', function() {
    for (let i = visibleRows; i < visibleRows + 3 && i < productsRows.length; i++) {
        productsRows[i].classList.remove('hidden');
    }
    visibleRows += 3;
    if (visibleRows >= productsRows.length) {
        showMoreButton.style.display = 'none';
    }
});









