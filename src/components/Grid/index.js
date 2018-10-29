import styled from 'styled-components'
import { device } from '../../config/theme'

const Col = styled.div`
    display: flex;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: ${ props => props.justifyContent || 'flex-start' };
    justify-content: ${ props => props.justifyContent || 'flex-start' };    
`

export const Col15 = styled(Col)`
    width: 100%;

    @media ${device.laptop} {
        flex-basis: 0 0 15%;
        max-width: 15%;
    }
`

export const Col30 = styled(Col)`
    width: 100%;
    
    @media ${device.laptop} {
        flex-basis: 0 0 30%;
        max-width: 30%;
    }
`

export const Col40 = styled(Col)`
    width: 100%;
    
    @media ${device.mobileL} {
        flex-basis: 0 0 38%;
        max-width: 38%;
    }

    @media ${device.laptop} {
        flex-basis: 0 0 40%;
        max-width: 40%;
    }
`

export const Col50 = styled(Col)`
    width: 100%;

    @media ${device.laptop} {
        flex-basis: 0 0 50%;
        max-width: 50%;
    }
`

export const Col60 = styled(Col)`
    width: 100%;
    
    @media ${device.laptop} {
        flex-basis: 0 0 60%;
        max-width: 60%;
    }
`

export const Col70 = styled(Col)`
    width: 100%;
    
    @media ${device.laptop} {
        flex-basis: 0 0 70%;
        max-width: 70%;
    }
`

export const Col85 = styled(Col)`
    width: 100%;
        
    @media ${device.laptop} {
        flex-basis: 0 0 85%;
        max-width: 85%;
    }
`