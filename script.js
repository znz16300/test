let b = document.querySelector(".b1")
let h = document.querySelectorAll(".h1")

b.addEventListener("click", ()=>{
    for (s of h){
        s.innerText = "asd"
    }
    let dd = document.createElement('button')
    dd.innerText ="Кнопка 2"
    dd.classList.add('asd')
    b.after(dd);
})