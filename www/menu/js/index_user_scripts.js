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
     
$('#list-data20').on('click', function () {
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
});
     
$$('#list-data36').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data36.html");
    }, 500);
});
     
$$('#list-data37').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data37.html");
    }, 500);
});
     
$$('#list-data38').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data38.html");
    }, 500);
});
     
$$('#list-data39').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data39.html");
    }, 500);
});
     
$$('#list-data40').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data40.html");
    }, 500);
});
     
$$('#list-data41').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data41.html");
    }, 500);
});
     
$$('#list-data42').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data42.html");
    }, 500);
});
     
$$('#list-data43').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data43.html");
    }, 500);
});
     
$$('#list-data44').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data44.html");
    }, 500);
});
     
$$('#list-data45').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data45.html");
    }, 500);
});
     
$$('#list-data46').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data46.html");
    }, 500);
});
     
$$('#list-data47').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data47.html");
    }, 500);
});
     
$$('#list-data48').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data48.html");
    }, 500);
});
     
$$('#list-data49').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data49.html");
    }, 500);
});
     
$$('#list-data50').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data50.html");
    }, 500);
}); 
     
$$('#list-data51').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data51.html");
    }, 500);
});
        
$$('#list-data52').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data52.html");
    }, 500);
});
        
$$('#list-data53').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data53.html");
    }, 500);
});
        
$$('#list-data54').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data54.html");
    }, 500);
});  
     
$$('#list-data55').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data55.html");
    }, 500);
});
     
$$('#list-data56').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data56.html");
    }, 500);
});
     
$$('#list-data57').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data57.html");
    }, 500);
});
     
$$('#list-data58').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data58.html");
    }, 500);
});
     
$$('#list-data59').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data59.html");
    }, 500);
});
     
$$('#list-data60').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data60.html");
    }, 500);
});
     
$$('#list-data61').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data61.html");
    }, 500);
});
     
$$('#list-data62').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data62.html");
    }, 500);
});
     
$$('#list-data63').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data63.html");
    }, 500);
});
     
$$('#list-data64').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data64.html");
    }, 500);
});
     
$$('#list-data65').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data65.html");
    }, 500);
});
     
$$('#list-data66').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data66.html");
    }, 500);
});
     
$$('#list-data67').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        window.open("data/data67.html");
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
    
        /* graphic button  #btn-menyirip */
    
    
        /* graphic button  #btn-menyirip */
    $(document).on("click", "#btn-menyirip", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #back19 */
    $(document).on("click", "#back19", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_stdaun"); 
         return false;
    });
    
        /* graphic button  #btn-menjari */
    $(document).on("click", "#btn-menjari", function(evt)
    {
         /*global activate_page */
         activate_page("#pstd_menjari"); 
         return false;
    });
    
        /* button  #back20 */
    $(document).on("click", "#back20", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_stdaun"); 
         return false;
    });
    
        /* graphic button  #btn-menyirip */
    $(document).on("click", "#btn-menyirip", function(evt)
    {
         /*global activate_page */
         activate_page("#pstd_menyirip"); 
         return false;
    });
     
$('#btn-melengkung').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});    
     
         
$('#btn-sejajar').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});    
             
$('#btn-membulat').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});    
        
             
$('#btn-rompang').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});    
        
             
$('#btn-gundul').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});     
        
             
$('#btn-basrompang').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Pemberitahuan</center>',
    text: '<center>Maaf, sementara belum Ada Pohon dengan Jenis tersebut</center>',
    afterText:  '<center><img src="images/warn.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Kembali'
      }
      
    ]
  });
});    
     
     
     
    
        /* graphic button  #btn-meruncing */
    $(document).on("click", "#btn-meruncing", function(evt)
    {
         /*global activate_page */
         activate_page("#pud_meruncing"); 
         return false;
    });
    
        /* button  #back21 */
    $(document).on("click", "#back21", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_udaun"); 
         return false;
    });
    
        /* button  #back22 */
    $(document).on("click", "#back22", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_udaun"); 
         return false;
    });
    
        /* graphic button  #btn-tumpul */
    $(document).on("click", "#btn-tumpul", function(evt)
    {
         /*global activate_page */
         activate_page("#pud_tumpul"); 
         return false;
    });
    
        /* graphic button  #btn-runcing */
    $(document).on("click", "#btn-runcing", function(evt)
    {
         /*global activate_page */
         activate_page("#pud_runcing"); 
         return false;
    });
    
        /* button  #back23 */
    $(document).on("click", "#back23", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_udaun"); 
         return false;
    });
    
        /* graphic button  #btn-berkerut */
    $(document).on("click", "#btn-berkerut", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_berkerut"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_113", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-kasap */
    $(document).on("click", "#btn-kasap", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_kasap"); 
         return false;
    });
    
        /* button  #back25 */
    $(document).on("click", "#back25", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-licins */
    $(document).on("click", "#btn-licins", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_licins"); 
         return false;
    });
    
        /* button  #back26 */
    
    
        /* button  #back26 */
    
    
        /* button  #back26 */
    $(document).on("click", "#back26", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* button  #back27 */
    $(document).on("click", "#back27", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-bkasar */
    $(document).on("click", "#btn-bkasar", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_bkasar"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_121", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-blilin */
    $(document).on("click", "#btn-blilin", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_blilin"); 
         return false;
    });
    
        /* button  #back29 */
    $(document).on("click", "#back29", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-bhalus */
    $(document).on("click", "#btn-bhalus", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_bhalus"); 
         return false;
    });
    
        /* graphic button  #btn-licinm */
    $(document).on("click", "#btn-licinm", function(evt)
    {
         /*global activate_page */
         activate_page("#ppd_licinm"); 
         return false;
    });
    
        /* button  #back30 */
    $(document).on("click", "#back30", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_pdaun"); 
         return false;
    });
    
        /* graphic button  #btn-benlanset */
    $(document).on("click", "#btn-benlanset", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_lanset"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_127", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-bensegitiga */
    $(document).on("click", "#btn-bensegitiga", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_segitiga"); 
         return false;
    });
    
        /* button  #back32 */
    $(document).on("click", "#back32", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* button  #back33 */
    
    
        /* button  #back33 */
    $(document).on("click", "#back33", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-benellips */
    $(document).on("click", "#btn-benellips", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_ellips"); 
         return false;
    });
    
        /* button  #back34 */
    $(document).on("click", "#back34", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-benlsungsang */
    $(document).on("click", "#btn-benlsungsang", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_lsungsang"); 
         return false;
    });
    
        /* button  #back35 */
    $(document).on("click", "#back35", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_137", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-bentsungsang */
    $(document).on("click", "#btn-bentsungsang", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_tsungsang"); 
         return false;
    });
    
        /* graphic button  #btn-benpandurata */
    $(document).on("click", "#btn-benpandurata", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_pandurata"); 
         return false;
    });
    
        /* button  #back37 */
    $(document).on("click", "#back37", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-benbtelur */
    $(document).on("click", "#btn-benbtelur", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_btelur"); 
         return false;
    });
    
        /* graphic button  #btn-benoval */
    $(document).on("click", "#btn-benoval", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_oval"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_141", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* button  #back39 */
    $(document).on("click", "#back39", function(evt)
    {
         /*global activate_page */
         activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-benlonjong */
    $(document).on("click", "#btn-benlonjong", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_lonjong"); 
         return false;
    });
    
        /* graphic button  #btn-benbhati */
    $(document).on("click", "#btn-benbhati", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_bhati"); 
         return false;
    });
    
        /* button  #back40 */
    $(document).on("click", "#back40", function(evt)
    {
        activate_page("#tgl_bendaun"); 
         return false;
    });
     
     /* button  #back41 */
    $(document).on("click", "#Back41", function(evt)
    {
        activate_page("#tgl_bendaun"); 
         return false;
    });
    
        /* graphic button  #btn-benhterbralik */
    $(document).on("click", "#btn-benhterbralik", function(evt)
    {
         /*global activate_page */
         activate_page("#pbend_hterbalik"); 
         return false;
    });
    
        /* graphic button  #btn-basmeruncing */
    $(document).on("click", "#btn-basmeruncing", function(evt)
    {
         /*global activate_page */
         activate_page("#pbasd_meruncing"); 
         return false;
    });
     
     
     /* button  #back42 */
    $(document).on("click", "#back42", function(evt)
    {
        activate_page("#tgl_basdaun"); 
         return false;
    });
     
     /* button  #back43 */
    $(document).on("click", "#back43", function(evt)
    {
        activate_page("#tgl_basdaun"); 
         return false;
    });
     
     /* button  #back44 */
    $(document).on("click", "#back44", function(evt)
    {
        activate_page("#tgl_basdaun"); 
         return false;
    });
     
     /* button  #back45 */
    $(document).on("click", "#back45", function(evt)
    {
        activate_page("#tgl_basdaun"); 
         return false;
    });
     
     /* button  #back46 */
    $(document).on("click", "#back46", function(evt)
    {
        activate_page("#tgl_basdaun"); 
         return false;
    });
    
        /* graphic button  #btn-basmembulat */
    $(document).on("click", "#btn-basmembulat", function(evt)
    {
         /*global activate_page */
         activate_page("#pbasd_membulat"); 
         return false;
    });
    
        /* graphic button  #btn-basberlekuk */
    $(document).on("click", "#btn-basberlekuk", function(evt)
    {
         /*global activate_page */
         activate_page("#pbasd_berlekuk"); 
         return false;
    });
    
        /* graphic button  #btn-basruncing */
    $(document).on("click", "#btn-basruncing", function(evt)
    {
         /*global activate_page */
         activate_page("#pbasd_runcing"); 
         return false;
    });
    
        /* graphic button  #btn-bastumpul */
    $(document).on("click", "#btn-bastumpul", function(evt)
    {
         /*global activate_page */
         activate_page("#pbasd_tumpul"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();