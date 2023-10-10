const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";

document.body.appendChild(getSumBtn);
let total = 0;
const getSum = () => {
 const prices = document.querySelectorAll(".prices");
	prices.forEach((PriceElement) => {
	const priceValue = parseFloat(PriceElement.textContent);
    if(!isNaN(priceValue))
	{
		 total += priceValue;
	}
	});

	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");

	newCell.textContent = total ;
	newRow.appendChild(newCell);

	const table = document.querySelector("table");
	table.appendChild(newRow);
	
};

getSumBtn.addEventListener("click", getSum);

