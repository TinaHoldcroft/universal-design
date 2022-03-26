const Table = () => {
    const lines = [
        {
            dataFormål: '[tom]',
            dataVipps: '[tom]',
            dataKonto: '1644.08.26974'
        }, {
            link: 'https://www.blindeforbundet.no/stott-blindeforbundet/minnegaver',
            dataFormål: 'Minnegaver',
            commentFormål: '',

            dataVipps: '05030',
            commentVipps: 'Meldingsfeltet merkes med: Minnegave og avdødes navn',

            dataKonto: '1644.08.26974',
            commentKonto: 'Meldingsfeltet merkes med: Minnegave og avdødes navn'
        }, {
            dataFormål: '[tom]',
            dataVipps: '[tom]',
            dataKonto: '1644.27.53354'
        }, {
            dataFormål: '[tom]',
            dataVipps: '[tom]',
            dataKonto: '1503.27.92917'
        }, {
            dataFormål: '[tom]',
            dataVipps: '[tom]',
            dataKonto: '1503.27.92968'
        }, {
            dataFormål: '[tom]',
            dataVipps: '[tom]',
            dataKonto: '1503.27.92976'
        }
    ]

    const tableLines = lines.map((line, i) =>
        <tr className='table-giver__row' key={`line_${i}`}>
            <td className='data first-column'>
                <a href={line.link}>{line.dataFormål}</a>
                <p className='comment'>{line.commentFormål}</p>
            </td>
            <td className='data second-column'>
                <p>{line.dataVipps}</p>
                <p className='comment'>{line.commentVipps}</p>
            </td>
            <td className='data third-column'>
                <p>{line.dataKonto}</p>
                <p className='comment'>{line.commentKonto}</p>
            </td>
        </tr>
    );

    return (
        <div className='table-wrapper'>
            <table className='table-giver'>
                <thead>
                    <tr className='table-giver__heading'>
                        <th className='data first-column'>Formål</th>
                        <th className='data second-column'>Vipps-nummer</th>
                        <th className='data third-column'>Kontonummer</th>
                    </tr>
                </thead>
                <tbody>{tableLines}</tbody>
            </table>
        </div>
    );
}

export default Table;