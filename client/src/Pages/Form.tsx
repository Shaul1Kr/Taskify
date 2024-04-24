import styled from "styled-components";
import LogoSrc from "../assets/logo.jpg";
import { useState } from "react";
import Login from "../Components/Form/Login";
import Register from "../Components/Form/Register";

export default function Form() {
  const [step, setStep] = useState<string>("Login");
  return (
    <PageContainer>
      <Logo src={LogoSrc} />
      {step === "Login" ? (
        <Login setStep={setStep} />
      ) : (
        <Register setStep={setStep} />
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 16%;
  padding: 3rem;
  background-color: whitesmoke;
`;

const Logo = styled.img`
  width: 50%;
  border-radius: 100px;
`;
