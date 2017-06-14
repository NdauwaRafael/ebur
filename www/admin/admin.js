$.getJSON('http://localhost/Ebursary/admin/details.php', { get_param: 'value' }, function(data) {
    $.each(data, function(index, element) {
       var id = element.id;
       var name = element.name;
       var email = element.email;



       /*Profile page details area*/
$("#admin_menu_home").html(name);
$("#admin_menu_name").html(name);
$("#admin_profile_email").html(email);
$("#admin_profile_name").html(name);


     })

   })
