const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices = document.querySelectorAll('.price')

const getSum = () => {
//Add your code here
	let total = 0  
	prices.forEach(el=>{
		total+=Number(el.innerText)
	})
	const newRow = document.createElement('tr')
	newRow.innerText = total
	newRow.id = "ans"
	const table = document.querySelectorAll('table')[0]
	table.appendChild(newRow)
};

getSumBtn.addEventListener("click", getSum);