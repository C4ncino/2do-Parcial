import React, { useEffect, useState } from "react";

const Dropdown = ({ titulo, setDiv }) => {
    const [value, setvalue] = useState("MXN");

    const onChange = (e) => {
        setvalue(e.target.value);
    };

    useEffect(() => {
        setDiv(value);
    }, [value, setDiv]);

    return (
        <>
            <label>{titulo}</label>
            <select name="divisas" id="divisas" onChange={onChange}>
            <option value="MXN">Pesos</option>
            <option value="USD">Dolár</option>
            <option value="EUR">Euro</option>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Etherium</option>
            <option value="DOGE">Dogecoin</option>
            </select>
        </>
    );
};

export default Dropdown;