

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
  var modal = myApp.modal({
    title: '<center>Informasi</center>',
    text: '<center>Apakah ingin melihat panduan terlebih dahulu ?</center>',
    afterText:  '<center><img src="images/in.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Tidak',
          onClick: function () {
          window.open("menu/index.html");
        }
      },
      {
        text: 'Ya',
        bold: true,
        onClick: function () {
          activate_page("#info");
        }
      },
    ]
  });
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
    
    
     
    
        /* button  Back */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  #location */
    
    
        /* graphic button  #location */
    
    
        /* button  Back */
    
    
        /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
window.open("menu/index.html");
    });
    
        /* graphic button  #location */
    $(document).on("click", "#location", function(evt)
    {
         /*global activate_page */
         activate_page("#lokasi"); 
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
