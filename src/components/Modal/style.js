
import styled from 'styled-components'
import { colors, fonts, device } from '../../config/theme'
import { ButtonClose } from '../Buttons'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 13;
`
export const ModalClose = styled(ButtonClose)`    
    color: ${colors.black};
    position: absolute;
    top: 5px;
    right: 5px;
    text-align: left;
    border: 0;
    font-weight: normal;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalWrapper = styled.div`
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 13;
    width: 90%;
    max-width: 550px;
    background-color: #fff;
    padding: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,.5);
    text-align: left;
    
    @media ${device.tablet} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const ModalContainer = styled.div`
    text-align: left;

    h2 {
        font-size: 18px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        position: relative;

        label {
            font-size: 13px;
            font-weight: bold;
            color: ${colors.lightGray};
            transition: all .2s ease-in-out;            
        }

        input, textarea {
            border: 0;
            outline: 0;
            border-bottom: 2px solid ${colors.lightGray2};
            font-size: ${fonts.xSmall};
            font-weight: 500;
            margin-top: 5px;
            padding: 8px 0;
            color: ${colors.black};

            &:focus {
                border-color: ${colors.primary};
            }
        }

        textarea {
            height: 100px;
            resize: none;
        }

        &.error {
            label {
                color: ${colors.red};
            }
            input {
                border-color: ${colors.red};
            }
        }

        .text-danger {
            font-size: ${fonts.small};
            font-weight: 500;
            margin-top: 5px;
            color: ${colors.red};
        }
    }

    .rowNovoInteressado {
        display: flex;
        
        margin-bottom: 25px;
        flex-direction: column;

        @media ${device.mobileL} {
            align-items: flex-end;
            flex-direction: row;
        }

        .form-group {
            margin: 0 0 10px;

            @media ${device.mobileL} {
                margin-bottom: 0;
                margin-right: 10px;
            }
        }
    }

    button[type='submit'] {
        margin-top: 20px;
        width: 135px;
        align-self: flex-end;     
    }

    .list-interessados {
        display: block;
        margin-bottom: 15px;

        strong {
            font-size: ${fonts.small};
            font-weight: 600;
            display: block;
            margin-bototm: 5px;
            color: ${colors.lightGray};
        }

        ul {
            padding: 0; 
            list-style-type: none;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &:hover {
                button {
                    display: flex;
                }
            }

            input {
                font-size: ${fonts.xSmall};
                font-weight: 500;
                margin-top: 5px;
                padding: 0;
                color: ${colors.black};

                border: 0;
                outline: 0;
                border-bottom: 1px solid transparent;

                &:focus {
                    border-color: ${colors.primary};
                }
            }

            button {
                display: none;
                aling-items: center;
                justify-content: center;
                width: 15px;
                height: 15px;
                background-color: ${colors.red};
                color: ${colors.white};    
                border-radius: 50%;
                border: 0;
                line-height: .7;
            }
        }
    }
`
export const ModalTitle = styled.legend``
export const ButtonRegister = styled.button`
    color: #fff;
    background-color: ${ colors.primary };
    padding: 10px 25px;
    border: 0;
    text-transform: uppercase;
    font: 14px 'Montserrat', sans-serif;

    &[disabled] {
        background-color: #ccc;
    }
`