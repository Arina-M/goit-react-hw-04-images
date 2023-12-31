import styled from '@emotion/styled';

export const ButtonLoad = styled.button`
margin: 0 auto;
padding: 15px 25px;
border-radius: 6px;
background-color: rgb(63, 81, 181);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
display: block;
color: #fff;
border: 0;
text-decoration: none;
cursor: pointer;
font-family: inherit;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 500;
width: 280px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: rgb(70, 90, 189);
  }
`;