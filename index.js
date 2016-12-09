var ViewModel = function() {
    this.primeiroNome = ko.observable("");
    this.ultimoNome = ko.observable("");
    this.cargo = ko.observable("");
    this.email = ko.observable("");

    this.salvarImagem = function() {
        html2canvas($('#divImagem1'), {
            onrendered: function(canvas) {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = 'minha_assinatura_lindosa.jpg';
                a.click();
            }
        });
    };
};
 
ko.applyBindings(new ViewModel());