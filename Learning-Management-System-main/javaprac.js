function abc(){
    document.getElementById("abc").innerHTML='how are you';
}
function x(){
    window.alert("welcome to lpu");
    document.write("html alert dialog box")
}
function x(){
    var retVal=confirm("do you want to continue?");
    if(retVal==true){
        document.write("user want to continue!");
        return true;
    }
    else{
        document.write("user does not want continue!");
        return false
    }
}
function y(){
    var retVal=prompt("enter your name:","ram")
    document.write("you have entered:"+retVal)

}