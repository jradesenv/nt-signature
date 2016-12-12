var ViewModel = function() {
    var _view = this;
    _view.primeiroNome = ko.observable("");
    _view.ultimoNome = ko.observable("");
    _view.cargo = ko.observable("");
    _view.email = ko.observable("");
    _view.telefone = ko.observable("");
    _view.telefoneTratado = ko.observable("");

    _view.telefone.subscribe(function(newValue) {
        var _telefone = _view.telefone();
        if(_telefone.length > 0) {
            _telefone = " / " + _telefone;
        }
        _view.telefoneTratado(_telefone);
    });

    _view.abrirPopup = function() {
        var OpenWindow = window.open("", "assinatura", "height=500, width=500,toolbar=no,scrollbars=yes,menubar=no");
        OpenWindow.document.body.innerHTML = $('#divImagem1').html();
        //OpenWindow.document.write($('#divImagem1').html());
    };

    _view.pegarHtml = function() {
        var _htmlPopup = 'Resultado: (copie e cole na assinatura html)</br><textarea id="txtResultado" rows="5" cols="50">' + $('#divImagem1').html() + '</textarea>';
        var OpenWindow=window.open("", "html", "height=500, width=500,toolbar=no,scrollbars=yes,menubar=no");
        OpenWindow.document.body.innerHTML = _htmlPopup;
        //OpenWindow.document.write(_htmlPopup);
    }
};

ko.bindingHandlers.masked = {
    init: function(element, valueAccessor, allBindingsAccessor) {
        var mask = allBindingsAccessor().mask || {};
        $(element).mask(mask);
        ko.utils.registerEventHandler(element, 'focusout', function() {
            var observable = valueAccessor();
            observable($(element).val());
        });
    }, 
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).val(value);
    }
};
 
ko.applyBindings(new ViewModel());

$("input.inputTelefone")
        .mask("(999) 9999-9999?9")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 11) {  
                element.mask("(999) 99999-999?9");  
            } else {  
                element.mask("(999) 9999-9999?9");  
            }  
        });