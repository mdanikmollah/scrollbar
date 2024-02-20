let bar = document.querySelector(".bar")
let round = document.querySelector(".round")
let span = document.querySelector(".round span")


function handleScroll(){
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )

    const scrollParcentage = (scrollY / (documentHeight - windowHeight)) * 100
    const finalvalue = scrollParcentage.toFixed(2)
    bar.style.width = `${finalvalue}%`
    roundvalue = Math.floor(finalvalue)
    span.innerHTML =`${roundvalue}%`
    
}
handleScroll()
window.addEventListener("scroll",handleScroll)