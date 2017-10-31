

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
/*Open Menu */
     
$('#in').on('click', function () {
   
    myApp.showPreloader('Tunggu Sebentar ...');
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("menu/index.html");
    }, 800);
   
});    
     
     
     
     
     
/*Exit Modals */
     
$('#exit').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Konfirmasi Keluar</center>',
    text: '<center>Apakah Anda Yakin ?</center>',
    afterText:  '<center><img src="images/exit.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Tidak'
      },
      {
        text: 'Ya !',
        bold: true,
        onClick: function () {
          navigator.app.exitApp();
        }
      },
    ]
  });
});
    

        /* graphic button  #location */
    $(document).on("click", "#location", function(evt)
    {
         /*global activate_page */
         activate_page("#lokasi"); 
         return false;
    });
    
        /* tab  Kampus A - UNJ */
    
        /* button  Button */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
