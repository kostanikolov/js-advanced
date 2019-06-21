function app() {

    const inputField = document.getElementsByTagName('input')[0];
    const button = document.getElementsByTagName('button')[1];

    inputField.addEventListener('input', function () {
        button.setAttribute('disabled', 'false');
    });
}
