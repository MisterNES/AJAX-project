const fetchPic = async () => {
    const res = await fetch("/kitten/image")
    const json = await res.json()
    if (res.ok) {
        return json.src;
    } else {
        window.alert("Oops! Something went wrong! Please try again.");
    }
}

window.addEventListener("DOMContentLoaded", () =>{

    let catPic = document.querySelector(".cat-pic")
    let picButton = document.getElementById("new-pic")
    let loader = document.querySelector(".loader");

    picButton.addEventListener("click", async () => {

        loader.innerHTML = "Loading..."
        let currPic = await fetchPic();
        catPic.setAttribute("src", currPic);
        loader.innerHTML = "";

    })



})
