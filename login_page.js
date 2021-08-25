function lin_btn(){
    n = document.getElementById("user_name").value;
    localStorage.setItem(user_name, n);
    window.location = "page.html";
}