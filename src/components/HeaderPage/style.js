import styled from 'styled-components'
import { device } from '../../config/theme'

export const HeaderPage = styled.header`    
    margin-bottom: 30px;
    
    & > div > div:first-child{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 0 15px;

        @media ${device.tablet} {
            max-width: 115px;
            text-align: left;
            margin-bottom: 0;
            justify-content: flex-start;
        }
    }
`

export const WrapperHeaderForm = styled.header`    
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.mobileL} {
        width: 100%;
        align-items: stretch;
        flex-direction: row;
    }

    @media ${device.tablet} {
        width: 70%;
    }

    @media ${device.laptop} {
        width: 50%;
    }

    button[type='button'] {
        margin-top: 15px;

        @media ${device.mobileL} {
            margin-top: 0;
        }
    }
`


