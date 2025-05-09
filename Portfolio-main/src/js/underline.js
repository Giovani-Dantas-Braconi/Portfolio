
const menuItems = document.querySelectorAll('.itens-header');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(el => el.classList.remove('active')); // remove de todos
        item.classList.add('active'); // adiciona no clicado
    });
});


const certItems = document.querySelectorAll('.certificates p');

certItems.forEach(item => {
    item.addEventListener('click', () => {
        certItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});
