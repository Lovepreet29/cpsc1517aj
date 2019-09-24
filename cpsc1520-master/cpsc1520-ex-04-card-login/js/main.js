/* 
   GET REFERENCES TO THE username password button
   create dummy vars for username and password to test
   add click event to the button.

const fakeUserName ='spankypants'
const fakePassword = "lemonloaf"
const userName = document.querySelector('#user-name')
const userPassword= document.querySelector('#user-password')
const checkButton = document.querySelector('#check-card')

checkButton.addEventListener('click', function(eventObject){
    //.trim() use with form field text to strip white space
    // unwanted space charachters
    const name = userName.value.trim()

    if(  name === fakeUserName){
        console.log(" the user name is correct")
        console.log(userName.value)
}else{
       console.log("the username is incorrect")
}
})

    /* 
    =
    ==
    ===
    logical operator ! not
        if(){

        }
        if(T){
              true block
        }else{
            false block
        }
    
   */
  const showPassword = document.querySelector('#icon')
  const passwrdfield = document.querySelector('#user-password')
 
let showPassword=false;
 
 showPassword.addEventListener('click', function(eventObject){
      if(showPassword===false){
        passwrdfield.type='text'
        showSidePassword.src='img/show.svg'
        showPassword=true;
      }else{
          passwrdfield.type='password'
          showSidePassword.src='img/hide.svg'
        showPassword=false;
      }
  })

