(function($){
    
    function Dialoger(){

    };
    
    Dialoger.prototype.showAlertDialog = function(comment){
        alert(comment); 
    };
    
    Dialoger.prototype.showPromptDialog = function(comment){
        return prompt(comment);
    };
    
    Dialoger.prototype.showConfirmDialog = function(comment){
        if(confirm(comment))
            return true;
        else
            return false;
    };
    
    window.Dialoger = Dialoger;

})(jQuery);