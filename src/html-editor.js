(function($){
    
    function HtmlEditor(){
        this.$contents = $('#contents');
    };
    
    HtmlEditor.prototype.initEditor = function(app){
        this.$contents.summernote({
            height: 300,
            oninit : app.autoLoad.bind(app),
            onkeyup : app.autoSave.bind(app),
        });
    };
    
    HtmlEditor.prototype.setCode = function(code){
        this.$contents.code(code);
    };
    
    HtmlEditor.prototype.getCode = function(){
        return this.$contents.code();  
    };
    
    HtmlEditor.prototype.getEditorName = function(){
        return "summernote";  
    };
  
    
    window.HtmlEditor = HtmlEditor;

})(jQuery);