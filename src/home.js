import generateJoke from './generateJoke'
import './scss/home.scss'
import avatar from './assets/avatar.png' 

const avatarImg = document.getElementById('avatarImg');
avatarImg.src = avatar;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)
