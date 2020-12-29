import { account } from "../data/data.js";

function sortMonths(list) {
    let sortedList = [];

    sortedList = list.sort((a, b) => a.month - b.month);
    return sortedList;
}

sortMonths(account);
const sortedByMonths = sortMonths(account);
console.log(sortedByMonths);

function renderMetuBalansas(selector, account, months) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    
    let HTML = '';

    if (selector === '#content') {
for (let i=0; i<account.length; i++) {
    let sortedIncome = sortedByMonths[i].income;
    let sortedExpense = account[i].expense;
    let balance = sortedIncome - sortedExpense;
    console.log(balance);
    if (typeof sortedIncome === 'number') {
        sortedIncome = sortedIncome + ' Eur';
        } else {
            sortedIncome = '-';
        }
    if (typeof sortedExpense === 'number') {
        sortedExpense = sortedExpense + ' Eur';
    } else {
        sortedExpense = '-';
    }

        HTML += `<div class="table-row">
                    <div class="cell">${account[i].month}</div>
                    <div class="cell">${months[i]}</div>
                    <div class="cell">${sortedIncome}</div>
                    <div class="cell">${sortedExpense}</div>
                    <div class="cell">150 Eur</div>
                </div>`
        }
    }
    
DOM.innerHTML = HTML;




}

export { renderMetuBalansas }