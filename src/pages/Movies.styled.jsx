import styled from "@emotion/styled";


const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchFormInput = styled.input`
  width: 700px;
  height: 40px;
  margin-right: 20px;
  padding-left: 40px;
  font-size: 20px;
`;


const SearchBtn = styled.button`
height: 45px;
padding: 0 10px;


`



export { SearchFormContainer, SearchFormInput, SearchBtn, Form };