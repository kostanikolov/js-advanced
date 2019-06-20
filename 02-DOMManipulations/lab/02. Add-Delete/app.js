function addItem() {
    
    const input = document.getElementById('newText');
    const itemsElement = document.getElementById('items');
    const newListItem = createElement('li', input.value + ' ');

    const anchorElementAttribute = {
        name: 'href',
        value: '#',
    };
    
    const anchorElementListener = {
        type: 'click',
        func: deleteItem
    };

    const deleteLink = createElement('a', '[Delete]', anchorElementAttribute, anchorElementListener);

    appendChild(newListItem, [ deleteLink ]);
    appendChild(itemsElement, [ newListItem ]);

    clearText(input);

    function deleteItem() {
        itemsElement.removeChild(this.parentNode);
    }

    function createElement(tagElement, text, attr, eListener) {
        const element = document.createElement(tagElement);
        element.textContent = text;

        if (attr) {
            element.setAttribute(attr.name, attr.value);
        }

        if (eListener) {
            element.addEventListener(eListener.type, eListener.func);
        }

        return element;
    }

    function clearText(element) {
        element.value = '';
    }

    function appendChild(parent, children) {
        children.forEach(child => {
            parent.appendChild(child);
        });
    }
}
