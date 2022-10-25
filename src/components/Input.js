import React, { useEffect, useState } from "react";
import Resultado from './Resultado';

const Input = ({ div1, div2 }) => {
    const [cantidad, setCantidad] = useState(0);
    const [cambio, setCambio] = useState(0);
    const [resultado, setResultado] = useState(0);

    const onChange = (e) => {
        setCantidad(e.target.value);
    };

    useEffect(() => {
        if (div1 === 'MXN') {
            setCambio(cantidad);
        }
        else if (div1 === 'USD') {
            setCambio(cantidad / 0.05);
        }
        else if (div1 === 'EUR') {
            setCambio(cantidad / 0.051);
        }
        else if (div1 === 'BTC') {
            setCambio(cantidad / 0.0000026);
        }
        else if (div1 === 'ETH') {
            setCambio(cantidad / 0.000037);
        }
        else if (div1 === 'DOGE') {
            setCambio(cantidad / 0.8475);
        }

        if (div2 === 'MXN') {
            setResultado(cambio);
        }
        else if (div2 === 'USD') {
            setResultado(cambio * 0.05);
        }
        else if (div2 === 'EUR') {
            setResultado(cambio * 0.051);
        }
        else if (div2 === 'BTC') {
            setResultado(cambio * 0.0000026);
        }
        else if (div2 === 'ETH') {
            setResultado(cambio * 0.000037);
        }
        else if (div2 === 'DOGE') {
            setResultado(cambio * 0.8475);
        }
    }, [cantidad, div1, div2, cambio] );



    return (
        <>
        <form>
            <label> Cantidad:  </label>
            <input
                type="text"
                name="cantidad"
                id="cantidad"
                value={cantidad}
                onChange={onChange}
            />
        </form>
        <p></p>
        <Resultado resultado={resultado} />
        </>
    );
};

    export default Input;