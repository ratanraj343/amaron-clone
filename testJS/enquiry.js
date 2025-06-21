$(function(){
    var data=localStorage.getItem("enquiryList");
    var enquiryList=data===null ? [] :JSON.parse(data);

//    console.log(enquiryList);

$(document).on("click",".remove",function(){
   // console.log("its working");
   var index=$(this).data("id");
   swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
         enquiryList.splice(index,1);
         localStorage.setItem("enquiryList",JSON.stringify(enquiryList))
         printList();
        swal("Deleted Successfully ", {
          icon: "success",
        });
      } else {
        swal("not deleted");
      }
    });
});
   printList();
   function printList() {
    var list=enquiryList.map(function(value,index){
       return `<tr>
       <th scope="row">${index + 1}</th>
       <td>${value.name}</td>
       <td>${value.email}</td>
       <td>${value.number}</td>
       <td>${value.city}</td> 
       <td>${value.comment}</td>
       <td><button class="remove" data-id="${index}">Btn</button></td>
       </tr>`;
    }).join();
   //  console.log(list);
    $("#user-list-body").html(list);  
   }
});