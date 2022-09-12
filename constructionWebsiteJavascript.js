/* ##################################### start testimonials #################################### */
var leftBtn = document.getElementById("left_arrow"), 
    rightBtn = document.getElementById("right_arrow"),
    clientsUlElem = document.getElementById("testimUlId"),
    count = 0 ;
rightBtn.onclick = function()
{
    count++ ;
    console.log(count);
    if( count <= 3 ) 
    {
        clientsUlElem.style.transform += "translateX(-25%)";
    }
    else
    {
        clientsUlElem.style.transform = "translateX(0%)";
        count = 0 ;
    }
}
leftBtn.onclick = function()
{
    count-- ;
    console.log(count);
    if( count >= 0 ) 
    {
        clientsUlElem.style.transform += "translateX(25%)";
    }
    else
    { 
        clientsUlElem.style.transform = "translateX(0%)";
        count = 0 ;
    }

}
