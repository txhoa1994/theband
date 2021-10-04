var menuBtn = document.getElementById('menu-btn');
var header = document.getElementById('header');
var headerHeight = header.clientHeight;

menuBtn.onclick = function() {
    if (header.clientHeight === headerHeight) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
};

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var menuItem of menuItems) {
    menuItem.onclick = function (event) {
        if (this.nextElementSibling === null) {
            header.style.height = null;
        } else {
           event.preventDefault();
        }
    }
}

const buyTickets = document.querySelectorAll('.js-ticket');
const modal = document.querySelector('.modal');
const modalCover = document.querySelector('.modal-cover');
const modalClose = document.querySelector('.modal-close');

function showBuy() {
    modal.classList.add('modal-center')
};

function hideBuy() {
    modal.classList.remove('modal-center')
};

for (const buyTicket of buyTickets) {
    buyTicket.addEventListener('click', showBuy)
};

modalClose.addEventListener('click', hideBuy);
modal.addEventListener('click', hideBuy);
modalCover.addEventListener('click', function (event) {
    event.stopPropagation()
})