
import { css } from 'styled-components'

export const BoxDefault = css`
    background-color: #fff;  
    border: 1px solid #c4c4c4; 
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
`

export const colors = {
    primary: '#005b95',
    black: '#333',
    gray: '#757575',
    lightGray: '#9e9e9e',
    lightGray2: '#c3c3c3',
    white: '#fff',
    red: '#e74c3c',
    green: '#2ecc71'
}

export const fonts = {
    small: '12px',
    xSmall: '14px',
    normal: '16px',
    medium: '18px',
    big: '20px',
    xBig: '24px',
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};