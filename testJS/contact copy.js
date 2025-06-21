$(function(){
    var data=localStorage.getItem("enquiryList");
    var enquiryList=data===null ? [] :JSON.parse(data);
    $('#submit').on("submit",function(event){
        event.preventDefault();
    //     var newEnquiry={
    //         name:$("#name").val(),
    //         email:$("#email").val(),
    //         mobile:$("#number").val(),
    //         city:$("#city").val(),
    //         comment:$("#comment").val(),
    //     }
    //     console.log(newEnquiry);
    //     enquiryList.push(newEnquiry);
    //     localStorage.setItem("enquiryList",JSON.stringify(enquiryList));
    //     $('#submit')[0].reset();   
    // 

    var data=$(this).serializeArray();
    var newEnquiry={};
    data.forEach(function(input,index) {
    newEnquiry[input.name]=input.value;     
    });
    console.log(newEnquiry);
    enquiryList.push(newEnquiry);
    localStorage.setItem("enquiryList",JSON.stringify(enquiryList));
    $('#submit')[0].reset();  
    });
});