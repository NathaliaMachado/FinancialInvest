class BusinessController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._form = $('.form');
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        console.log(data);

        let business = new Business(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(business);

        this.cleanForm();
    }

    cleanForm() {
        this._form.reset();
        this._inputData.focus();
    }

}