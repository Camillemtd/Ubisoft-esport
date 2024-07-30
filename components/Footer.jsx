'use client'
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2b2b2e;
  color: #ffffff;
  padding: 2.5rem;
  margin-top: 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  font-size: 0.75rem;
`;

const BottomSection = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }

  &:last-child {
    text-align: center;

    @media (min-width: 768px) {
      width: 25%;
      text-align: right;
    }
  }
`;

const LogosContainer = styled.div`
  margin-top: 1rem;
`;

const Logo = styled.img`
  display: inline-block;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Section>
          <img src="/logo.png" alt="Ubisoft Logo" className="mb-4" />
          <List>
            <ListItem>
              <Link href="#">
                <FooterLink>STORE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>UBISOFT CONNECT</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>COMPAGNIE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>NOUVELLES</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>SUPPORT</FooterLink>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section>
          <Title>STUDIOS</Title>
          <List>
            <ListItem>
              <Link href="#">
                <FooterLink>UBISOFT MONTREAL</FooterLink>
              </Link>
            </ListItem>
          </List>
          <Title>PLATEFORMES</Title>
          <List>
            <ListItem>
              <Link href="#">
                <FooterLink>XBOX GAME PASS</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>XBOX SERIES X | S</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>XBOX ONE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>PLAYSTATION 5</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>PLAYSTATION 4</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>UBISOFT CONNECT</FooterLink>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section>
          <Title>RÈGLES R6 ESPORT</Title>
          <List>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES GLOBALES</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES ASIE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES BRÉSIL</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES EUROPE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES JAPON</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES LATAM HISPANIQUE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES MENA</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES AMÉRIQUE DU NORD</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES OCÉANIE</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>RÈGLES CORÉE DU SUD</FooterLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <FooterLink>CODE DE CONDUITE</FooterLink>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
      <BottomContainer>
        <BottomSection>
          <List className="flex flex-wrap">
            <ListItem className="mr-4">
              <Link href="#">
                <FooterLink>NOUS CONTACTER</FooterLink>
              </Link>
            </ListItem>
            <ListItem className="mr-4">
              <Link href="#">
                <FooterLink>CHARTE DE CONFIDENTIALITÉ</FooterLink>
              </Link>
            </ListItem>
            <ListItem className="mr-4">
              <Link href="#">
                <FooterLink>TERMES</FooterLink>
              </Link>
            </ListItem>
            <ListItem className="mr-4">
              <Link href="#">
                <FooterLink>PARAMÉTRER LES COOKIES</FooterLink>
              </Link>
            </ListItem>
          </List>
          <p className="mt-4">
            &copy; 2015 Ubisoft Entertainment. All Rights Reserved. Tom Clancy's, Rainbow Six, The Soldier Icon, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the U.S. and/or other countries. Microsoft, the Xbox Sphere mark, the Series X|S logo, Xbox One, Xbox Series X, Xbox Series S, and Xbox Series X|S are trademarks of the Microsoft group of companies. "PlayStation Logo", "PlayStation", "PS5 Logo" and "PS4 Logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
          </p>
        </BottomSection>
        <BottomSection>
          <p>Pour plus d'informations, consultez le Guide Ubisoft Parents</p>
        </BottomSection>
      </BottomContainer>
    </FooterContainer>
  );
}
