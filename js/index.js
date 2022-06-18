let flag = JSON.parse(localStorage.getItem("flag_value"));

if(flag === true){
    document.querySelector("#signIn_index").innerText = "";
    let a = document.createElement("a");
    a.setAttribute("href","account.html")
    a.innerText = "Account"
    document.querySelector("#signIn_index").append(a);
}