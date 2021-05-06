const fetchPic = async () => {
    const res = await fetch("/kitten/image")
    const json = await res.json()
    if (res.ok) {
        return json.src
    }
}

window.addEventListener("DOMContentLoaded", () =>{

    let catPic = document.querySelector(".cat-pic")
    let picButton = document.getElementById("new-pic")

    picButton.addEventListener("click", async () => {
        let currPic = await fetchPic();
        catPic.setAttribute("src", currPic)
    })



})
