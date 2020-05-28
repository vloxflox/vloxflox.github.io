var choice1 = false;
var choice2 = false;

colorUpdate1();
colorUpdate2();

function updateChild(){
 if ((choice1 || choice2) && !(choice1 && choice2) ){
  if(choice1){
   document.getElementById("child").innerHTML = document.getElementById("parent1").innerHTML;
  }else{
   document.getElementById("child").innerHTML = document.getElementById("parent2").innerHTML;
  }
 }else{
  document.getElementById("child").innerHTML = "????"
 }
}

function click1(){
 choice1 = !choice1;
 updateChild();
 colorUpdate1();
}

function click2() {
 choice2 = !choice2;
 updateChild();
 colorUpdate2();
}

function colorUpdate1(){
 var x = document.getElementById("parent1");
 if (choice1){
  x.style.background = 'paleGreen';
 }else{
  x.style.background = 'salmon';
 }
}

function colorUpdate2() {
 var x = document.getElementById("parent2");
 if (choice2) {
  x.style.background = 'paleGreen';
 } else {
  x.style.background = 'salmon';
 }
}
