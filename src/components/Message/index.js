import style from 'styled-components'
import { colors } from '../../config/theme'
import { ButtonClose } from '../Buttons'

export const Message = style.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    z-index: 99999;
`

export const MessageSucess = style(Message)`
background-color: ${colors.green};
    color: #fff;
`

export const MessageError= style(Message)`
    background-color: ${colors.red};
    color: #fff;
`

export const MessageButtonClose= style(ButtonClose)`    
    color: #fff;    
    position: absolute;
    top: 0;
    right: 0;
    color: ${ props => props.error ? '#98352b': 'green'};
    font-weight: 400;

    &:hover {
        background-color: transparent;
    }
`

