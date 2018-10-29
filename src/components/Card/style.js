import styled from 'styled-components'
import { colors, device } from '../../config/theme'

export const WrapperCards = styled.article`
    display: flex;
    width: 100%;
    flex-direction: column;
    
    & > a {
        margin-bottom: 20px;
    }

    .lds-eclipse {
        display: block;
        margin: 0 auto;
    }
`

export const CardItem = styled.a.attrs({
    href: "#"
})`
    display: flex;
    width: 100%;    
    border: 1px solid transparent; 
    box-shadow: 0 5px 10px rgba(0,0,0,.5);
    padding: 10px;
    color: ${ colors.black };
    text-decoration: none;
    border-color: ${ props => (props.active) ? `${colors.primary}`: '#c4c4c4' };
    transition: all .2s ease-in-out;

    align-items: flex-start;
    flex-wrap: wrap;
    
    @media ${device.mobileL}{
        align-items: ${ props => (props.active) ? 'flex-start': 'center' };
        flex-wrap: ${ props => (props.details) ? 'nowrap': 'wrap' };
    }
    
    div { padding: 5px; }
    
    strong, p {
        color: ${ props => (props.active) ? `${colors.primary}`: `${colors.gray}` };
    }

    > div {
        width: 50%;

        @media ${device.tablet} {
            width: ${ props => (props.details) ? '100%' : '50%' };
        }

        &:last-child {
            @media ${device.tablet} {
                width: 100%;
            }
        }
    }
`

export const CardItemFigure = styled.figure`
    width: 50px;
    height: 50px;
    flex: none;
    background-color: ${colors.lightGray2};
    margin: 0;
    margin-right: 10px;
    display: none;

    @media ${ device.tablet } {
        display: flex;
        width: 75px;
        height: 75px;
        margin-right: 15px;
    }    
`
