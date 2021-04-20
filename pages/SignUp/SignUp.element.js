import styled from 'styled-components'

export const ErrorMessage = styled.p`
    color : red;
    font-size : 12px;
`

export const FormContainer = styled.div`
    color: #fff;
    padding: 100px 0;
`

export const Title = styled.h1`
    color : #3287D0;
    margin : 10px 15px;
    text-align: center;

    @media screen and (max-width : 580px) {
        font-size: 20px
    }
`
export const FormBox = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color : #A2E7DE;
`

export const FormField = styled.div`
    display : flex;
    flex-direction : column;
    margin : 10xp 15px;
    padding : 20px;
`
export const FormLabel = styled.label`
    font-family : 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    color: #1A7796;
    padding-bottom: 0.3rem
`
export const CheckBoxLabel = styled.label`
    font-size : 15px;
    color : #000;
`



export const Button = styled.button`
    padding : 0.6rem;
    background-color : #3215E0;
    margin : 15px 20px;
    border : none;
    border-radius : 5px;
    cursor: pointer;
    width: 40%;
    height: 40pt;
    color : #fff;

    &:hover {
        background-color : #ADE249;
        color : #6D3519;
        transform: translate(5px,0);
        transition: 0.3s ease-in-out
    }
`
