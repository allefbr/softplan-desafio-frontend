import styled from 'styled-components'
import { colors, fonts, BoxDefault } from '../../config/theme'

const Button = styled.button`
    font-weight: bold;
    font-size:  ${fonts.small};
    cursor: pointer;
    transition: all .2s ease-in-out;
`
export const ButtonLinkText = styled(Button)`
    color: ${colors.primary};
    border: 0;
    background-color: transparent;

    &:hover {
        text-decoration: underline;
    }
`
export const ButtonOutlineWhite = styled(Button)`
    ${ BoxDefault }
    color: ${colors.gray};
    padding: 10px 30px;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
        border-color: ${colors.primary};
    }
`
export const ButtonOutlineWhiteSmall = styled(Button)`
    ${ BoxDefault }    
    color: ${colors.gray};
    padding: 8px 20px;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
        border-color: ${colors.primary};
    }
`
export const ButtonPrimarySmall = styled(Button)`
    ${ BoxDefault }    
    color: ${colors.white};
    padding: 8px 20px;
    background-color: ${colors.primary};
    border: 0;
    text-transform: uppercase;
    font-weight: bold;

    &[disabled] {
        color: ${colors.white};
        background-color: #64c0fb;
        cursor: not-allowed;

        &:hover {            
            background-color:  #41a2e0;
            cursor: not-allowed;
        }
    }

    &:hover {
        color: ${colors.white};
        background-color: #0467a7;
    }
`

export const ButtonGraySmall = styled(Button)`
    ${ BoxDefault }    
    color: ${colors.white};
    padding: 10px 15px;
    background-color: ${colors.lightGray2};
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 3px;    

    &[disabled] {
        color: ${colors.lightGray2};
        background-color: #ccc;
        cursor: not-allowed;

        &:hover {
            color: ${colors.lightGray};
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

    &:hover {
        color: ${colors.white};
        background-color: #0467a7;
    }
`

export const ButtonClose = styled(Button)`
    border: 0;
    background-color: transparent;
    font-size: 24px;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        color: ${colors.white};
        background-color: ${colors.red};
    }
`