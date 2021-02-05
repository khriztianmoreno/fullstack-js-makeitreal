let arr1=["Jazz","Blues"];

arr1.push("Rock-n-Roll");

console.log(arr1)
if((arr1.length)%2!==0){
    let n=arr1.length;
    let pos=0;
    pos=Math.floor(n/2);
    arr1[pos]="Classics";
    console.log(pos)
}

console.log(arr1)
arr1.shift();
arr1.unshift("Rap","Reggae")

console.log(arr1);