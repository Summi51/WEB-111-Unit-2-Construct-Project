
let form=document.getElementById("register-form")

let name1=document.getElementById("f-name")

let name2=document.getElementById("l-name")

let email =document.getElementById("email");

let password = document.getElementById("password")


form.addEventListener('submit',function(event){
  
  event.preventDefault();
  let name1 = form.name1.value;
  let name2 = form.name2.value;
  let email = form.email.value;
  let password = form.password.value;
  // we check if password is equal to passwordChk
  if(password != form.passwordChk.value){
      alert('passwords do not match!');
  }
  else{
      localStorage.setItem('user',user);
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
      alert('Sign Up successful!');
     
      form.reset();
  }
})