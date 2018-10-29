import styled from 'styled-components'
import { colors, fonts, device } from '../../config/theme'

export const InfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column; 
    width: 100%;
`
export const InfoTitle = styled.strong`
    margin-bottom: 5px;
    font-size: ${fonts.small};
    font-weight: bold;
    color: ${colors.gray};
`
export const InfoDesc = styled.p`
    margin: 0;
    color: ${colors.gray};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    white-space: pre-wrap;
    font-size: ${fonts.small};

    @media ${device.tablet} {
        font-size: ${fonts.xSmall};
    }

    span {
        width: ${ props => props.arr ? '50%': '100%'};
        margin-bottom: 5px;
        font-size: 12px;
        
        @media ${device.tablet} {
            font-size: 14px;
        }
    }
`