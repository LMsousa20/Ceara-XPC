function isLogin(){
    userID = localStorage.getItem("userLogin");
    if(userID != ''){
        if (validarCPF(userID)) {
            localStorage.setItem("userLogin", userID);
            consulta(userID)
        }     
    }
}