function deleteByEmail() {

    const SELECTORS = {
        TABLE_ROWS: '#customers tr td:last-child',
        MESSAGE: 'result',
        EMAIL: 'email'
    }

    const message = document.getElementById(SELECTORS.MESSAGE);
    deleteEmail();

    function getEmail() {
        return document.getElementsByName(SELECTORS.EMAIL)[0].value;
    }

    function deleteEmail() {
        const rows = document.querySelectorAll(SELECTORS.TABLE_ROWS);
        const email = getEmail();
        const rowToDelete = Array.from(rows)
            .find(row => row.textContent === email);

        if (rowToDelete) {
            let row = rowToDelete.parentNode;
            row.parentNode.removeChild(row);
            message.textContent = 'Deleted.';
        } else {
            message.textContent = 'Not found.';
        }
    }
}
