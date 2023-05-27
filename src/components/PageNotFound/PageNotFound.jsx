import { Link } from "react-router-dom";
import { NotFoundContainer } from "./PageNotFound.styled";

export default function PageNotFound() {
  return (
    <NotFoundContainer>
      <h1>Page not found:(</h1>
      <Link to={'/'}>Return to home page</Link>
    </NotFoundContainer>
  );
}
