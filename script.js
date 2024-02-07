const smallAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const largeAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

let btn = document.querySelector("button")
let input=document.querySelector("#input")
btn.addEventListener("click",()=>{
let i=Math.floor(Math.random()*26);
let j=Math.floor(Math.random()*26);
let k=Math.floor(Math.random()*10);
let h=Math.floor(Math.random()*8);
let m=Math.floor(Math.random()*26);
let x=Math.floor(Math.random()*26);
let y=Math.floor(Math.random()*10);
let z=Math.floor(Math.random()*8);
input.value=(smallAlphabets[i]+largeAlphabets[j]+numbers[k]+symbols[h]+smallAlphabets[m]+largeAlphabets[x]+numbers[y]+symbols[z])
})
let copy = document.querySelector(".copy")
copy.addEventListener("click",()=>{
    input.select(); 
    document.execCommand('copy');
    
})
