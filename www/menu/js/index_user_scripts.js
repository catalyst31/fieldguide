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
            onClick: function () {
             activate_page("#suku"); 
         return false;
            }
        },
        {
            text: 'Informasi',
            onClick: function () {
                activate_page("#info");
            return false;
            }
        },
        {
            text: 'Petunjuk Aplikasi',
            onClick: function(){
                activate_page("#petunjuk");
                return false;
            }

        },
        {
            text: 'Tentang Aplikasi'
        }
    ];
    var buttons2 = [
        {
            text: 'Halaman Awal',
            color: 'red',
            onClick: function () {
             window.open("../index.html");
            }
        },
        {
            text: 'Batal',
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
    
        /* button  Back */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
    
        /* button  #back3 */
    $(document).on("click", "#back3", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
/*List Action*/
     
/* Data 1 */
$$('#list-data1').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data1.html");
    }, 500);
});
     
     

/*List Action*/
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
