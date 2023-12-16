import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: "Nunito", sans-serif;
  color: #636b6f;
  background-color: #fff;

  .not-found {
    &__code {
      border-right: 2px solid;
      font-size: 26px;
      padding: 0 15px 0 15px;
      text-align: center;
    }

    &__message {
      padding: 10px;
      font-size: 18px;
      text-align: center;
    }
  }
`;

export default NotFoundPageStyled;
