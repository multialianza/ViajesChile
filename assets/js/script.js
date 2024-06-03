// Este código asegura que el script se ejecute después de que el documento HTML esté completamente cargado
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const targetId = $(this).attr("href").slice(1);
    const targetElement = $("#" + targetId);

    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top,
        },
        300 // Duración de la animación en milisegundos
      );
    }
  });
  //Jquery para TOOLSTIPS
  $('[data-bs-toggle="tooltip"]').tooltip();
});
