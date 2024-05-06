import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          list="taks-suggestions"
          id="task"
          placeholder="Nomeie seu projeto"
          {...register('task')}
          disabled={!!activeCycle}
        />
      </div>

      <datalist id="taks-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
      </datalist>

      <div>
        <label htmlFor="minutesAmount">Durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
      </div>

      <span>Minutos</span>
    </FormContainer>
  )
}
