var ViewModel = function() {
    var _view = this;
    _view.primeiroNome = ko.observable("");
    _view.ultimoNome = ko.observable("");
    _view.cargo = ko.observable("");
    _view.email = ko.observable("");

    _view.abrirPopup = function() {
        var OpenWindow=window.open("url", "newwin", "height=500, width=500,toolbar=no,scrollbars=yes,menubar=no");
        OpenWindow.document.write($('#divImagem1').html());
    };

    _view.pegarHtml = function() {
        var _htmlPopup = 'Resultado: (copie e cole na assinatura html)</br><textarea id="txtResultado" rows="5" cols="50">' + $('#divImagem1').html() + '</textarea>';
        var OpenWindow=window.open("url", "newwin", "height=500, width=500,toolbar=no,scrollbars=yes,menubar=no");
        OpenWindow.document.write(_htmlPopup);
    }
};
 
ko.applyBindings(new ViewModel());

// var txtResultado = document.getElementById("txtResultado");
// txtResultado.onfocus = function() {
//     txtResultado.select();
// };