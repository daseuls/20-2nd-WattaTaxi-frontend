import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MainBanner from './MainBanner';
import MainTaxi from './MainTaxi';

import Footer from './MainFooter';

function MainForm() {
  return (
    <Container>
      <MainHeader />
      <MainBanner />
      <MainTaxi />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1050px;
`;

export default MainForm;
