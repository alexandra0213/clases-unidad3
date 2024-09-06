
function getPicture(){
    $.ajax({
        type: "GET",
        url: "https://picsum.photos/id/1/info",
        dataType: "json",
        async: true,
        success: function (data) {
          renderPicture(data);
        },
      });}

      function renderPicture(data){
        console.log(data)
      }

$(document).ready(function(){
    getPicture();

})