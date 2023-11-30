
function greetings(name){
    let greet = prompt();

    return greet;
}

function alat(){
    alert(`Good Morning `+ greetings())
}

const navs = document.querySelector('.items');
const bar = document.querySelector('.bars');
const times = document.querySelector('.times');
function clickbars() {
    navs.style.display = 'block';
    bar.style.display = 'none';
    times.style.display = 'block'
}
function clicktimes() {
    navs.style.display = 'none';
    bar.style.display = 'block';
    times.style.display = 'none';
}
