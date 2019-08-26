class BusinessController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._form = $('.form');
        this._listBusiness = new ListBusiness();
    }

    adiciona(event) {
        event.preventDefault();

        this._listBusiness.adiciona(this._createBusiness());
        console.log(this._listBusiness.business);
        this._cleanForm();
    }

    _createBusiness() {
        return new Business(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _cleanForm() {
        this._form.reset();
        this._inputData.focus();
    }

}