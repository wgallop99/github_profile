
$(document).ready(function() {
  var homePage = {

      init: function() {
        homePage.initStyling();
        homePage.initEvents();
      },
      initStyling: function() {

        homePage.renderProfile($(".profile_container"));
        homePage.renderRepos($(".tab2"));
        homePage.renderActivity($(".tab3"));

      },
      initEvents: function() {
        $("#tab2 a").click(function(){
          event.preventDefault();
          $("#events").css("display", "none");
          $("#repos").css("display", "block");
        });

        $("#tab3 a").click(function(){
          event.preventDefault();
          $("#events").css("display", "inline-block");
          $("#repos").css("display", "none");

        });

        $("header input").on("click", function(){
          $("#left_nav li a").hide('slow');
          $(this).css('width', '300px');
        });

        $(".container").on("click", function(){
          $('header input').css('width', '168px');
        });

        //$("#repo_tab").on("click", homePage.renderRepos);

        //$("#activity_tab").on("click", homePage.renderActivity);


      },
      render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);

      },
      renderProfile: function($target) {
        homePage.render($("#profile_template").html(), prof_data, $target);

      },

      renderRepos: function($target) {
        homePage.render($("#repo_template").html(), repo_data, $('#repos'));

      },

      renderActivity: function($target) {
        homePage.render($("#activity_template").html(), activity_data, $('#events'));
      }

  };

homePage.init();





});


//recreate git hub profile ()
//api.github.com/users/calweb past as profile data
//followers data
//public activities tab under events url
//exclude contributions
//no find a repository.. search ... no bars behind each log event
//no new button
