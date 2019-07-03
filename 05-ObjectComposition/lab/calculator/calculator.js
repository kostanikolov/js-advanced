class Calculator {
    constructor() {
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubtractClick = this.handleSubtractClick.bind(this);

        this.num1 = document.getElementById("num1");
        this.num2 = document.getElementById("num2");
        this.result = document.getElementById("result");

        this.btnSum = document.getElementById("sumButton");
        this.btnSubtract = document.getElementById("subtractButton");

        this._initEvents();
    }

    handleAddClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) + Number(y);
    }

    handleSubtractClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) - Number(y);
    }

    _initEvents() {
        this.btnSum.addEventListener("click", this.handleAddClick);
        this.btnSubtract.addEventListener("click", this.handleSubtractClick);
    }
}

new Calculator();
