import React from 'react';
import useForm from '../../hooks/useForm'
import getCountriesNames from '../../services/requests/getCountriesNames'

const ApplicationFormPage = () => {
    const [form, setForm, resetState] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        tripId: ""
    });

    const handleInputsChange = (event) => {
        const { name, value } = event.target;

        setForm(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        resetState();
    }

    const showCountriesOption = () => {
        getCountriesNames(form.country, setForm);
        
        return (
            <option value={form.country}></option>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={form.name}
                    name={"name"}
                    onChange={handleInputsChange}
                    type="text"
                    pattern="[A-Za-z]{3,}"
                    title="No mínimo 3 letras"
                    placeholder="Nome completo"
                    required
                />
                <input
                    value={form.age}
                    name={"age"}
                    onChange={handleInputsChange}
                    type="number"
                    min="18"
                    title="No mínimo 18 anos."
                    placeholder="Idade"
                    required
                />
                <input
                    value={form.applicationText}
                    name={"applicationText"}
                    onChange={handleInputsChange}
                    type="text"
                    pattern="[A-Za-z]{30}"
                    title="No mínimo 30 caracteres"
                    placeholder="Por quê quer viajar?"
                    required
                />
                <input
                    value={form.profession}
                    name={"profession"}
                    onChange={handleInputsChange}
                    type="text"
                    pattern="[A-Za-z]{10}"
                    title="No mínimo 10 caracteres"
                    placeholder="Profissão"
                    required
                />
                <select
                    value={form.country}
                    name={"country"}
                    onChange={handleInputsChange}
                    required
                >
                    <option value=""></option>
                    {showCountriesOption}
                </select>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default ApplicationFormPage;