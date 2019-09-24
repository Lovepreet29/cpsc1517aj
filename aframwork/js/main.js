/*

    STATE CHANGE    

    state variable
*/
const uiButton =document.querySelector('#button')
const uiWindow =document.querySelector('#window')

//state variable

let userIsLoggedIn = false;

uiButton.addEventListener('click', function(){
    if (userIsLoggedIn === false) {
        // true block
        uiWindow.classList.remove('hidden')
        userIsLoggedIn = true;
    }else{
        //false block
        uiWindow.classList.remove('hidden')
        userIsLoggedIn = false;
    }
})