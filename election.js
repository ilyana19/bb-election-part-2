document.addEventListener("DOMContentLoaded", function() {
  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "json"
  }).done(function(responseData){
    var candidates = responseData.candidates;
    for (var i = 0; i < candidates.length; i++) {
      var li = $("<li>");
      li.html(candidates[i].name + ": " + candidates[i].votes + " votes");

      var form = $("<form>");
      form.attr({
        method: "POST",
        action: "https://bb-election-api.herokuapp.com/vote?id="
      });

      var input_hidden = $("<input>").attr({
        type: "hidden",
        name: "id",
        value: candidates[i].id
      });


      var submit_button = $("<input>").attr({
        class: "submit-button",
        type: "submit",
        value: "Vote"
      });

      form.append(input_hidden, submit_button)
      li.append(form);
      $(".candidates").append(li);
    }
  });
});
