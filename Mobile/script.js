/********************  NAV  *************************/

var isMenuOpen = false

$("#iconMenu").click(function(){
    if(isMenuOpen)
    {
        $("nav:not(#homeMenu)").animate({
            left: "-40%"
        }, 500)
        $("header #iconMenu  div:not(.iconMenuSpaceBar)").css("background-color", "#ffffff")
    }
    else
    {
        $("nav:not(#homeMenu)").animate({
            left: "0"
        }, 500);
        $("header #iconMenu  div:not(.iconMenuSpaceBar)").css("background-color", "#4C3D3D")
    }
    isMenuOpen = !isMenuOpen;
});