// data display elements
const nameElm = document.getElementById("data-name");
const birthElm = document.getElementById("data-birth");
const ageElm = document.getElementById("data-age");
const genderElm = document.getElementById("data-gender");
const avatarElm = document.getElementById("data-avatar");
const emailElm = document.getElementById("data-email");
const phoneElm = document.getElementById("data-phone");
const addressElm = document.getElementById("data-address");

// input elements
const inputName = document.getElementById("name");
const inputPlaceOfBirth = document.getElementById("placeOfBirth");
const inputDateOfBirth = document.getElementById("dateOfBirth");
const inputGender = document.getElementsByName('gender')
const inputPhone = document.getElementById("phone");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputAvatar = document.getElementById("avatar");

// submit form function
function submitForm(e) {
  e.preventDefault()

  // store input value to variable
  const name = inputName.value;
  const placeOfBirth = inputPlaceOfBirth.value;
  const dateOfBirth = new Date(inputDateOfBirth.value)
  const phone = inputPhone.value;
  const address = inputAddress.value;
  const email = inputEmail.value;
  const password = inputPassword.value; // we don't need now
  
  // subtract year now and user year of birth
  const age = new Date().getFullYear() - dateOfBirth.getFullYear()

  // lopping for check gender radio input
  let gender;
  for(let i = 0; i < inputGender.length; i++){
    if(inputGender[i].checked){
      gender = inputGender[i].value;
    }
  }

  // for conditional validation
  if(!name || !placeOfBirth || !dateOfBirth || !phone || !address || !email || !password) {
    alert('all input fields must be not empty')
  } else if(age < 12) {
    alert('you are too young to use this application')
  } else if(password.length < 8) {
    alert('password must be at least 8 characters')
  } else if(!phone.startsWith('+62') || phone.length < 12) {
    alert('phone number must be in Indonesia format and at least 12 characters with digit only')
  } else {
    // move file generate url to here (after validation) 
    const avatar  = URL.createObjectURL(inputAvatar.files[0])

    // insert value to element with id=data-*
    nameElm.innerText = name
    birthElm.innerText = `${placeOfBirth}, ${dateOfBirth.toLocaleDateString('id-ID')}`
    phoneElm.innerText = phone
    addressElm.innerText = address
    emailElm.innerText = email
    avatarElm.setAttribute("src", avatar)
    ageElm.innerText = `${age} years old` //insert text to age element
    genderElm.innerText = gender // insert text to gender element

    //send email
    const a = document.createElement('a')
    a.href = `mailto:${email}?subject=Registration&body=Thanks for your registration Mr. ${name}, have a nice day sir!`
    a.target = "_blank" //for open new tab
    a.click()
  }
}

// reset input value
function resetForm(e) {
  e.preventDefault()

  inputName.value = "";
  inputPlaceOfBirth.value = "";
  inputDateOfBirth.value = "";
  inputGender.value = "";
  inputPhone.value = "";
  inputAddress.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputAvatar.value = "";
}