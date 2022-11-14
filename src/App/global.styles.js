import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  font-family:'inter';  
  box-sizing: border-box;
}

body {
  background-color: #dadada ;
  padding: 10px;

}

.categories-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
`;
export default GlobalStyle;
