const expensef=document.getElementById("expensesform");


const expenselist = document.getElementById("expenseTable");
expensef.addEventListener("submit", function (event) {
    event.preventDefault();
    const des = document.getElementById("description");
const category1 = document.getElementById("category");
const amt = document.getElementById("amount");
  const description1 = des.value;
  const category2 = category1.value;
  const amount1 = amt.value;
  if (description1 && category2 && !isNaN(amount1)) {
   const newrow = document.createElement("tr");
    newrow.innerHTML = `
      <td>${description1}</td>
      <td>${category2}</td>
      <td>${amount1}</td>
    `

    expenselist.appendChild(newrow);
    des.value = "";
    category1.value = "";
    amt.value = "";

  }
  else{
    alert ("Please fill out all details");
  }
  
});
