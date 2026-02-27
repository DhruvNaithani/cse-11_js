document.write("if-else staement <br>");
var year=2025;
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