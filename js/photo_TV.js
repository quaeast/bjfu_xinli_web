let p = $('#photos');

function* get_left(){
    for(let i=0;; i++){
        yield -1065-(i%3)*1190;
    }
}

let left = get_left();

for (let i = 0; i<10; i++){
    console.log(left.next().value);
}


window.setInterval(function () {
    p.animate({
        left: left.next().value + 'px'
    }, 1000);
}, 5000)

