// login page Js code
/* this is a amraon contact us pagein which we taking input from user in a form and staoting the data in the
local storage and then printing the data in a table on the other page  and also creating buttons that can delete the entries 
or edit them*/

//  registering the varible name of the forms and the table
var formSubmit = document.getElementById("submit");
var userMobile = document.getElementById("user-mobile");
var userOtp = document.getElementById("user-otp");
var userEmail = document.getElementById("user-email");
var userPassword = document.getElementById("user-password");
var userListbody = document.getElementById("user-list-body");
var data = localStorage.getItem("userList");

var userList = data === null ? [] : JSON.parse(data);

if (formSubmit !== null) {
  formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();
    var result=valid();
    if(result===false){
    var newUser = {};
    var form = new FormData(formSubmit);

    form.forEach(function (value, name) {
      newUser[name] = value;
    });
    // collecting the data and pushing it in to a new user
    // and saving the data in to the local storage using .set method
    userList.push(newUser);
    localStorage.setItem("userList", JSON.stringify(userList));
    console.log(userList);

    formSubmit.reset();
    printUserDetail();
    alert("detail created succeessfully");
  }
  });
}

// it is print user detail function which will take all the value and ptint it on the table
function printUserDetail() {
  if (userListbody === null) return false;
  var newList = userList.map(function (value, index) {
    console.log("newList");
    // fetching the data from the userlist using .map functionand storing it into the  data
    var data = `<tr>
        <td scope="row">${index + 1}</td>
        <td>${value.number}</td>
        <td>${value.otp}</td>
        <td>${value.email}</td>
        <td>${value.password}</td> 
        <td>
        <button class="btn btn-danger btn-sm mx-2" onclick="removeUser(${index})">
        <i class="fa fa-trash"></i>
        <button class="btn btn-primary btn-sm">
        <i class="fa fa-edit"></i>
        </button>
        </td>  
        </tr>`;
    return data;
  });
  var newString = newList.join("");
  userListbody.innerHTML = newString;
}
// this function is for deleting the details from the table and the local storage
// here they got a alert Do you want to delete this data? if the user click ok then it will deleeted from the table and also
// from the local storage,and then after deleting the data we will once again set the remaining data to the local storage
// using.setItem and then print the data
function removeUser(index) {
  var isDelete = confirm("Do you want to delete this data?");
  if (isDelete === true) {
    userList.splice(index, 1);
    alert("User Deleted");
    printUserDetail();
    localStorage.setItem("userList", JSON.stringify(userList));
  }
}
// this function is to checck wether all the field is filled or not if not it will give an alert;
printUserDetail();
function valid() {
  var isError = false;
  if (userMobile.value === "") {
    alert("Enter your mobile no.");

    isError = true;
  }

  if (userOtp.value === "" && isError === false) {
    alert("Enter OTP");

    isError = true;
  }
  if (userEmail.value === "" && isError === false) {
    alert("Enter User Email Id");

    isError = true;
  }
  if (userPassword.value === "" && isError === false) {
    alert("Enter Password");

    isError = true;
  }
  return isError;
}

//  creating a  function on onclick to check if the user is present in the list or not if the email nad password is already
// present in the list it will show pass otherwise it will show fail
function checkEmail() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userList"))
    ? JSON.parse(localStorage.getItem("userList"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Login Pass");
  } else {
    alert("Login Fail");
  }
}

//  creating a  function on onclick to check if the user is present in the list or not if the number and otp is already
// present in the list it will show pass otherwise it will show fail
function checkLogin() {
  let number, otp;
  number = document.getElementById("number").value;
  otp = document.getElementById("otp").value;
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userList"))
    ? JSON.parse(localStorage.getItem("userList"))
    : [];
  if (
    user_records.some((v) => {
      return v.number == number && v.otp == otp;
    })
  ) {
    alert("Login Pass");
  } else {
    alert("Login Fail");
  }
}
