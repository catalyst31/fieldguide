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
    
        /* graphic button  Cari Suku */
    
    
        /* graphic button  Informasi */
    
    
        /* graphic button  Petunjuk */
    
    
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
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_page */
         activate_page("#data1"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

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
        
         if($("#info").is(":visible")){
             e.preventDefault();
             activate_page("#hal1");
         }
        
     },false);
