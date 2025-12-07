
let div = document.querySelector('.par2');
let div2 = document.querySelector('.par1');
let div3 = document.querySelector('.par3');

let count =0;
div.addEventListener('click',function(){
    div2.innerHTML = `<b>${++count}</b>`
    // div.style.transition = "transform 1s ease";
    div.style.transform = "scale(0.95)";
    setTimeout(() => {
        div.style.transform = "scale(1)";
    }, 100);
})



div3.addEventListener('click',function(){
    if(count >0) {
        div2.innerHTML = `<b>${--count}</b>`
        div3.style.transform = "scale(0.95)";
        setTimeout(() => {
            div3.style.transform = "scale(1)";
        }, 100);
    }
})