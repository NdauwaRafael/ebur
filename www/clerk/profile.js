$.getJSON('http://localhost/Ebursary/clerk/details.php', { get_param: 'value' }, function(data) {
  $("#bursary").html(data);
    $.each(data, function(index, element) {
       var id = element.id;
       var firstname = element.firstname;
       var lastname = element.lastname;
       var gender = element.gender;
       var idno = element.idno;
       var email = element.email;
       var phone = element.phone;
       var area = element.area;
       var role = element.role;

       $("#clerk_name").html(firstname +' '+ lastname);
       $("#profile_title").text(firstname +' '+ lastname+' Profile Review');

       /*Profile page details area*/
$("#profile_name").html(firstname +' '+ lastname);
$("#profile_gender").html(gender);
$("#profile_idno").html(idno);
$("#profile_email").html(email);
$("#profile_phone").html(phone);
$("#profile_area").html(area);
$("#profile_role").html(role);    

     })

   })
