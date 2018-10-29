import styled from 'styled-components'
import { colors, device } from '../../config/theme'

export const DetailItem = styled.aside`
    display: block;
    flex-direction: column;

    border: 1px solid #c4c4c4; 
    box-shadow: 0 5px 10px rgba(0,0,0,.5);
    padding: 15px;
    
    position: fixed;
    top: 0;
    left: 0;

    overflow: auto;

    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    
    @media ${device.tablet} {
        display: flex;
        position: static;
        margin-left: 30px;
        width: 100%;
    }
`

export const DetailsClose = styled.button.attrs({
    type: 'button'
})`    
    color: ${ colors.black };

    position: absolute;
    top: 5px;
    right: 6px;

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

export const DetailsHeader = styled.header`
    display: flex;
    algin-items: strech;    
`

export const DetailsFigure = styled.figure`
    width: 90px;
    height: 90px;
    flex: none;
    margin-right: 5px;
    background-color: ${colors.lightGray2};
    margin: 0 15px 0 0;

    @media ${device.tablet} {
        width: 100px;
        height: 100px;
    }
`

export const DetailsHeaderInfos = styled.div`
    width: 100%;
    display: flex;
    algin-items: strech;
    flex-direction: column;
`

export const DetailsHeaderRow = styled.div`
    display: flex;    
    margin-bottom: 5px; 
    flex-direction: column;
    
    @media ${ device.mobileL } {
        flex-direction: row;
    }

    > div {
        margin-bottom: 5px;
    }
`

export const DetailsSectionInfos = styled.div`
    display: flex;
    flex-direction: column;
    algin-items: strech;
    margin-bottom: 15px;

    & > div {
        margin-top: 15px;
    }
`

export const DetailsFooterInfos = styled.footer`
    display: flex;
    algin-items: strech;    
    align-self: flex-end;
    margin-top: auto;
`

