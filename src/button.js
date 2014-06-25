function btnSelector(){
    var navbarID = event.target.id; 
    new BtnEventFactory(navbarID).makeBtnEvent();
}

function editorSelector(event){
    var selectVal = $("#listSelect").val();
    new EditorChanger(selectVal).makeEditor();
}

var editor = new HtmlEditor(); 
var app = new App(editor);

$('ul.navbar-nav').on('click', btnSelector);
$('#listSelect').on('change', editorSelector);