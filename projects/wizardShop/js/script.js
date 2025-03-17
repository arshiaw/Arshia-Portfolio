// brands animation sections 
window.onload = function () {
    const brandsBox = document.querySelector(".brands__box");
    if (!brandsBox) {
        console.error("عنصر brandsBox پیدا نشد.");
        return;
    }
    let containerWidth = document.querySelector(".container").offsetWidth;
    let position = containerWidth;

    function animate() {
        position -= 1.5;
        if (position <= -brandsBox.offsetWidth) {
            position = containerWidth;
        }
        brandsBox.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
};
// 
const hoverTexts = document.querySelectorAll('.hoverText');

hoverTexts.forEach(hoverText => {
    const text = hoverText.textContent;

    // پاک کردن محتوای اصلی h2
    hoverText.textContent = '';

    // تبدیل هر حرف به یک span جداگانه
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        hoverText.appendChild(span);
    });
});
// 




// let sentens=prompt("enter your sentens : ")
// console.log(sentens.split(" ").reverse().join(" "));





// let arr=[1,10,20,85,29,1002,4219,5]
// console.log(arr.sort(()=> Math.random()-0.5));


// import mySumFunc from "./products.js"
// import * as products from "./products.js"
// console.log(mySumFunc);
// alert(products.kirkhar)
// console.log(products.arrayi);

// let arr=[];
// let ask=false

// let addNum=(array,flag)=>{
// let num=null;
// console.log(flag)
// if(flag){
//         num=prompt("enter your number : ");
//         if(isNaN(num)){
//             alert("juser enter number ! ");
//             askUser()
//         }else{
//             console.log(`${num}`)
//             array.push(+num)
//             askUser()

//     }
// }
// }

// let askUser=()=>{
//     ask=confirm("do you want a add number ? ");
//     if(ask){
//         addNum(arr,ask)
//     }else{
//         alert("thanks")
//         oddEven(arr)
//     }
// }


// let oddEven=array=>{
//     let odd=[],even=[];
//     array.forEach((value)=>{if(value%2==0){
//         even.push(value)
//     }else{
//         odd.push(value)
//     }
// })

// console.log(`even numbers :\n${even}\nodd numbers :\n${odd}`)
// }

// askUser()
// console.log(arr);



let text=prompt("enter your ")