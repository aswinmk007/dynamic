const login = ()=>{
    if(User.value=="" || password.value=="" ){
        alert("please fill the form")
    }else{
        user = User.value
        localStorage.setItem("user",user)
        window.location = "index.html"
        alert("Login successfully...")
    }
}