import styled from 'styled-components'
import { colors, BoxDefault } from '../../config/theme'

export const SearchForm = styled.form`
  display: block;  
  width: 100%;
`

export  const TitleForm = styled.legend`  
  font-size: 24px;  
  color: ${colors.primary};
`

export  const InputWrapper = styled.div`
  ${ BoxDefault }
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;

  & input {
    width: 100%;
    padding: 15px 50px 15px 15px;
    border: 0;
    color: #9e9e9e;
    font-family: 'Montserrat', sans-serif;
  }
`
export const ButtonMagnify = styled.button.attrs({
  type: 'submit'
})`
  apparence: none;
  border: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  fill: #757575;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    fill: #005b95;
  }
`