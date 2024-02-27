function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", currentUsername.value);
    window.location.href = "generator.html";
    console.log("hello");
}