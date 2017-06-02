$(document).ready(function() {
  // API to hit is https://lit-fortress-6467.herokuapp.com/object

  $('#clear').click(function() {
    $("#album-selection-box").children().html('');
  })

  $('.option-buttons').mouseup(function() {
    $(event.target).blur();
  })


  $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      type: "GET"
    })
    .done(function(data) {
      data.results.sort(function() {
        return 0.5 - Math.random();
      }).slice(0, 3).forEach(function(covers) {
        $('.photo-box').append(`<img src="${covers.cover_art}">`)
      })
    });


  $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      type: "GET"
    })
    .done(function(data) {
      data.results.forEach(function(covers) {

        $('.album-container').append(`<img class="album-icon" src="${covers.cover_art}">`)

      })
      $('.album-icon').click(function() {
        var goldenTicket = $(event.target).attr('src');
        var unicorn = data.results.find(function(needle) {
          return needle.cover_art === goldenTicket
        })

        console.log(unicorn)
        $('#display-box').html(`<span class="appended">Add tracks from:<br>${unicorn.artist}: ${unicorn.title}</span><br>
        <img class="display-icon" src="${unicorn.cover_art}">`)
      })

    });



  // https://lit-fortress-6467.herokuapp.com/post
  $('#submit').click(function() {
    $.ajax({
        url: "https://lit-fortress-6467.herokuapp.com/post",
        type: "POST",
        data: $('album-selection-box').children()
      })
      .done(function(info) {
        alert("Nice Selection!")
      })
    $("#album-selection-box").html('');
  })




});
