const x = 42;

function getX() {
    return this.x;
}

const obj = { x, getX };
const unboundGetX = obj.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());
