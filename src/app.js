(function($){
    
    function App(editor){
        this.editor = editor;
        this.selectedKey = 'mynote';
        this.editor.initEditor(this);
    };
    
    App.prototype.autoSave = function(event){
        window.localStorage.setItem(this.selectedKey, this.editor.getCode());
    };
    
    App.prototype.autoLoad = function(event){
        this.editor.setCode(window.localStorage.getItem(this.selectedKey));
    };
    
    window.App = App;

})(jQuery);