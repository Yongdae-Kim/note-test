(function($){
    
    function MakrDownEditor(){
        this.editor = this.initEditor();
        this.content = this.editor.getFiles().epiceditor.content;
    };
    
    MakrDownEditor.prototype.initEditor = function(){
        var epiceditor = new EpicEditor().load();
        $('#epiceditor').height(350);
        epiceditor.reflow();
        return epiceditor;
    };
    
    MakrDownEditor.prototype.setCode = function(code){
    };
    
    MakrDownEditor.prototype.getCode = function(){
        return this.content;  
    };
    
    MakrDownEditor.prototype.getEditorName = function(){
        return "epiceditor";  
    };
    
    window.MakrDownEditor = MakrDownEditor;

})(jQuery);

