// >=375px

function change_color() {
    if (document.documentElement.scrollTop > 375){
        $('.up_to_head div').css('opacity', '0.6');
    }
    if (document.documentElement.scrollTop < 375){
        $('.up_to_head div').css('opacity', '0');
    }
}

$('.up_to_head').click();

window.setInterval(change_color, 1);

