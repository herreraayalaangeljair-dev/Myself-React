import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

/* ── Data ────────────────────────────────────────────────────── */
const semestres = [
  {
    numero: 1,
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.4)',
    gradient: 'linear-gradient(135deg, #6C63FF 0%, #9B59B6 100%)',
    materias: [
      'Fundamentos de la Ingeniería de Software y Sistemas Computacionales',
      'Metodología y programación de sistemas',
      'Taller de introducción a la programación Windows',
      'Fundamentos de bases de datos',
      'Modelos matemáticos',
      'Lengua extranjera I',
      'Procesos y expresión del pensamiento',
    ],
  },
  {
    numero: 2,
    color: '#00C9FF',
    glow: 'rgba(0,201,255,0.4)',
    gradient: 'linear-gradient(135deg, #00C9FF 0%, #0072FF 100%)',
    materias: [
      'Modelado de sistemas',
      'Programación estructurada y orientada a objetos',
      'Programación orientada a entornos visuales',
      'Taller de desarrollo basado en los nuevos paradigmas',
      'Gestión de información en bases de datos',
      'Métodos numéricos en Ingeniería de Software',
      'Lengua extranjera II',
      'Creatividad y Comunicación',
    ],
  },
  {
    numero: 3,
    color: '#11998E',
    glow: 'rgba(17,153,142,0.4)',
    gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
    materias: [
      'Programación orientada a aspectos',
      'Programación para el desarrollo de aplicaciones web',
      'Diseño de la interfaz gráfica (front end)',
      'Matemáticas avanzadas aplicadas a la ingeniería',
      'Modelos estadísticos y probabilísticos',
      'Lengua extranjera III',
      'La persona y su interacción con los otros',
    ],
  },
  {
    numero: 4,
    color: '#F7971E',
    glow: 'rgba(247,151,30,0.4)',
    gradient: 'linear-gradient(135deg, #F7971E 0%, #FFD200 100%)',
    materias: [
      'Programación para plataformas OS X',
      'Desarrollo integral para aplicaciones empresariales',
      'Taller de desarrollo móvil para plataforma Windows',
      'Implementación e integración de servidores para el desarrollo de software',
      'Fundamentos de redes y ruteo',
      'Lengua extranjera IV',
      'Diálogo intercultural',
    ],
  },
  {
    numero: 5,
    color: '#F953C6',
    glow: 'rgba(249,83,198,0.4)',
    gradient: 'linear-gradient(135deg, #F953C6 0%, #B91D73 100%)',
    materias: [
      'Administración de proyectos tecnológicos',
      'Modelos abstractos para el desarrollo de software',
      'Taller de desarrollo móvil para plataforma Android',
      'Modelados y procesamiento de imágenes',
      'Administración de bases de datos',
      'Conmutación en redes de área local',
      'Metodología de la investigación',
      'Fe y desarrollo espiritual',
    ],
  },
  {
    numero: 6,
    color: '#4ECDC4',
    glow: 'rgba(78,205,196,0.4)',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
    materias: [
      'Calidad de desarrollo de software',
      'Taller de desarrollo móvil con entorno HTML',
      'Taller de desarrollo móvil para plataforma móvil',
      'Desarrollo de sistemas georeferenciados',
      'Desarrollo de almacenes de datos (Dataware)',
      'Tecnologías para redes de área extendida',
      'Emprendimiento sustentabilidad',
      'Asignatura 1 del área curricular común',
    ],
  },
  {
    numero: 7,
    color: '#FF6B6B',
    glow: 'rgba(255,107,107,0.4)',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFA500 100%)',
    materias: [
      'Desarrollo colaborativo',
      'Sistemas aplicados al desarrollo sustentable',
      'Realidad virtual',
      'Aplicación de sistemas Geo-referenciados',
      'Minería de datos',
      'Seguridad en sistemas de información',
      'Taller de empleo, autoempleo y actividad empresarial',
      'Valores y ética profesional',
    ],
  },
  {
    numero: 8,
    color: '#A8EDEA',
    glow: 'rgba(168,237,234,0.4)',
    gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)',
    materias: [
      'Reingeniería de software',
      'Integración de aplicaciones orientadas al modelo negocio',
      'Realidad aumentada',
      'Desarrollo de inteligencia de negocios',
      'Infraestructura de alta disponibilidad',
      'Taller de investigación',
      'Taller proyecto profesional ocupacional',
      'Asignatura 2 del área curricular común',
    ],
  },
];

const electivas = {
  grupos: [
    {
      titulo: 'Obligatoria Electiva 1',
      items: [
        'El Fenómeno Religioso',
        'El Mensaje Liberador de Jesús',
        'Fe Religiosa y Mundo Actual',
      ],
    },
    {
      titulo: 'Obligatoria Electiva 2 — Seminarios',
      items: [
        'Transformación de la Realidad Social desde las Humanidades',
        'Transformación de la Realidad Social desde la Ciencias Económico-Administrativas',
        'Transformación de la Realidad Social desde el Arte y el Diseño',
        'Transformación de la Realidad Social desde la Ciencia y la Tecnología',
        'Transformación de la Realidad Social desde las Ciencias de la Vida',
      ],
    },
  ],
};

/* ── Animations ─────────────────────────────────────────────── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Styled Components ──────────────────────────────────────── */
const Section = styled.section`
  padding: 6rem 1.5rem 8rem;
  background: var(--background);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-family: var(--font-body);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C084FC;
  border: 1px solid rgba(192,132,252,0.35);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  background: rgba(192,132,252,0.08);
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.5px;
  color: var(--foreground);
  margin-bottom: 1.2rem;
  background: linear-gradient(135deg, #fff 30%, #C084FC 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-family: var(--font-body);
  color: var(--muted-foreground);
  font-size: 1rem;
  max-width: 38rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNum = styled.div`
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 400;
  background: ${({ $grad }) => $grad};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--muted-foreground);
  font-family: var(--font-body);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 0.3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  border-radius: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(.23,1,.32,1),
              box-shadow 0.35s cubic-bezier(.23,1,.32,1),
              border-color 0.35s ease,
              opacity 0.5s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(30px)')};

  &:hover {
    transform: translateY(-6px) scale(1.01);
    border-color: ${({ $color }) => $color}55;
    box-shadow: 0 20px 60px ${({ $glow }) => $glow},
                0 4px 20px rgba(0,0,0,0.4);
  }
`;

const CardHeader = styled.div`
  padding: 1.4rem 1.6rem 1.2rem;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -40%;
    right: -10%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    right: 15%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
  }
`;

const SemNum = styled.div`
  font-family: var(--font-display);
  font-size: 3.2rem;
  font-weight: 400;
  color: rgba(255,255,255,0.25);
  line-height: 1;
  user-select: none;
`;

const SemLabel = styled.div`
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  z-index: 1;
`;

const CountBadge = styled.div`
  background: rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.72rem;
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  z-index: 1;
`;

const CardBody = styled.div`
  padding: 1.2rem 1.6rem 1.6rem;
  max-height: ${({ $open }) => ($open ? '600px' : '120px')};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(.23,1,.32,1);
`;

const MateriaList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const MateriaItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-family: var(--font-body);
  font-size: 0.83rem;
  color: var(--muted-foreground);
  line-height: 1.5;
  transition: color 0.2s ease;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    flex-shrink: 0;
    margin-top: 0.45em;
    box-shadow: 0 0 6px ${({ $color }) => $color};
  }

  &:hover {
    color: var(--foreground);
  }
`;

const ExpandBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 0.75rem 1.6rem;
  color: ${({ $color }) => $color};
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.03);
  }
`;

const ChevronIcon = styled.span`
  display: inline-block;
  transition: transform 0.35s ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const ElectivasCard = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(192,132,252,0.25);
  background: rgba(192,132,252,0.04);
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease both;
  animation-delay: 0.4s;
  transition: box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    border-color: rgba(192,132,252,0.45);
    box-shadow: 0 20px 60px rgba(192,132,252,0.2);
  }
`;

const ElectivasHeader = styled.div`
  padding: 1.4rem 1.6rem;
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -40%;
    right: -5%;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
  }
`;

const ElectivasTitle = styled.div`
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  letter-spacing: 0.05em;
  z-index: 1;
`;

const ElectivasBody = styled.div`
  padding: 1.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ElectivaGroup = styled.div``;

const ElectivaGroupTitle = styled.h4`
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #C084FC;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(192,132,252,0.2);
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg,
    #6C63FF 0%,
    #00C9FF 12.5%,
    #11998E 25%,
    #F7971E 37.5%,
    #F953C6 50%,
    #4ECDC4 62.5%,
    #FF6B6B 75%,
    #A8EDEA 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 4s linear infinite;
  width: 100%;
`;

const ProgLabel = styled.span`
  font-size: 0.72rem;
  font-family: var(--font-body);
  color: var(--muted-foreground);
  white-space: nowrap;
`;

/* ── Component ───────────────────────────────────────────────── */
const MapaCurricular = () => {
  const [openCards, setOpenCards] = useState({});
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  const toggleCard = (idx) => {
    setOpenCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => ({ ...prev, [idx]: true }));
            }, idx * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const totalMaterias = semestres.reduce((acc, s) => acc + s.materias.length, 0);

  return (
    <Section id="mapa-curricular">
      <Container>
        {/* Header */}
        <Header>
          <Badge>Ingeniería de Software</Badge>
          <Title>Mapa Curricular</Title>
          <Subtitle>
            Ocho semestres de formación integral en el desarrollo de software,
            tecnologías emergentes y liderazgo tecnológico.
          </Subtitle>
        </Header>

        {/* Stats */}
        <StatsBar>
          <Stat>
            <StatNum $grad="linear-gradient(135deg,#6C63FF,#C084FC)">8</StatNum>
            <StatLabel>Semestres</StatLabel>
          </Stat>
          <Stat>
            <StatNum $grad="linear-gradient(135deg,#00C9FF,#11998E)">{totalMaterias}</StatNum>
            <StatLabel>Materias principales</StatLabel>
          </Stat>
          <Stat>
            <StatNum $grad="linear-gradient(135deg,#F953C6,#FF6B6B)">5</StatNum>
            <StatLabel>Lenguas extranjeras</StatLabel>
          </Stat>
          <Stat>
            <StatNum $grad="linear-gradient(135deg,#F7971E,#FFD200)">4</StatNum>
            <StatLabel>Áreas de especialización</StatLabel>
          </Stat>
        </StatsBar>

        {/* Progress bar */}
        <ProgressBar>
          <ProgLabel>1° Sem</ProgLabel>
          <ProgressTrack>
            <ProgressFill />
          </ProgressTrack>
          <ProgLabel>8° Sem</ProgLabel>
        </ProgressBar>

        {/* Semester grid */}
        <Grid>
          {semestres.map((sem, idx) => (
            <Card
              key={sem.numero}
              $color={sem.color}
              $glow={sem.glow}
              $visible={visibleCards[idx]}
              ref={(el) => (cardRefs.current[idx] = el)}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <CardHeader $gradient={sem.gradient}>
                <div>
                  <SemLabel>Semestre {sem.numero}</SemLabel>
                  <SemNum>0{sem.numero}</SemNum>
                </div>
                <CountBadge>{sem.materias.length} materias</CountBadge>
              </CardHeader>

              <CardBody $open={openCards[idx]}>
                <MateriaList>
                  {sem.materias.map((mat, i) => (
                    <MateriaItem key={i} $color={sem.color}>
                      {mat}
                    </MateriaItem>
                  ))}
                </MateriaList>
              </CardBody>

              <ExpandBtn $color={sem.color} onClick={() => toggleCard(idx)}>
                {openCards[idx] ? 'Ver menos' : 'Ver todas las materias'}
                <ChevronIcon $open={openCards[idx]}>▾</ChevronIcon>
              </ExpandBtn>
            </Card>
          ))}
        </Grid>

        {/* Electivas */}
        <ElectivasCard>
          <ElectivasHeader>
            <ElectivasTitle>⭐ Asignaturas Obligatorias Electivas del Área Común</ElectivasTitle>
          </ElectivasHeader>
          <ElectivasBody>
            {electivas.grupos.map((grupo, i) => (
              <ElectivaGroup key={i}>
                <ElectivaGroupTitle>{grupo.titulo}</ElectivaGroupTitle>
                <MateriaList>
                  {grupo.items.map((item, j) => (
                    <MateriaItem key={j} $color="#C084FC">
                      {item}
                    </MateriaItem>
                  ))}
                </MateriaList>
              </ElectivaGroup>
            ))}
          </ElectivasBody>
        </ElectivasCard>
      </Container>
    </Section>
  );
};

export default MapaCurricular;
