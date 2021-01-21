import styled, { injectGlobal } from "styled-components";
import { NavLink } from "react-router-dom";

// injectGlobal`
// import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

// body {
//     margin: 0;
//     padding: 0;
//     outline: 0;
//     font-size: 100%;
//     vertical-align: baseline;
// }
// `;

export const theme = {
  mainBlack: "#1e202b",
  mainBlue: "#08AEEA",
  maingGreen: "#2AF598",
  mainGradient: "linear-gradient(to right, #08AEEA, #2AF598)"
};

export const H1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${(props) => props.theme.mainBlack};
`;

export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.mainBlack};
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

export const H5 = styled.h5`
  font-size: 14px;
  font-weight: bold;
`;
export const H6 = styled.h6`
  font-size: 12px;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-family: system-ui, sans-serif;
  font-size: 35px;
  line-height: 1.5;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400px;
  color: ${(props) => props.theme.mainBlack};
`;
export const Small = styled.small`
  font-size: 80%;
  color: grey;
`;
export const LI = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.mainBlack};
`;
//Buttons

export const BTNwhite = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 135px;
  background: #2af598;
  background: -webkit-linear-gradient(top right, #2af598, #08aeea);
  background: -o-linear-gradient(top right, #2af598, #08aeea);
  background: -moz-linear-gradient(top right, #2af598, #08aeea);
  background: linear-gradient(top right, #2af598, #08aeea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BTNgroup = styled.div`
  position: relative;
  z-index: 1;
`;
export const WHITEbg = styled.div`
  background-color: white;
  display: block;
  height: 60px;
  width: 200px;
  position: absolute;
  z-index: -1;
  top: 0;
  border-radius: 3px;
`;
export const BTNcolor = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background: ${(props) => props.theme.mainGradient};
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 3px;
`;

export const BTNgreen = styled.a`
  color: ${(props) => props.theme.maingGreen};
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-left: 20px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.maingGreen};
`;

//Header/Nav

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
`;

export const B = styled.b`
  text-decoration: none;
  line-height: 50px;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 2px;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px green;
`;

export const HeadWrapper = styled.header`
  background-image: url("https://res.cloudinary.com/di449masi/image/upload/v1611200375/590_huan3m.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  min-height: 900px;
  padding: 0 5%;
  position: relative;
  /* opacity: 0.6; */
`;

export const Logo = styled.p`
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 2px;
  color: white;
`;

export const NAVul = styled.ul`
  float: right;
  list-style: none;
  color: white;
`;
export const Navlink = styled(NavLink)`
  margin-top: 1px;
  font-size: 12px;
  text-decoration: none;
  line-height: 40px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 2px;
  color: white;
  cursor: pointer;
`;

export const Navigation = styled.p`
  display: inline-block;
  margin-left: 50px;

  text-decoration: none;
  line-height: 50px;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
`;
export const HeaderH1 = styled.h1`
  color: white;
  width: 100%;
  margin: 70px 0 40px 0;
  text-decoration: bold;
  opacity: 5;
  z-index: 5;
  text-shadow: 1px 1px 2px black, 0 0 5px blue, 0 0 5px darkblue;
`;
export const HeaderP = styled.p`
  color: white;
  margin-bottom: 40px;
`;

export const IpadWrapper = styled.a`
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 60px;
`;

export const IphoneWrapper = styled.a`
  width: 40%;
  position: absolute;
  right: 4%;
  top: 150px;
  display: none;
`;

export const MobileWrapper = styled.section`
  display: none;
  font-size: 25px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 0;
`;
export const MobileLabel = styled.label`
  margin: 0 40px 0 0;
  #toggle {
    display: none;
  }
`;
export const MobileUl = styled.ul`
  text-align: center;
  width: 100%;
  display: none;
  margin: 0;
  background-color: rgb(255, 255, 255, 0.1);
  /* #toggle:checked - ul {
    display: block;
  } */
`;

export const MobileLi = styled.li`
  margin: 0;
  width: 100%;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
`;

//new4k movies

export const MovieWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  margin-bottom: 160px;
`;

export const MoviesTitle = styled.div`
  margin: 50px 0 20px 0;
  h2 {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    a {
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
    }
  }
`;
export const MovieUl = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
`;

export const MovieLi = styled.li`
  width: 95%;
  margin: 4% img {
    width: 92%;
    margin: 4%;
  }
`;

export const Actions = styled.div`
  text-align: center;
  width: 60%;
  margin: 0 auto 200px auto;
  h1 {
    margin-bottom: 40px;
  }
`;

export const FooterWrapper = styled.footer`
width: 90%;
padding: 0 5%;
text-decoration: none;
color: { props=> props.theme.mainBlack};
/* ul {
  list-style: none;
  line-height: 80px;
  display: inline-block;
};
li{
  display: inline-block;
  text-align: center;
};
p {
  display: inline-block;

  margin-left: 20px;
};
a {
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
}; */
`;
