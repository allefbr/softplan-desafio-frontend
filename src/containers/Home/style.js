import styled from 'styled-components'
import { device } from '../../config/theme'

export const WrapperPage = styled.section`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    max-width: 550px;
    min-height: 100vh;
    margin: 0 auto;

    & form {
        margin: 30px auto;

        @media ${device.tablet} {
            margin-bottom: 50px;
        }
    }
`
export const MessageInfo = styled.p`
    font-size: 14px;
    color: #757575;
    text-align: center;
`
export const ButtonNewProcess = styled.a.attrs({
    href: '#'
})`
    font-size: 14px;
    font-weight: 700;
    color: #005b95;
`