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
            text: 'Tentang Kami',
            onClick: function(){
                activate_page("#about");
                return false;
            }
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

$$('#list-data2').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data2.html");
    }, 500);
});
     
$$('#list-data3').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data3.html");
    }, 500);
});   
$$('#list-data4').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data4.html");
    }, 500);
});
$$('#list-data5').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data5.html");
    }, 500);
});
$$('#list-data6').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data6.html");
    }, 500);
});
$$('#list-data7').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data7.html");
    }, 500);
});
$$('#list-data8').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data8.html");
    }, 500);
});
$$('#list-data9').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data9.html");
    }, 500);
});
$$('#list-data10').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data10.html");
    }, 500);
});
$$('#list-data11').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data11.html");
    }, 500);
});
$$('#list-data12').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data12.html");
    }, 500);
});
$$('#list-data13').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data13.html");
    }, 500);
});
$$('#list-data14').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data14.html");
    }, 500);
});
$$('#list-data15').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data15.html");
    }, 500);
});
$$('#list-data16').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data16.html");
    }, 500);
});
$$('#list-data17').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data17.html");
    }, 500);
});
     
     

/*List Action*/
    
        /* button  #back4 */
    $(document).on("click", "#back4", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
    
        /* graphic button  Tunggal */
    
       
        /* graphic button  #tunggal */
    
        /* graphic button  #btntunggal */
    $(document).on("click", "#btntunggal", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#menu"); 
         return false;
    });
    
        /* graphic button  #btnmajemuk */
    $(document).on("click", "#btnmajemuk", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
