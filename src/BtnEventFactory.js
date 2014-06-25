(function($){
    
    function BtnEventFactory(navbarID){
        this.navbarID = navbarID;
    };
    
    BtnEventFactory.prototype.makeBtnEvent = function(){
        var editor = new EditorFactory().getCurrentEditor();
        
        if(this.navbarID === "new"){
            var newNoteEvent = new NewNoteEvent(editor);
            newNoteEvent.showNewNote();
            
        }else if(this.navbarID === "full_screen"){
            var fullScreenEvent = new FullScreenEvent();
            fullScreenEvent.showFullScreen();
            
        }else if(this.navbarID === "save"){
            var saveEvent = new SaveEvent(editor);
            saveEvent.saveContents();
        }
    };
        
    window.BtnEventFactory = BtnEventFactory;
    
})(jQuery);