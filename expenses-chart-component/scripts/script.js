async function fillDataInBarGraph() {

    // Fetch data and parse
    const resp = await fetch("/data.json");
    const expenses = await resp.json();

    // Find elements to set values in
    const bars = document.querySelectorAll(".balance-card__stats__graph-container__bar-container__bar");

    // Calculate and set values
    const maxBalance = expenses.reduce((result, curr) => (curr.amount > result ? curr.amount : result), 0);
    const dayToday = (new Date()).toString().slice(0, 3).toLowerCase();

    expenses.forEach(({ day, amount }, index) => {
        const bar = bars[index];
        bar.style.height = `${(amount / maxBalance) * 118}px`;
        bar.setAttribute("data-val", `$${amount}`);
        if(dayToday === day){
            bar.classList.add("today");
        }
    });
}

fillDataInBarGraph();