(function($){
    
    function EditorChanger(selectVal){
        this.selectVal = selectVal;
        
        this.$epiceditor = $("#epiceditor");
        this.$summernote = $('#contents');
        this.$new = $("#new");
        this.$save = $("#save");
    };
    
    EditorChanger.prototype.makeEditor = function(){
        if(this.selectVal === "html"){            
            this.removeMarkDownEditor();
            this.makeHtmlEditor();
        }else if(this.selectVal === "mark-down"){ 
            this.removeHtmlEditor();
            this.makeMarkDownEditor();
        }
    };
    
    EditorChanger.prototype.removeMarkDownEditor = function(){
        this.$epiceditor.html("");
    };
    
    EditorChanger.prototype.makeHtmlEditor = function(){
        this.$epiceditor.attr("id","contents");
        new App(new HtmlEditor());
        
        this.$new.show();
    };
    
    EditorChanger.prototype.removeHtmlEditor = function(){
        this.$summernote.destroy();  
    };
    
    EditorChanger.prototype.makeMarkDownEditor = function(){
        this.$summernote.attr("id","epiceditor");
        new MakrDownEditor();
        
        this.$new.hide();
        //i don't know epiceditor text control
    };
    
    window.EditorChanger = EditorChanger;
    
})(jQuery);