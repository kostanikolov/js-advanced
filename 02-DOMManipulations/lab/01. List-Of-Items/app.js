function addItem() {

    let listItem = document.createElement('li');
    listItem.textContent = document.getElementById('newItemText').value;

    if (listItem.textContent !== '') {
        document.getElementById('items').appendChild(listItem);
        document.getElementById('newItemText').value = '';
    }
}
