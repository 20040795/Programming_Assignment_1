//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n
function euler1() {
  let a=parseInt(document.getElementById("a").value);
  let b=parseInt(document.getElementById("b").value);
  let n=parseInt(document.getElementById("n").value);
  let sum=0;
  for (let i=1;i<n;i++) {
    if (i%a==0 ||i%b==0){
         sum=sum+i;
    }
  }
  alert(`Sum of multiples of ${a} or ${b} below ${n} = ${sum}`);
}
