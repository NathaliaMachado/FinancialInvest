class ListBusiness {

    constructor() {
        this._business = [];
    }

    adiciona(business) {
        this._business.push(business);
    }

    get business() {
        return [].concat(this._business);
    }
}
