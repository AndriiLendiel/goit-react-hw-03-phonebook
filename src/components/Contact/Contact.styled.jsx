import styled from '@emotion/styled'
import { theme } from 'utils/theme'



export const ContactItem = styled.li`
color: ${theme.colors.textColor};
display: flex;
font-size: 36px;
margin-bottom: 10px;
`

export const ContactButton = styled.button`

margin-left: auto;
font-size: 28px;
cursor: pointer;
padding: 5px 5px;
  background-color: ${theme.colors.btnColor};
  border-radius: 10px;
  border: 1px solid #257C9E;
  color: ${theme.colors.white};
  :active {
    background-color: ${theme.colors.btnColorActive};
    color: whitesmoke;
  }
`