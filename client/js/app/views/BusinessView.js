class BusinessView extends View{

    _template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.business.map(n => {
                    return `
                        <tr>
                            <td>${DateHelper.dateToText(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    
                    `
                }).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.business.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
     </table>
            `;
    }
}