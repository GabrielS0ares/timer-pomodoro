import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['zinc-100']};
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 720px) {
    font-size: 5rem;
    line-height: 4rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 2.5rem;
    line-height: 2rem;
  }

  span {
    background: ${(props) => props.theme['zinc-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['emerald-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 720px) {
    padding: 1rem 0;
    width: 2rem;
  }
`
