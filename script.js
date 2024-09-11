
  

     const clickableElements = document.querySelectorAll('.s');
     clickableElements.forEach(function(element) {
         element.addEventListener('click', function() {
             if (window.confirm("Are you sure buy?")) {
                 alert("You confirmed!");
             } else {
                 alert(" canceled!");
             }
         });
     });