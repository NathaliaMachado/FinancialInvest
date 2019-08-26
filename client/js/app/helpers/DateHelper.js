class DateHelper {

    constructor() {
        throw new Error('This Class cannot be instantiated.');
    }

    static dateToText(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textToDate(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('It must be in format yyyy/mm/dd');

        return new Date(...texto.split('-')
        .map((item, indice) => item - indice % 2));
    }

   
}