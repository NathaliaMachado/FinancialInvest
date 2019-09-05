class MessageView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}