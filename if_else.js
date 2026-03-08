document.write("if-else staement <br>");
var year=2025;
document.write("a leap year is a calendar year containing 366 days <br>");
document.write("input year is ",year,"<br>");
if(year%4==0 && year%100!=0){
    document.write("leap year");
}
else{
    if(year%100==0 && year%400==0){
        document.write("leap year");
    }
    else{
        document.write("not leap year");
    }
}