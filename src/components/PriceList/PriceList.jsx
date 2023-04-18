import React from 'react';
import { FaTelegram,FaWhatsappSquare} from "react-icons/fa";
function PriceList(props) {
    return (
        <div>
            <h1>Скачать прайс-лист:</h1>
            <button>Прайс-лист</button>
            <p>Связь в мессенджерах:</p>
            <div>
                <FaWhatsappSquare size="40px" color='#12c312'/>
                <FaTelegram size="38px" color='#43c6ed'/>
            </div>
        </div>
    );
}

export default PriceList;