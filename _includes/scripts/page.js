/*(function () {

})();*/

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetID = this.getAttribute("href");

        // Stop standaard gedrag
        e.preventDefault();

        const targetElement = document.querySelector(targetID);
        if (targetElement) {
          // Soepel scrollen
          targetElement.scrollIntoView({
            behavior: "smooth"
          });

          // Optioneel: Verberg de hash in de URL
          history.replaceState(null, null, ' ');
        }
      });
    });
  });