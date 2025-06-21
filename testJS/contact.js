// Test

// /* this is a amraon contact us pagein which we taking input from user in a form and staoting the data in the
// local storage and then printing the data in a table on the other page  and also creating buttons that can delete the entries 
// or edit them*/

// //  registering the varible name of the forms and the table
// var formSubmit = document.getElementById("submit");
// var userName = document.getElementById("user-name");
// var userEmail = document.getElementById("user-email");
// var userMobile = document.getElementById("user-mobile");
// var userCity = document.getElementById("user-city");
// var userComment = document.getElementById("user-comment");
// var userListbody = document.getElementById("user-list-body");
// var data = localStorage.getItem("userList");

// var userList = data === null ? [] : JSON.parse(data);

// if (formSubmit !== null) {
//   formSubmit.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // checking if valid or not it will give an alert if any sectiion is not filled it will give suggestion like give user name
//     // mobile or email before submitting and if the data is not filled in all section
//     // the submit of the form will not work na dthe data will not be saved in the table
//     var result = valid();
//     if (result === false) {
//       var newUser = {};
//       var form = new FormData(formSubmit);

//       form.forEach(function (value, name) {
//         newUser[name] = value;
//       });
//       // collecting the data and pushing it in to a new user
//       // and saving the data in to the local storage using .set method
//       userList.push(newUser);
//       localStorage.setItem("userList", JSON.stringify(userList));
//       console.log(userList);

//       formSubmit.reset();
//       printUserDetail();
//       alert("detail created succeessfully");
//     }
//   });
// }
// // it is print user detail function which will take all the value and ptint it on the table
// function printUserDetail() {
//   if (userListbody === null) return false;
//   var newList = userList.map(function (value, index) {
//     console.log("newList");
//     // fetching the data from the userlist using .map functionand storing it into the  data
//     var data = `<tr>
//         <td scope="row">${index + 1}</td>
//         <td>${value.name}</td>
//         <td>${value.mail}</td>
//         <td>${value.number}</td>
//         <td>${value.city}</td> 
//         <td>${value.comment}</td>
//         <td>
//             <a href="#" class="btn btn-danger btn-sm mx-2" onclick="removeUser(${index})">
//             <i class="fa fa-trash"></i></a>
//             <a href="#" class="btn btn-primary btn-sm">
//             <i class="fa fa-edit"></i>
//             </a>
//         </td>  
//         </tr>`;
//     return data;
//   });
//   var newString = newList.join("");
//   userListbody.innerHTML = newString;
// }
// // this function is for deleting the details from the table and the local storage
// // here they got a alert Do you want to delete this data? if the user click ok then it will deleeted from the table and also
// // from the local storage,and then after deleting the data we will once again set the remaining data to the local storage
// // using.setItem and then print the data
// function removeUser(index) {
//   var isDelete = confirm("Do you want to delete this data?");
//   if (isDelete === true) {
//     userList.splice(index, 1);
//     alert("User Deleted");
//     printUserDetail();
//     localStorage.setItem("userList", JSON.stringify(userList));
//   }
// }
// // this function is to checck wether all the field is filled or not if not it will give an alert;
// printUserDetail();

// // function for checking the validation if all field is filled properly or not
// function valid() {
//   var isError = false;

//   if (userName.value === "") {
//     alert("Write User Name");

//     isError = true;
//   }

//   if (userEmail.value === "" && isError === false) {
//     alert("Enter User Email Id");

//     isError = true;
//   }

//   if (userMobile.value === "" && isError === false) {
//     alert("Enter User Mobile");

//     isError = true;
//   }

//   if (userCity.value === "" && isError === false) {
//     alert("enter City");
//     isError = true;
//   }

//   if (userComment.value === "" && isError === false) {
//     alert("Please enter comment or feedback");
//     isError = true;
//   }
//   return isError;
// }

// // creating the click function for the accordion
// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


// test


$(function(){
    var data=localStorage.getItem("enquiryList");
    var enquiryList=data===null ? [] :JSON.parse(data);
    $('#submit').on("submit",function(event){
        event.preventDefault();
        let form=$(this);
        if(form.valid()===true){   
    var data=$(this).serializeArray();
    var newEnquiry={};
    data.forEach(function(input,index) {
    newEnquiry[input.name]=input.value;     
    });
    console.log(newEnquiry);
    enquiryList.push(newEnquiry);
    localStorage.setItem("enquiryList",JSON.stringify(enquiryList));
    
    $('#submit')[0].reset(); 
    swal({
        title: "Good job!",
        text: "you have submitted the form",
        icon: "success",
        button: "Take me to the table",
      }) .then(() => {
        window.location.assign("/enquiry.html");
      });
} 
    });

    $('#submit').validate({
        rules:{
            name:{
                required:true,
                minlength:5,
            },
            email:{
                required:true,
            },
            number:{
                required:true,
                number:true,
                maxlength:10,
                minlength:10,  
            },
            city:{
                required:true,
            },
            comment:{
                required:true,
            }

        },
        messages:{
            name:{
                required:"Enter you name",
                minlength:"enter a min of 5 letters"
            },
            email:{
                required:"enter your email",
            },
            number:{
                required:"enter mobile number",
                maxlength:"max 10 digits",
                minlength:"min 10 digits",  
            }, 
            city:{
                required:"enter your city",
            },
            comment:{
                required:"enter comment",
            }

        },
        errorPlacement: function (error, element) {
            var errorElement = $(element).parent("div").find($(".error-div"));
            error.appendTo(errorElement);
          },
    })
}); 