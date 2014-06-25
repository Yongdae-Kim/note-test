(function($){
    
    function SaveEvent(editor){
        this.editor = editor;
    };
    
    SaveEvent.prototype.saveContents = function(){   
        var fileName = this.showDialog();
        
        if(!this.hasFileName(fileName)){
            var blob = new Blob(
                [this.editor.getCode()], 
                {type: "text/plain;charset=utf-8"}
            );
            saveAs(blob, fileName + ".html");   
        }
    };
    
    SaveEvent.prototype.hasFileName = function(fileName){
        return fileName===null || fileName==="";
    };
    
    SaveEvent.prototype.showDialog = function(){
        return new Dialoger().showPromptDialog("파일이름을 입력하세요.");
    };
    
    window.SaveEvent = SaveEvent;

})(jQuery);