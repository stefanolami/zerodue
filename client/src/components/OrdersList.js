import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdersList = (props) => {

    const formatDate = (date) => {
        const newDate = new Date(date);
        let day = newDate.getDate();
        if (day < 10) day = "0" + day;
        let month = newDate.getMonth() + 1;
        if (month < 10) month = "0" + month;
        const year = newDate.getFullYear();
        const finalDate = day + '/' + month + '/' + year;
        return finalDate;
    }

    return (
        <div className="orders-list">
            {
                props.list ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Data Ordine</th>
                                <th>Codice Fattura</th>
                                <th>Data Fattura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.list.length > 0 ? (
                                    props.list.map((order, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {formatDate(order.order_date)}
                                                </td>
                                                <td>
                                                    {order.invoice_code}
                                                </td>
                                                <td>
                                                    {formatDate(order.invoice_date)}
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    null
                                )
                            }
                        </tbody>
                    </Table>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default OrdersList;