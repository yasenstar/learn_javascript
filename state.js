let counter = 0;

function incrementCount() {
    counter = counter + 1;
    renderState();
}

function renderState() {
    console.log(counter);
}

setInterval(function () {
    incrementCount();
}, 1000);