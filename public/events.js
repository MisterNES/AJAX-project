const fetchPic = async () => {
    const res = await fetch("/kitten/image")
    const json = await res.json()
    if (res.ok) {
        return json.src;
    } else {
        window.alert("Oops! Something went wrong! Please try again.");
    }
}

const upvote = async () => {
    const res = await fetch("/kitten/upvote", {
        method: "PATCH"
    })
    const json = await res.json();

    if (res.ok) {
        return json.score;
    } else {
        window.alert("Upvote isn't working! Sorry!")
    }
}

const downvote = async () => {
    const res = await fetch("/kitten/downvote", {
        method: "PATCH"
    })
    const json = await res.json();

    if (res.ok) {
        return json.score;
    } else {
        window.alert("Downvote isn't working! Sorry!")
    }
}

const newComment = async (comment) => {
    const res = await fetch("/kitten/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({comments})
    })
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

    let score = document.querySelector(".score")
    let upvoteButton = document.getElementById("upvote")
    let downvoteButton = document.getElementById("downvote")

    upvoteButton.addEventListener("click", async () => {
        let currValue = await upvote();
        score.innerHTML = currValue;
    })

    downvoteButton.addEventListener("click", async () => {
        let currValue = await downvote();
        score.innerHTML = currValue;
    })

    let form = document.querySelector(".comment-form")
    let comment = document.getElementById("user-comment")
    form.addEventListener("submit", async () => {
        let currComment = await newComment(comment)
    }
})
