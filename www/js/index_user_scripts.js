/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
        /* button  Tidak */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_5").modal("toggle");  
         return false;
    });
    
        /* button  Ya */
    $(document).on("click", ".uib_w_7", function(evt)
    {
        /* your code goes here */ 
        navigator.app.exitApp();
         return false;
    });

    
        /* graphic button  #exit */
    $(document).on("click", "#exit", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_5").modal("toggle");  
         return false;
    });
    
        /* graphic button  #masuk */
    $(document).on("click", "#masuk", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  Cari Suku */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_page */
         activate_page("#suku"); 
         return false;
    });
    
        /* graphic button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  #backinfo */
    $(document).on("click", "#backinfo", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  #info */
    
    
        /* graphic button  #info */
    $(document).on("click", "#info", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* graphic button  #info1 */
    $(document).on("click", "#info1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* graphic button  .uib_w_25 */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  petunjuk1 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#petunjuk"); 
         return false;
    });
    
        /* graphic button  Tentang */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#about"); 
         return false;
    });
    
        /* graphic button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
    
    
        /* graphic button  Tentang Kami */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#about"); 
         return false;
    });
    
        /* graphic button  .uib_w_29 */
    
    
        /* graphic button  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* graphic button  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#petunjuk"); 
         return false;
    });
    
        /* graphic button  .uib_w_32 */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#about"); 
         return false;
    });
    
        /* graphic button  #klr */
    $(document).on("click", "#klr", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_5").modal("toggle");  
         return false;
    });
    
        /* graphic button  #msk */
    $(document).on("click", "#msk", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  #kmp */
    $(document).on("click", "#kmp", function(evt)
    {
         /*global activate_page */
         activate_page("#Lokasi"); 
         return false;
    });
    
        /* graphic button  .uib_w_45 */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  .uib_w_29 */
    
    
        /* graphic button  .uib_w_48 */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         /*global activate_page */ 
        activate_page("#hal1");
         return false;
    });
    
        /* graphic button  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_page */
         activate_page("#suku"); 
         return false;
    });
    
/* START LIST SEARCH ACTION */

    $(document).on("click", "#list-data1", function(evt)
    {
         /*global activate_page */
         activate_page("#data1"); 
         return false;
    });
     
    $(document).on("click", "#list-data2", function(evt)
    {
         /*global activate_page */
         activate_page("#data2"); 
         return false;
    });
     
    $(document).on("click", "#list-data3", function(evt)
    {
         /*global activate_page */
         activate_page("#data3"); 
         return false;
    });  
     
    $(document).on("click", "#list-data4", function(evt)
    {
         /*global activate_page */
         activate_page("#data4"); 
         return false;
    });
     
    $(document).on("click", "#list-data5", function(evt)
    {
         /*global activate_page */
         activate_page("#data5"); 
         return false;
    });
    $(document).on("click", "#list-data6", function(evt)
    {
         /*global activate_page */
         activate_page("#data6"); 
         return false;
    });    
    $(document).on("click", "#list-data7", function(evt)
    {
         /*global activate_page */
         activate_page("#data7"); 
         return false;
    });  
    $(document).on("click", "#list-data8", function(evt)
    {
         /*global activate_page */
         activate_page("#data8"); 
         return false;
    });    
    $(document).on("click", "#list-data9", function(evt)
    {
         /*global activate_page */
         activate_page("#data9"); 
         return false;
    });
         
    $(document).on("click", "#list-data10", function(evt)
    {
         /*global activate_page */
         activate_page("#data10"); 
         return false;
    });    
    $(document).on("click", "#list-data11", function(evt)
    {
         /*global activate_page */
         activate_page("#data11"); 
         return false;
    });
    $(document).on("click", "#list-data12", function(evt)
    {
         /*global activate_page */
         activate_page("#data12"); 
         return false;
    });
    $(document).on("click", "#list-data13", function(evt)
    {
         /*global activate_page */
         activate_page("#data13"); 
         return false;
    });
     
/* END LIST SEARCH ACTION */
/* END LIST SEARCH ACTION */
/* END LIST SEARCH ACTION */
/* END LIST SEARCH ACTION */
     
     
        /* graphic button  .uib_w_51 */
    $(document).on("click", ".uib_w_51", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_54 */
    $(document).on("click", ".uib_w_54", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_57 */
    $(document).on("click", ".uib_w_57", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_60 */
    $(document).on("click", ".uib_w_60", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_63 */
    $(document).on("click", ".uib_w_63", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_66 */
    $(document).on("click", ".uib_w_66", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_69 */
    $(document).on("click", ".uib_w_69", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_72 */
    $(document).on("click", ".uib_w_72", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_75 */
    $(document).on("click", ".uib_w_75", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_78 */
    $(document).on("click", ".uib_w_78", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_81 */
    $(document).on("click", ".uib_w_81", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  Button */
    $(document).on("click", ".uib_w_84", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
        /* graphic button  .uib_w_87 */
    
    
        /* graphic button  .uib_w_87 */
    $(document).on("click", ".uib_w_87", function(evt)
    {
         /*global activate_page */
         activate_page("#hal1"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

/*START BACK BUTTON ACTION ALL PAGE*/

document.addEventListener("backbutton",function(e){
        
         if($("#mainpage").is(":visible")){
             e.preventDefault();
             $(".uib_w_5").modal();
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#hal1").is(":visible")){
             e.preventDefault();
             activate_page("#mainpage");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#Lokasi").is(":visible")){
             e.preventDefault();
             activate_page("#mainpage");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#info").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#suku").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#about").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#petunjuk").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#data1").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#data2").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);

document.addEventListener("backbutton",function(e){
        
         if($("#data3").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data4").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data5").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data6").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data7").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data8").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data9").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data10").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data11").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data12").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
document.addEventListener("backbutton",function(e){
        
         if($("#data13").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
/*END BACK BUTTON ACTION ALL PAGE*/
