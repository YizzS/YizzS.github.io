function sayHello(){
  var response=prompt("What's your name?");
  alert("Hello,"+response+"! Let me help you with your math!");
}
sayHello();
function MCK(type) {
    var inputnum1=document.getElementById("num1");
    var inputnum2=document.getElementById("num2");
    if(inputnum1.value==""){
        alert("数字1还没输入,你清醒一点");
        return false;
    }
    if(inputnum2.value==""){
        alert("数字2还没输入,你清醒一点");
        return false;
    }
    if(type==1){

        var total=parseInt(inputnum1.value)+parseInt(inputnum2.value);
        document.getElementById("result").innerHTML="<h1>计算结果: <strong style='color:aliceblue'>"+total+"</strong></h1>"
    }
    if(type==2){

        var total=parseInt(inputnum1.value)-parseInt(inputnum2.value);
        document.getElementById("result").innerHTML="<h1>计算结果: <strong style='color:aliceblue'>"+total+"</strong></h1>"
    }
    if(type==3){
        var total=parseInt(inputnum1.value)*parseInt(inputnum2.value);
        document.getElementById("result").innerHTML="<h1>计算结果: <strong style='color:aliceblue'>"+total+"</strong></h1>"
    }
    if(type==4){
        var total=parseInt(inputnum1.value)/parseInt(inputnum2.value);
        document.getElementById("result").innerHTML="<h1>计算结果: <strong style='color:aliceblue'>"+total+"</strong></h1>"
    }
    if(type==5){
        if(confirm("确认清空吗?")){
            inputnum1.value="";
            inputnum2.value="";
            document.getElementById("result").innerHTML="";
        }
        return false;
    }
}
