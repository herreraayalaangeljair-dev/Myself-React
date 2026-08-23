import styled from "styled-components";
import ThreeDImageCarousel from "./ThreeDImageCarousel";
import It from "../Imagenes/It.webp";
import TheFault from "../Imagenes/TheFault.webp";
import ElVisitante from "../Imagenes/ElVisitante.webp";
import Princefrom from "../Imagenes/Prince.webp";
import habits from "../Imagenes/habits.webp";
import psicologia from "../Imagenes/psicologia.webp";
import RichDad from "../Imagenes/RichDad.webp";
import Gerardo1 from "../Imagenes/Gerardo1.webp";
import Gerardo2 from "../Imagenes/Gerardo2.webp";
import Gerardo3 from "../Imagenes/Gerardo3.webp";
import Gerardo4 from "../Imagenes/Gerardo4.webp";
import Sen from "../Imagenes/Sen.webp";
import King from "../Imagenes/King.webp";
import ingles from "../Imagenes/ingles.svg";
import Korean from "../Imagenes/Korean.webp";
import chino from "../Imagenes/chino.png";

const bookSlides = [
  { id: 1, src: It, alt: "It" },
  { id: 2, src: TheFault, alt: "The Fault in Our Stars" },
  { id: 3, src: ElVisitante, alt: "El Visitante" },
  { id: 4, src: Princefrom, alt: "Prince" },
  { id: 5, src: habits, alt: "Atomic Habits" },
  { id: 6, src: psicologia, alt: "Psicología del Dinero" },
  { id: 7, src: RichDad, alt: "Padre Rico Padre Pobre" },
  { id: 8, src: Gerardo1, alt: "Gerardo 1" },
  { id: 9, src: Gerardo2, alt: "Gerardo 2" },
  { id: 10, src: Gerardo3, alt: "Gerardo 3" },
  { id: 11, src: Gerardo4, alt: "Gerardo 4" },
  { id: 12, src: Sen, alt: "Sen" },
  { id: 13, src: King, alt: "King" },
];

const Pasatiempos = () => {
  return (
    <PasatiemposContainer>
      <Title>Mis Pasatiempos :)</Title>

      <Section>
        <SectionTitle>Idiomas</SectionTitle>
        <Description>Actualmente estoy aprendiendo varios idiomas. De los cuales, el coreano es el idioma que más me gusta.</Description>

        <LanguagesList>
          <FlagItem>
            <img src={ingles} alt="Inglés" />
          </FlagItem>

          <FlagItem>
            <img src={Korean} alt="Coreano" />
          </FlagItem>

          <FlagItem>
            <img src={chino} alt="Chino" />
          </FlagItem>
        </LanguagesList>
      </Section>

      <Section style={{ marginBottom: 0 }}>
        <SectionTitle>Lectura</SectionTitle>
        <Description>
          Fuera de la tecnología, me la paso leyendo. Mis géneros favoritos son la fantasía y el terror,
          aunque también le pongo empeño a la educación financiera.
        </Description>

        <ThreeDImageCarousel
          slides={bookSlides}
          itemCount={5}
          autoplay={true}
          delay={4}
          pauseOnHover={true}
        />
      </Section>
    </PasatiemposContainer>
  );
};

const PasatiemposContainer = styled.section`
  background-color: var(--background);
  color: var(--foreground);
  padding: 100px 24px 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--border);

  @media (min-width: 768px) {
    padding: 120px 48px 140px;
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  text-align: center;
  margin-bottom: 70px;
  letter-spacing: -0.03em;
  color: var(--foreground);
`;

const Section = styled.div`
  width: 100%;
  max-width: 70rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 48px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 400;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
  color: var(--foreground);
`;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 1.6;
  color: var(--muted-foreground);
  max-width: 38rem;
  margin-bottom: 28px;
`;

const LanguagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

const FlagItem = styled.div`
  width: 52px;
  height: 36px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e293b;

  &:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export default Pasatiempos;