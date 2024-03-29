class BusinessController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._form = $('.form');

        this._listBusiness = new ListBusiness(model =>
            this._businessView.update(model));

        this._businessView = new BusinessView($('#businessView'));
        this._businessView.update(this._listBusiness);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
    }

    adiciona(event) {
        event.preventDefault();

        this._listBusiness.adiciona(this._createBusiness());

        this._message.text = 'Negociação adicionada com sucesso!';
        this._messageView.update(this._message)
        
        this._cleanForm();
    }

    apaga() {
        this._listBusiness.delete();

        this._message.text = 'Transictions deleted with success!';
        this._messageView.update(this._message);
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