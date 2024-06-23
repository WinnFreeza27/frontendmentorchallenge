const parentItem = document.querySelectorAll('.list-item');

parentItem.forEach(element => {
    
    element.addEventListener('click' , (event) => {
        event.stopPropagation();
        openTheList(element)
    });
});

function openTheList(value) {
    parentItem.forEach(element => {
        if(element !== value) {
        element.querySelector('li').classList.remove('font-bold');
        element.querySelector('p').classList.add('hidden');
        element.querySelector('img').classList.remove('rotate-180');
        }
    });
    const imgItem = value.querySelector('img');
    const listItem = value.querySelector('li');
    const descitem = value.querySelector('p');
    imgItem.classList.toggle('rotate-180');
    listItem.classList.toggle('font-bold');
    descitem.classList.toggle('hidden');
    console.log(listItem)
}