function login() {
    const currentUsername = document.querySelector("#name");
    localStorage.setItem("username", currentUsername.value);
    window.location.href = "generator.html";
}