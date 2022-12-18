let loginBtn = document.querySelector('div>button:nth-child(2)');
    let signUpBtn = document.querySelector('div>button:nth-child(1)');
    let signIn = document.querySelector('#signIn');
    let signUp = document.querySelector('#signUp');

// by default We want the signIn form to be hidden.
    signIn.style.display = 'none';

    loginBtn.addEventListener('click',function(){
       signUp.style.display = 'none';
    // we can use any display property to show the element in place of block (grid, flex,inline, block)
    // generally we use block because we don't want to change our display style.
       signIn.style.display = 'block';
    //    we change the document title using title method
    document.title = 'Sign In';
    })
    signUpBtn.addEventListener('click',function(){
        signIn.style.display = 'none';
        signUp.style.display = 'block';
        document.title = 'Sign Up';

    })

    signUp.addEventListener('submit',function(event){
        // we preventDefault() to stop page from refreshing
        event.preventDefault();
        let username = signUp.name.value;
        let user = signUp.email.value;
        let password = signUp.password.value;
        // we check if password is equal to passwordChk
        if(password != signUp.passwordChk.value){
            alert('passwords do not match!');
        }
        else{
            localStorage.setItem('user',user);
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            alert('Sign Up successful!');
            // to reset all the input fields of a form we can use reset() method
            signUp.reset();
        }
    })

    signIn.addEventListener('submit',function(event){
        event.preventDefault();
        let user = signIn.email1.value;
        let password = signIn.password1.value;
        
        let storedUser = localStorage.getItem('user');
        let storedPassword = localStorage.getItem('password');

        if(user != storedUser){
            alert('user not found/registered!');
        }
        else{
            if(password!=storedPassword){
                alert('wrong password');
            }
            else{
                alert('login successful!');
                // we can use n number of methods to change the page. here we are using assign() method
                // window.location.assign('url')
                window.location.assign('./myAccount.html')
            }
        }
    })
