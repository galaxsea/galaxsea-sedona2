var link = document.querySelector(".search-hotel-button");
      
      var popup = document.querySelector(".search-hotel-modal");
      
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("search-hotel-modal-show");
      });