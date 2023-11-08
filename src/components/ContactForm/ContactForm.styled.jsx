import styled from "@emotion/styled";
import {theme} from '../../utils/theme'
import { Form, Field} from "formik";


export const ErrorText = styled.p`
font-size: 24px;
color: red;
`

export const FormWrapper = styled.div`
width: 100%;
padding: 5px;
margin-top: ${theme.values.blockMargin};
`

export const MainForm = styled(Form)`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;

`

export const FormLabel = styled.label`
font-size: 36px;
color: ${theme.colors.textColor};

`

export const FormInput = styled(Field)`
height: 25px;
font-size: 24px;
background-color: grey;
opacity: 0.6;
color: black;
padding: 8px;
border-radius: 6px;

`


export const FormButton = styled.button`
cursor: pointer;
font-size: 28px;
width: 300px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
padding: 10px 20px;
grid-column-start: 1;
  grid-column-end: 3;
  background-color: ${theme.colors.btnColor};
  border-radius: 10px;
  border: 1px solid #257C9E;
  color: ${theme.colors.white};
  :active {
    background-color: ${theme.colors.btnColorActive};
    color: whitesmoke;
  }
`

