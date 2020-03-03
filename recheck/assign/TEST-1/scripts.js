//employee list
   $(document).ready(function () {
    
    var employee_data = [];
    $.ajax({
      url : "./employee_data.json",
      method : "GET",
      datatype : "employee_data",
      success: function(employee_data) {

   
    var tr;
    for (var i = 0; i < employee_data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" +  [i+1]+ "</td>");
      tr.append("<td>" + employee_data[i].name + "</td>");
      tr.append("<td>" + employee_data[i].email + "</td>");
      tr.append("<td>" + employee_data[i].country + "</td>");
      tr.append("<td>" + employee_data[i].salary + "</td>");
      tr.append("<td>" + "<button class='btn btn-danger' >Delete</button>" + "</td>");
      $('tbody').first().append(tr);
    }
  }  
  });
});