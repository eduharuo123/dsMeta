import axios from "axios";
import icon from "../../assets/img/NotificationIcon.svg";
import { BASE_URL } from "../../utils/request";
import './styles.css';

type props = {
    saleId: number;
}

function handleClick(id: any) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log('sucesso')
        });
}

function NotificationButton( {saleId} : props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton