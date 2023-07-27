let emptyScreen = '';
let skillSet = '<ul><li>Java and Android Development</li><li>Networking - Security and Design</li><li>Hardware - Builds and Repair</li><li>Troubleshooting - All levels</li><li>Web Design - Personal, Business, Blogs, Newsletters</li><li>Unreal Engine, Unity, and Godot</li><li>Linux and UNIX</li><li>Python</li></ul>';
let socMeds = '<a href="https://www.linkedin.com/in/ashleynicoleking/" target="_new"><i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</a><a href="https://www.facebook.com/ashley.n.king.35" target="_new"><i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;Facebook</a><a href="https://twitter.com/noktelfa" target="_new"><i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;Twitter</a><a href="https://www.youtube.com/@noktelfa" target="_new"><i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;YouTube</a>';

$(document).ready(function () {
  $("#content").html(emptyScreen);
  $("#skills").click(function (event) {
    $("#content").html(skillSet);
  });
  $("#projects").click(function (event) {
    $.getJSON('https://api.github.com/users/noktelfa/repos', function (data) {
      var output = '<ul>';
      $.each(data, function (key, value) {
        output += '<li><a href="' + value.html_url + '" target="_new">' + value.name + '</a></li>';
      });
      output += '</ul>'
      $('#content').html(output);
    });
  });
  $("#socials").click(function (event) {
    $("#content").html(socMeds);
  });
  $("i").hover(function () {
    $(this).addClass("fa-xl");
   }, function () {
     $(this).removeClass("fa-xl");
   });
});