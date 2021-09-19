const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const firstp = document.getElementById('firstp');
const secondp = document.getElementById('secondp');
const thirdp = document.getElementById('thirdp');


first.addEventListener('mouseover', function () {
    first.classList.add('col-6');
    second.classList.remove('col-6');
    second.classList.add('col-3');
    third.classList.remove('col-6');
    third.classList.add('col-3');
})

first.addEventListener("mouseenter", function () {
    firstp.classList.add('opacity-100');
})

first.addEventListener("mouseleave", function () {
    firstp.classList.remove('opacity-100');
})

second.addEventListener('mouseover', function () {

    first.classList.remove('col-6');
    first.classList.add('col-3');
    second.classList.add('col-6');
    third.classList.remove('col-6');
    third.classList.add('col-3');

})

second.addEventListener("mouseenter", function () {
    secondp.classList.add('opacity-100');
})

second.addEventListener("mouseleave", function () {
    secondp.classList.remove('opacity-100');
})

third.addEventListener('mouseover', function () {

    first.classList.remove('col-6');
    first.classList.add('col-3');
    second.classList.remove('col-6');
    second.classList.add('col-3');
    third.classList.add('col-6');

})

third.addEventListener("mouseenter", function () {
    thirdp.classList.add('opacity-100');
})

third.addEventListener("mouseleave", function () {
    thirdp.classList.remove('opacity-100');
})