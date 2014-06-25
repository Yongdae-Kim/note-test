(function($){
    
    function EditorFactory(){
        
    };
    
    EditorFactory.prototype.getCurrentEditor = function(){
        var $currentEditorID = $('.editor').attr('id');
        
        if($currentEditorID === "contents")   
            return new HtmlEditor();
        
        else if($currentEditorID === "epiceditor")
           return new MakrDownEditor();
    };
    
    window.EditorFactory = EditorFactory;
    
})(jQuery);