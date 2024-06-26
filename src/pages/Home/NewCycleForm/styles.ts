import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${(props) => props.theme['zinc-100']};
  font-size: 1.125rem;
  font-weight: bold;

  @media screen and (max-width: 720px) {
    justify-content: start;
    gap: 2rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['zinc-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['zinc-100']};

  &::placeholder {
    color: ${(props) => props.theme['zinc-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['emerald-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
