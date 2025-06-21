// amaron every need section
// creating the list of items present under the un list.
var amaronForEveryNeed = [
  "Two Wheeler",
  "Three-Wheeler",
  "Passanger-Veehicle",
  "Commercial-Vehicle",
  "Farm-Vehicle",
  "Invrtor-battery",
  "E-Vehicles",
  "other Application",
];
// registering the id of ul and storing it in the var.
var amaronNeed = document.getElementById("amaron_need");
// creating a function to bind the code
function amaron_need_section() {
  // itrating the list one by one using the .map and putting the value as per the index in the var data
  // at the place of ${}, and then returning the data .
  var newArray = amaronForEveryNeed.map(function (value, index) {
    var data = `<li>
                <img src="./images/Two-Wheeler.png" alt="Two-Wheeler" />
                <span>${value}</span>
             </li>`;
    return data;
  });
  console.log(newArray);
  // var newString = newArray.join("");
  var newString = newArray.join("");
  amaronNeed.innerHTML = newString;
}
// calling the function
amaron_need_section();

// footer section
// about section
// creating the list of items present under the un list.
var about = [
  "Amara Raja",
  "Management",
  "Aftermarket",
  "OEM",
  "International Operation",
  "manufacturing",
];
// registering the id of ul and storing it in the var.
var aboutSection = document.getElementById("about_section");
// itrating the list one by one using the .map and putting the value as per the index in the var data
// at the place of ${}, and then returning the data .
function about_section_text() {
  var newArray = about.map(function (value, index) {
    var data = `<li>${value}</li>`;
    return data;
  });
  console.log(newArray);
  var newString = newArray.join("");
  aboutSection.innerHTML = newString;
}
about_section_text();

// footer Product & solution setcion
// creating the list of items present under the un list.
var product = [
  "Two-Wheeler",
  "Three-Wheeler",
  "Passanger Veehicle",
  "Commercial-Vehicle",
  "Farm-Vehicle",
  "Earth Moving Equipment",
  "Genset",
  "E-Rickshaw",
  "Inverter & Batteries",
];
// registering the id of ul and storing it in the var.
var productSection = document.getElementById("product_section");
// itrating the list one by one using the .map and putting the value as per the index in the var data
// at the place of ${}, and then returning the data .
function product_section_text() {
  var newArray = product.map(function (value, index) {
    var data = `<li>${value}</li>`;
    return data;
  });
  console.log(newArray);
  var newString = newArray.join("");
  productSection.innerHTML = newString;
}
product_section_text();

// footer services section
// creating the list of items present under the un list.
var service = [
  "Amcare",
  "Tips for buying batteries",
  "Battery safety guidelines",
  "Terminology",
  "FAQs",
  "Battery Recycle",
];
// registering the id of ul and storing it in the var.
var serviceSection = document.getElementById("service_section");
// itrating the list one by one using the .map and putting the value as per the index in the var data
// at the place of ${}, and then returning the data .
function service_section_text() {
  var newArray = service.map(function (value, index) {
    var data = `<li>${value}</li>`;
    return data;
  });
  console.log(newArray);
  var newString = newArray.join("");
  serviceSection.innerHTML = newString;
}
service_section_text();

// footer experience section
// creating the list of items present under the un list.

var experience = ["media", "Ad Gallery", "fun Facts", "Amaron Logo", "Events"];
// registering the id of ul and storing it in the var.
var experienceSection = document.getElementById("experience_section");
// itrating the list one by one using the .map and putting the value as per the index in the var data
// at the place of ${}, and then returning the data .
function experience_section_text() {
  var newArray = experience.map(function (value, index) {
    var data = `<li>${value}</li>`;
    return data;
  });
  console.log(newArray);
  var newString = newArray.join("");
  experienceSection.innerHTML = newString;
}
experience_section_text();

// footer other section
// creating the list of items present under the un list.
var other = [
  "Contact",
  "Blogs",
  "Terms & Conditions",
  "Privacy Policy",
  "online Order terms and condition",
  "Sitemap",
];
// registering the id of ul and storing it in the var.
var otherSection = document.getElementById("other_section");
// itrating the list one by one using the .map and putting the value as per the index in the var data
// at the place of ${}, and then returning the data .
function other_section_text() {
  var newArray = other.map(function (value, index) {
    var data = `<li>${value}</li>`;
    return data;
  });
  console.log(newArray);
  var newString = newArray.join("");
  otherSection.innerHTML = newString;
}
other_section_text();



