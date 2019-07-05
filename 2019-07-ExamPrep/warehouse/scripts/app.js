function acceptance() {
	const warehouse = document.getElementById('warehouse');

	const company = document.querySelector('input[name="shippingCompany"]');
	const productName = document.querySelector('input[name="productName"]');
	const productQuantity = document.querySelector('input[name="productQuantity"]');
	const productScrape = document.querySelector('input[name="productScrape"]');
	
	const addItButton = document.getElementById('acceptance');
	addItButton.addEventListener('click', addWarehouseStock);

	function addWarehouseStock() {
		if (company.value && productName.value && Number(productQuantity.value) && Number(productScrape.value)) {
			const finalQuantity = productQuantity.value - productScrape.value;

			if (finalQuantity > 0) {
				const div = document.createElement('div');
				const paragraph = document.createElement('p');
				
				const outOfStockBtn = document.createElement('button');
				outOfStockBtn.setAttribute('type', 'button');
				outOfStockBtn.textContent = 'Out of stock';
				outOfStockBtn.addEventListener('click', removeStock);

				paragraph.textContent = `[${company.value}] ${productName.value} - ${finalQuantity} pieces`;
				div.appendChild(paragraph);
				div.appendChild(outOfStockBtn);
				warehouse.appendChild(div);

				company.value = '';
				productName.value = '';
				productQuantity.value = '';
				productScrape.value = '';

				function removeStock() {
					div.remove();
				}
			}
		}
	}
}
