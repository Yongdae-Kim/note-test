(function($){
    
    function NewNoteEvent(editor){
        this.editor = editor;
    };
    
    NewNoteEvent.prototype.showNewNote = function(){
        if(new Dialoger().showConfirmDialog("작성한 내용은 삭제됩니다. 계속 하시겠습니까?"))
            this.editorClear();
    };
    
    NewNoteEvent.prototype.editorClear = function(){
        this.editor.setCode("");
        this.localStorageClear();
    };
     
    NewNoteEvent.prototype.localStorageClear = function(){
        if(this.editor.getEditorName == "summernote")
            localStorage.clear();
    };
    
    window.NewNoteEvent = NewNoteEvent;

})(jQuery);
