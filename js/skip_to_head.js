// >=375px

function get_scroll_top() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}




function change_color() {
    if (get_scroll_top() > 375){
        $('.up_to_head img').css('opacity', '0.6');
        // console.log('1');
    }
    if (get_scroll_top() < 375){
        $('.up_to_head img').css('opacity', '0');
        // console.log('2');
    }
}

$('.up_to_head').click();

window.setInterval(change_color, 100);

