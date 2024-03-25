function loadPage() {
    let username = localStorage.getItem("username");
    username = JSON.parse(username);

    if (username == null) {
        console.log("Not logged in.")
        document.getElementById("navFav").remove();
    }
}