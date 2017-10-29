/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
$$('.uib_w_3').on('click', function () {
    myApp.confirm('Are you sure?', 'Custom Title', function () {
        navigator.app.exitApp();
    });
});
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
