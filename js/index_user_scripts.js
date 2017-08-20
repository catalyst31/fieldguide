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
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_page */
         activate_page("#suku"); 
         return false;
    });
    
        /* graphic button  Informasi */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* graphic button  Petunjuk */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#petunjuk"); 
         return false;
    });
    
        /* graphic button  Tentang Kami */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#about"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
