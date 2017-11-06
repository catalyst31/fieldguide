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
            text: '<span style="color:red;">Batal</span>',
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
$$('#list-data18').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data18.html");
    }, 500);
});
$$('#list-data19').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data19.html");
    }, 500);
});
$$('#list-data20').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data20.html");
    }, 500);
});
$$('#list-data21').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data21.html");
    }, 500);
});
$$('#list-data22').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data22.html");
    }, 500);
});
$$('#list-data23').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data23.html");
    }, 500);
});
$$('#list-data24').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data24.html");
    }, 500);
});
$$('#list-data25').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data25.html");
    }, 500);
});
$$('#list-data26').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data26.html");
    }, 500);
});
$$('#list-data27').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data27.html");
    }, 500);
});
$$('#list-data28').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data28.html");
    }, 500);
});
$$('#list-data29').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data29.html");
    }, 500);
});
$$('#list-data30').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data30.html");
    }, 500);
});
$$('#list-data31').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data31.html");
    }, 500);
});
$$('#list-data32').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data32.html");
    }, 500);
});
$$('#list-data33').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data33.html");
    }, 500);
});
$$('#list-data34').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data34.html");
    }, 500);
});
$$('#list-data35').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data35.html");
    }, 500);
$$('#list-data36').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data36.html");
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
    
        /* graphic button  #pinnate */
    
    
        /* graphic button  #pinnate */
    $(document).on("click", "#pinnate", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_pinnate"); 
         return false;
    });
    
        /* graphic button  #palmate */
    $(document).on("click", "#palmate", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_palmate"); 
         return false;
    });
    
        /* graphic button  #tripinnate */
    $(document).on("click", "#tripinnate", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_tripinnate"); 
         return false;
    });
    
        /* button  #back7 */
    $(document).on("click", "#back7", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* button  #back8 */
    $(document).on("click", "#back8", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* button  #back9 */
    $(document).on("click", "#back9", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* graphic button  #biternate */
    $(document).on("click", "#biternate", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_biternate"); 
         return false;
    });
    
        /* button  #back10 */
    $(document).on("click", "#back10", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* graphic button  #tereduksi */
    $(document).on("click", "#tereduksi", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_tereduksi"); 
         return false;
    });
    
        /* button  #back11 */
    $(document).on("click", "#back11", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* button  #back12 */
    $(document).on("click", "#back12", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* graphic button  #bipinnate */
    $(document).on("click", "#bipinnate", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_bipinnate"); 
         return false;
    });
    
        /* graphic button  #berkarang */
    $(document).on("click", "#berkarang", function(evt)
    {
         /*global activate_page */
         activate_page("#mjk_berkarang"); 
         return false;
    });
    
        /* button  #back13 */
    $(document).on("click", "#back13", function(evt)
    {
         /*global activate_page */
         activate_page("#majemuk"); 
         return false;
    });
    
        /* button  #back14 */
    $(document).on("click", "#back14", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* graphic button  #pdaun */
    $(document).on("click", "#pdaun", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* button  #back15 */
    $(document).on("click", "#back15", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* graphic button  #stdaun */
    $(document).on("click", "#stdaun", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_stdaun"); 
         return false;
    });
    
        /* button  #back16 */
    $(document).on("click", "#back16", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* graphic button  #udaun */
    $(document).on("click", "#udaun", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_udaun"); 
         return false;
    });
    
        /* button  #back17 */
    $(document).on("click", "#back17", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* graphic button  #basdaun */
    $(document).on("click", "#basdaun", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_basdaun"); 
         return false;
    });
    
        /* button  #back18 */
    $(document).on("click", "#back18", function(evt)
    {
         /*global activate_page */
         activate_page("#tunggal"); 
         return false;
    });
    
        /* graphic button  #bendaun */
    $(document).on("click", "#bendaun", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();