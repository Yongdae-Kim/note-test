(function($){
    
    function FullScreenEvent(){
    };
    
    FullScreenEvent.prototype.showFullScreen = function(){
        if (screenfull.enabled)
            screenfull.request();
        else
            new Dialoger().showAlertDialog("전체화면을 지원하지 않습니다.");
    };

    window.FullScreenEvent = FullScreenEvent;

})(jQuery);