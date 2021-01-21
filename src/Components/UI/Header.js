import React from "react";
import {
  HeadWrapper,
  Nav,
  BTNwhite,
  BTNgroup,
  WHITEbg,
  NAVul,
  HeaderH1,
  Navlink,
  Navigation,
  B
} from "./index";

const Header = () => {
  return (
    <HeadWrapper>
      <Nav>
        <Navlink to="/">
          <B>House of Houses</B>
        </Navlink>
        <NAVul>
          <Navigation>
            <Navlink to="/search/1">Search</Navlink>
          </Navigation>
        </NAVul>
      </Nav>
      <HeaderH1>
        Choose from several different options of properties. Filter from
        hundreds of properties by area , price, return etc. Review info and
        photos about selected properties then explore related products
      </HeaderH1>
      <BTNgroup>
        <BTNwhite to="/search/1">View Listings</BTNwhite>
        <WHITEbg></WHITEbg>
      </BTNgroup>
    </HeadWrapper>
  );
};

export { Header };
