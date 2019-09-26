class ListBusiness {

    constructor(trigger) {
        this._business = [];
        this._trigger = trigger;
    }

    adiciona(business) {
        this._business.push(business);
        this._trigger(this);
    }

    get business() {
        return [].concat(this._business);
    }

    delete() {
        this._business = [];
        this._trigger(this);
    }
}
