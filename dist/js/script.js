const submitBtn = document.querySelector('.button')
const email = document.getElementById('email')
const errorLabel = document.querySelector('.form-group-labels-errorLabel')
const dismisbtn = document.getElementById('dismissbtn')


submitBtn.addEventListener('click',e=>{
    e.preventDefault()
    console.log(errorLabel)
    if(isValidEmail(email.value)){
        email.classList.remove('error-input')
        errorLabel.style.display = 'none'
        window.location.href = 'https://areactdeveloper.github.io/NewsLetter-frontend-mentor-project/sucess.html';

    }else{
        email.classList.add('error-input')
        errorLabel.style.display = 'block'
    }
})


dismisbtn.addEventListener('click',e=>{
    e.preventDefault()
    window.location.href = 'https://areactdeveloper.github.io/NewsLetter-frontend-mentor-project'
})

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

