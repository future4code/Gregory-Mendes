import React from 'react'
import { useForm } from '../../hooks/useForm'
import { CreateTaskArea } from './create-task-styled'
import { postTaskRequest } from '../../requests/requests'

const CreateTask = () => {
    const [form, onChange, resetState] = useForm({
        taskName: "",
        selectDay: ""
    })
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        postTaskRequest(form.taskName, form.selectDay);

        resetState();
    }

    return (
        <CreateTaskArea>
            <form onSubmit={handleSubmit}>
                <input
                    name="taskName"
                    type="text"
                    placeholder="Digite o nome da tarefa"
                    value={form.taskName}
                    onChange={handleInputChange}
                    required
                />
                <select
                    name="selectDay"
                    data-testid={"select-day"}
                    value={form.selectDay}
                    onChange={handleInputChange}
                    required
                >
                    <option value=""></option>
                    <option value="sunday">Domingo</option>
                    <option value="monday">Segunda</option>
                    <option value="tuesday">Terça</option>
                    <option value="wednesday">Quarta</option>
                    <option value="thursday">Quinta</option>
                    <option value="friday">Sexta</option>
                    <option value="saturday">Sábado</option>
                </select>
                <button>Criar</button>
            </form>
        </CreateTaskArea>
    )
}

export default CreateTask;
