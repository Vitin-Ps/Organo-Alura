import React from 'react';
import './CampoTexto.css';

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterado }) => {
    const placeholderText = placeholder ? `${placeholder}...` : 'Digite...';

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label htmlFor={label}>
                {label}:
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderText}
            />
        </div>
    );
}

export default CampoTexto;
