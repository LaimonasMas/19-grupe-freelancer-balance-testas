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
            let income = 0;
            let expense = 0;
            let balance = 0;
        for (let i=0; i<account.length; i++) {
            
            let sortedIncome = sortedByMonths[i].income;
            let sortedExpense = sortedByMonths[i].expense;
            
            if (typeof sortedIncome === 'number') {
                sortedIncome = sortedIncome;
                } else {
                    sortedIncome = 0;
                }
            if (typeof sortedExpense === 'number') {
                sortedExpense = sortedExpense;
            } else {
                sortedExpense = 0;
            }
            const item = sortedByMonths[i];
            income += item.income ? item.income : 0;
            expense += item.expense ? item.expense : 0;
            balance = income - expense;
            
                HTML += `<div class="table-row">
                            <div class="cell">${account[i].month}</div>
                            <div class="cell">${months[i]}</div>
                            <div class="cell">${sortedIncome} Eur</div>
                            <div class="cell">${sortedExpense} Eur</div>
                            <div class="cell">${balance} Eur</div>
                        </div>`
                }
            }
    
    DOM.innerHTML = HTML;




}

export { renderMetuBalansas }