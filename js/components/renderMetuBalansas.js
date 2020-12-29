function renderMetuBalansas(selector, account, months) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    
    let HTML = '';

    if (selector === '#content') {
        for (let i=0; i<account.length; i++) {    
            console.log(months);
            HTML += `<div class="table-row">
                    <div class="cell">${account[i].month}</div>
                    <div class="cell">${months[i]}</div>
                    <div class="cell">150.00 Eur</div>
                    <div class="cell">-</div>
                    <div class="cell">150.00 Eur</div>
                </div>`
        }
    }
DOM.innerHTML = HTML;




}

export { renderMetuBalansas }