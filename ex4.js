function run(){
let input=document.getElementById("input").value.trim();
try{
let[factorsStr,multiplesStr]=input.split(":").map(s=>s.trim());
let factors=factorsStr.split(" ").map(x=>{
let n=parseInt(x);
if(isNaN(n))throw"NaN";
return n;
});
let multiples=multiplesStr.split(" ").map(x=>{
let n=parseInt(x);
if(isNaN(n))throw"NaN";
return n;
});
let sum=0;
for(let m of multiples){
for(let f of factors){
if(m%f===0){sum+=m;break;}
}
}
document.getElementById("output").textContent=`${sum} : ${factorsStr} : ${multiplesStr}`;
}catch(err){
document.getElementById("output").textContent=`corrupt : ${input}`;
}
}
