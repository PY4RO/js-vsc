window.addEventListener("load",()=>{
    let passwd = document.getElementById("passwd"),
        user = document.getElementById("user"),
        btnL = document.getElementById("login"),
        msgError = document.getElementById("msg-error"),
        // declineX = document.querySelector("div.x-toggle"),
        passwdblk = document.getElementById("passwdblk")

    let x=screen.width,y=screen.height;
    // console.log(x,y);console.log(user);
    // console.log(document)
//     window.onbeforeunload=(event)=>{
// event.preventDefault()
setInterval(()=>{
    msgError.classList.toggle("delcineMsg-error")
 passwdblk.addEventListener("click",()=>{
    passwdblk.style.display="none"
 })
    if (user.value==="" && passwd.value===""){
        msgError.style.display="block";

    }
    else{
        msgError.style.display="none";
    }
},1)

// declineX.addEventListener("click",()=>{

// })
//     }

btnL.addEventListener("click",()=>{
   
    
})

})

// location.replace(location.href);console.log()
// window.addEventListener('beforeunload', function(event) {
//     // Aqui você pode realizar qualquer ação que desejar antes da página ser descarregada
//     // Por exemplo, exibir uma mensagem para o usuário
//     alert("certeza")
//    event.preventDefault();
//     //event.returnValue = 'aaa'; // Alguns navegadores podem precisar disso
// });
