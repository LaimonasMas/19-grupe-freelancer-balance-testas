function renderMetuBalansas(selector, account) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    
    let HTML = '';

    if (selector === '#content') {
        HTML += `<div class="table-row">
    <div class="cell">1</div>
    <div class="cell">Sausis</div>
    <div class="cell">150.00 Eur</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
</div>
<div class="table-row">
    <div class="cell">1</div>
    <div class="cell">Sausis</div>
    <div class="cell">150.00 Eur</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
</div>
<div class="table-row">
    <div class="cell">1</div>
    <div class="cell">Sausis</div>
    <div class="cell">150.00 Eur</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
</div>
<div class="table-row">
    <div class="cell">1</div>
    <div class="cell">Sausis</div>
    <div class="cell">150.00 Eur</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
</div>`
    }
DOM.innerHTML = HTML;




}

export { renderMetuBalansas }