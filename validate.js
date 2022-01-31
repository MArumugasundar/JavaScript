
function validate(){
    var name=document.getElementById("fname");
    if(fname.value==""){
        fname.style.border="3px solid red";
        document.getElementById("name1").style.visibility="visible";
    }

    var laname=document.getElementById("lname");
    if(laname.value==""){
        laname.style.border="3px solid red";
        document.getElementById("name2").style.visibility="visible";
    }

    var number=document.getElementById("Mnumber");
    if(number.value=="" ){
        number.style.border="3px solid red";
        document.getElementById("num").style.visibility="visible";
   }

    var mail=document.getElementById("Email");
      // Regular Expression 
    var regx=/[a-z0-9]{1,15}@[a-z0-9]{2,8}.[a-z]{2,8}$/;
    if(regx.test(mail.value)){
        alert("Email match ");
    }else{
        alert("Email not match");
    }

        if(mail.value==""){
        mail.style.border="3px solid red";
        document.getElementById("email").style.visibility="visible";
    } 
        
    var pass=document.getElementById("password");
    //Password minimum 8 character
    if(pass.value.length<8){
        pass.style.border="2px solid red";
        document.getElementById("passw").style.visibility="visible";
    }
    if(pass.value==""){
        pass.style.border="3px solid red";
        document.getElementById("passw").style.visibility="visible";
    }

    var cpass=document.getElementById("Cpassword");
    if(cpass.value==""){
        cpass.style.border="3px solid red";
        document.getElementById("Cpassw").style.visibility="visible";
    }
      //password alert
      if(pass.value!=cpass.value){
        alert("Password Not Match");
    }
   
    var faname=document.getElementById("Faname");
    if(faname.value==""){
        faname.style.border="3px solid red";
        document.getElementById("father").style.visibility="visible";
    }

    var gender=document.getElementsByClassName("gend");
    if(gender[0].checked==false && gender[1].checked==false){
        alert("please select your gender");
    }

    var add=document.getElementById("Address");
    if(add.value==""){
        add.style.border="3px solid red";
        document.getElementById("addres").style.visibility="visible";
   }

   var hobby=document.getElementsByClassName("hob");
   if(hobby[0].checked==false && hobby[1].checked==false && hobby[1].checked==false){
       add.style.border="3px solid red";
       document.getElementById("hobby").style.visibility="visible";

   }
   
}
    




  


  
   