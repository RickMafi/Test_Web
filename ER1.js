$(document).ready(function(){
  
    $(".fa-search").click(function(){
      $(".wrap, .input").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });
  
  var containers;
  function initDrawers() {
    // Get the containing elements
    containers = document.querySelectorAll(".container");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
  }
  

  