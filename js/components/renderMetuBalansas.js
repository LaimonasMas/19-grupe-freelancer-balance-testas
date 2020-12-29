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
        HTML += `<div class="table-row">
            <div class="cell">${account[i].month}</div>
            <div class="cell">${months[i]}</div>
            <div class="cell">${sortedByMonths[i].income} Eur</div>
            <div class="cell">${account[1].expense} Eur</div>
            <div class="cell"> Eur</div>
        </div>`
        }
    }
    
DOM.innerHTML = HTML;




}

export { renderMetuBalansas }