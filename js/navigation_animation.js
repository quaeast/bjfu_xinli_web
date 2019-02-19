let lis = $("#navigation_list div");
let underline = $("#nav_underline");
let pos = $("#nav_underline").css("left");
pos = pos.slice(0, pos.length-2);

console.log(pos);



lis.click(
    function() {
        let num = $(this).attr("name");
        underline.css("width", "80px");
        underline.animate({"left": num*115 + 50 +'px'}, 500);
        underline.animate({"left": num*115 + 'px'}, 50);
        // underline.css("background", 'red');
    });