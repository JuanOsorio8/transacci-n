const form = document.getElementById('form');
const totalExpensesElement = document.getElementById('total-expenses');
const totalPaymentsElement = document.getElementById('total-payments');
const balanceElement = document.getElementById('balance');

let totalExpenses = 0;
let totalPayments = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const type = document.getElementById('type-transaction').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (type === 'expense') {
        totalExpenses += amount;
    } else {
        totalPayments += amount;
    }

    updateSummary();
    form.reset();
});

function updateSummary() {
    totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
    totalPaymentsElement.textContent = `$${totalPayments.toFixed(2)}`;
    const balance = totalPayments - totalExpenses;
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}
