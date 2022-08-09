var password_hide_show = document.querySelector('.password-toggle');
var password_field = document.querySelector('#password-field');

document.onreadystatechange = () =>{
    if(document.readyState === 'complete'){

        var showPass = 0;
        password_hide_show.onclick = function(){
            if(showPass == 0){
                password_hide_show.classList.remove('password-hide');
                password_hide_show.classList.add('password-show');
                password_field.setAttribute('type', 'text');
                showPass = 1;
            }
            else{
                password_hide_show.classList.remove('password-show');
                password_hide_show.classList.add('password-hide');
                password_field.setAttribute('type', 'password');
                showPass = 0;
            }
        }
    }
}