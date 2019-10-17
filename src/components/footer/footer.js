import React from "react";
import styled from "styled-components";

import { Socials } from "../../utils/socials";
import { H1, P } from "../../utils/typography";
import { colorGrey6, colorPrimary } from "../../utils/variables";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8rem 6rem 7rem 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(H1)`
  margin-bottom: 3rem;
  color: #fff;
`;

const Content = styled(P)`
  margin-bottom: 3rem;
  color: ${colorGrey6};
`;

const A = styled.a`
  :link,
  :visited {
    padding: 0.1rem 0.5rem;
    background-color: ${colorPrimary};
    color: #fff;
    text-decoration: none;
  }

  :hover {
    border-bottom: 2px solid #fff;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper className="scrollreveal">
        <Title className="scrollreveal">Let's get in touch!</Title>
        <Content>
          If you would like to know more about me
          <br />
          Send me an email at:
          <A href="mailto: moy_085@hotmail.com" rel="noopener">
            moy_085@hotmail.com
          </A>
        </Content>
        <Socials small />
      </Wrapper>
    </Container>
  );
};

export default Footer;
