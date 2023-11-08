import styled from '@emotion/styled'
import { theme } from 'utils/theme'
export const FilterWrapper = styled.div`
margin-top: ${theme.values.blockMargin};
display: flex;
width: 100%;
align-items: center;
`
export const FilterLabel = styled.label`
display: flex;
font-size: 36px;
width: 100%;
margin: 1px 20px;
color: ${theme.colors.textColor};
`




export const FilterInput = styled.input`
width: 80%;
height: 25px;
font-size: 24px;
background-color: grey;
opacity: 0.6;
color: black;
border-radius: 6px;
padding: 8px;
`