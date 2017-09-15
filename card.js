
function myfun(){
document.getElementById('maruti').style.display='none';
document.getElementById('tata').style.display='none';
document.getElementById('mahindra').style.display='none';
};
 function carfun(){
 	myfun();
 	var xx=document.getElementById("selectmodel").value;
    document.getElementById(xx).style.display='block';
   
 };
