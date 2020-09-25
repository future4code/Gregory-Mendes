import React from 'react'
import { PlannerArea, DayArea } from './planner-days-styled'

const PlannerDays = () => {

    return (
        <PlannerArea>
            <DayArea>
                <h2>Domingo</h2>
            </DayArea>
            <DayArea>
                <h2>Segunda</h2>
            </DayArea>
            <DayArea>
                <h2>Terça</h2>
            </DayArea>
            <DayArea>
                <h2>Quarta</h2>
            </DayArea>
            <DayArea>
                <h2>Quinta</h2>
            </DayArea>
            <DayArea>
                <h2>Sexta</h2>
            </DayArea>
            <DayArea>
                <h2>Sábado</h2>
            </DayArea>
        </PlannerArea>
    )
}

export default PlannerDays