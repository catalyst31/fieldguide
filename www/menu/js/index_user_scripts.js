/*jshint browser:true */

var myApp = new Framework7();
 
var $$ = Dom7;
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     
     
$$('#btnmenu').on('click', function () {
    var buttons1 = [
        {
            text: 'Menu',
            label: true
        },
        {
            text: 'Cari Suku Pohon',
            bold: true,
            onClick: function () {
             activate_page("#suku"); 
         return false;
            }
        },
        {
            text: 'Informasi',
        },
        {
            text: 'Petunjuk Aplikasi',
        },
        {
            text: 'Tentang Aplikasi',
        }
    ];
    var buttons2 = [
        {
            text: '<center><img src="images/petunjuk.png" width="15%" height="35px" style="display:block"></center>',
            color: 'red'
        },
        {
            text: 'Cancel',
            color: 'red'
        }
    ];
    var groups = [buttons1, buttons2];
    myApp.actions(groups);
});
    
        /* button  Back */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
