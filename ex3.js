
function eulerlist() {
  let a=parseInt(document.getElementById("a1").value);
  let b=parseInt(document.getElementById("b1").value);
  let l = document.getElementById("l").value.split(" ").map(Number);
  let sum=0;
  for (let i of l) {
    if (i%a==0 ||i%b==0){
         sum=sum+i;
    }
  }
  alert(`Sum of multiples of ${a} or ${b} in list = ${sum}`);
}
