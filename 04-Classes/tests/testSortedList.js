const { expect } = require("chai");
const { SortedList } = require("../lab/sortedList.js");

describe("Sorted List", function () {
    let sortedList;

    beforeEach(function () {
        sortedList = new SortedList();
    });

    it("must initialize data to an empty array", function () {
        expect(sortedList.list instanceof Array).to.equal(true, "Data must be of type array");
        expect(sortedList.size).to.equal(0, "Data array must be initialize empty.");
    });

    it("should remove correctly", function () {
        sortedList.add(10); 
        sortedList.add(20);
        sortedList.add(30);
        sortedList.remove(1);
        
        expect(sortedList.size).to.equal(2);
        expect(sortedList.list[1]).to.equal(30);
    });
});
