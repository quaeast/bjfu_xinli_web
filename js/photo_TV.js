let p = $('#photos');

function* get_left(){
    for(let i=0;; i++){
        yield -1440-(i%3)*1440;
    }
}

let left = get_left();

window.setInterval(function () {
    p.animate({
        left: left.next().value + 'px'
        }, 1000);
    }, 5000);

