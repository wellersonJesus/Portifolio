import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Image, Card, Badge } from 'react-bootstrap';
import { Instagram, Linkedin, Youtube, BoxArrowUpRight, AwardFill } from 'react-bootstrap-icons';
import logo from './assets/images/logo.jpg';
import devLogo from './assets/images/dev.png';

// --- DADOS DO PORTFÓLIO ---
const PortifolioData = {
  personal: {
    name: "Wellerson de Jesus Silva",
    role: "Development | SRE | Software Architect | Software Engineer",
    email: "wellersonjesus46@gmail.com",
    phone: "+55 (31) 9 9332-7287",
    address: "Belo Horizonte - MG, CEP: 31-680-420",
    photo: logo,
    aboutTitle: "Sobre Mim",
    aboutDescription: "Desenvolvedor PHP, atuando no desenvolvimento de aplicações web e fullStack escaláveis, seguras e orientadas a resultados. Possuo experiência na criação de APIs REST, integração com bancos de dados PostgreSQL e MySQL, autenticação com JWT e OAuth2 e desenvolvimento de sistemas personalizados. Trabalho desde a análise de requisitos até a entrega final, aplicando boas práticas, organização de código, performance e manutenibilidade, além de integração com interfaces modernas e automação de deploy."
  },
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/wellerson.jesus"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/wellerson-jesus-37831540/"
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@startupinfowell-dastliberd5648"
    }
  ],
  experiences: [
    {
      role: "Software Engineer",
      company: "Freelancer",
      period: "Fev/2023 – Atuante",
      description: "Desenvolvimento de aplicações Web e Desktop focadas em performance e escalabilidade. Especialista em stack moderna: PHP, Node.js, TypeScript, React e arquitetura de Micro-serviços. Configuração e automação de infraestrutura Cloud (Heroku, Digital Ocean) utilizando Docker, Kubernetes e Terraform."
    },
    {
      role: "Desenvolvedor FullStack",
      company: "Agritech Tecnologias Móveis Ltda.",
      period: "Jul/2023 – Nov/2024",
      description: "Atuação em todo o ciclo de vida do software (Full Cycle), desde a análise de requisitos e arquitetura até a implementação e manutenção. Foco em qualidade e testes, garantindo a integração contínua de soluções funcionais e escaláveis para necessidades organizacionais."
    },
    {
      role: "Software Developer",
      company: "Qesh Development Software",
      period: "Dez/2021 – Fev/2023",
      description: "Implementação de micro-serviços com ênfase em bancos de dados (MySQL, MongoDB, PostgreSQL) e práticas de TDD. Documentação de APIs REST e operação diária em ambiente Linux com Docker. Colaboração em equipes ágeis utilizando Git (GitHub/GitLab) para controle de versão."
    },
    {
      role: "Professor de Tecnologia",
      company: "ONGs",
      period: "Jan/2019 – Mar/2020",
      description: "Instrução técnica em informática e tecnologias para diferentes níveis acadêmicos, de ensino fundamental a pós-graduados e pesquisadores."
    },
    {
      role: "Software Engineer & Fundador",
      company: "InfoWell-DAST",
      period: "Jan/2014 – Dez/2020",
      description: "Liderança técnica e fundação de Startup focada em prestação de serviços tecnológicos e desenvolvimento para empresas e pessoas físicas. Idealizador projeto M.L.F (Marketing Liberdade Financeira), focado em mentoria tecnológica para vendas online e novos empreendedores."
    }
  ],
  education: [
    {
      course: "Redes de computadores",
      institution: "Faculdade de Tecnologia Pitagoras",
      period: "até Dec/2012"
    },
    {
      course: "Ensino médio científico",
      institution: "Colégio Estadual Central",
      period: "até Jan/2000"
    },
    {
      course: "Mecânico de Manutenção Maquinas Operatrizes",
      institution: "SENAI Américo Renné Giannetti",
      period: "até Jan/1998"
    }    
  ],
  educationAndCertifications: [
    {
      course: "Configuração e Deploy na nuvem Microsoft Azure Cloud",
      institution: "Digital Innovation One Inc.",
      period: "mai. de 2021",
      credentialId: "56538B74"
    },
    {
      course: "Desenvolvimento Web avançado 2021 com PHP - Laravel - Vue.JS",
      institution: "Udemy Brasil",
      period: "mai. de 2021",
      credentialId: "73d0904570b0"
    },
    {
      course: "Introdução a orquestração de contêineres com Docker",
      institution: "Digital Innovation One Inc.",
      period: "mai. de 2021",
      credentialId: "F3CAE2B6"
    },
    {
      course: "Introdução ao sistema operacional linux",
      institution: "Udemy Brasil",
      period: "mai. de 2021",
      credentialId: "https://alfahelix.com.br/certificados/gerar/certificado.php"
    },
    {
      course: "Terminal Linux",
      institution: "Udemy Brasil",
      period: "mai. de 2021",
      credentialId: null
    },
    {
      course: "Bem-vindo à DIO",
      institution: "Digital Innovation One Inc.",
      period: "abr. de 2021",
      credentialId: "06B9371E"
    },
    {
      course: "Boas-vindas ao Bootcamp Code Anywhere",
      institution: "Digital Innovation One Inc.",
      period: "abr. de 2021",
      credentialId: "0E48BC11"
    },
    {
      course: "Lógica de programação essencial",
      institution: "Digital Innovation One Inc.",
      period: "abr. de 2021",
      credentialId: "11B4B4C7"
    },
    {
      course: "Aprenda a aplicar testes com Java",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "3DE3114E"
    },
    {
      course: "Criando aplicações web com Spring Web MVC",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "C6D6E96E"
    },
    {
      course: "Desenvolvimento avançado com JavaScript ES6",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "CE56459A"
    },
    {
      course: "Desenvolvimento básico em Java",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "89CD5089"
    },
    {
      course: "Implementando Collections e Streams com Java",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "920A5C93"
    },
    {
      course: "Introdução a JSF para aplicação web",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "ED234B78"
    },
    {
      course: "Introdução ao framework Spring Boot",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "1B7780C4"
    },
    {
      course: "Introdução à biblioteca jQuery",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "39137797"
    },
    {
      course: "JavaScript ES6 essencial",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "C67DC118"
    },
    {
      course: "Programação para internet com JavaScript",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "485B09F0"
    },
    {
      course: "Trabalhando com Banco de Dados utilizando JDBC e JPA",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "8E45D4FC"
    },
    {
      course: "Técnicas avançadas em Angular 8",
      institution: "Digital Innovation One Inc.",
      period: "jan. de 2021",
      credentialId: "093A03C5"
    },
    {
      course: "Introdução ao Angular 8",
      institution: "Digital Innovation One Inc.",
      period: "dez. de 2020",
      credentialId: "492300A7"
    },
    {
      course: "Aplicações avançadas com Angular",
      institution: "Digital Innovation One Inc.",
      period: "nov. de 2019",
      credentialId: "8E291E31"
    },
    {
      course: "Spring Boot Hibernate, rest, ionic, jwt, s3 mysql, mongoDb",
      institution: "Udemy Brasil",
      period: "fev. de 2019",
      credentialId: "FUC-HXBSYXOM"
    },
    {
      course: "Redes de computadores",
      institution: "Faculdade de Tecnologia Pitagoras",
      period: "até Dec/2012",
      credentialId: null
    },
    {
      course: "Ensino médio científico",
      institution: "Colégio Estadual Central",
      period: "até Jan/2000",
      credentialId: null
    },
    {
      course: "Mecânico de Manutenção Maquinas Operatrizes",
      institution: "SENAI Américo Renné Giannetti",
      period: "até Jan/1998",
      credentialId: null
    }
  ],
  skills: {
    "Linguagens & Frameworks": ["Node.js", "TypeScript", "JavaScript", "PHP", "Laravel", "Java", "Spring Boot", "React", "Angular", "Bootstrap", "Python"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "Heroku", "Digital Ocean", "CI/CD"],
    "Bancos de Dados": ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Oracle"],
    "Ferramentas & Sistemas": ["GIT", "Github", "Gitlab", "Linux", "Microsoft"],
    "Arquitetura & Metodologias": ["Micro-serviços", "APIs RESTful", "MVC", "Metodologias Ágeis"]
  }
};

// --- COMPONENTES INTERNOS ---

const Header = () => (
  <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
    <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center me-auto" style={{ minWidth: 0 }}>
        <img
          src={devLogo}
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle me-2 flex-shrink-0"
          alt={PortifolioData.personal.name}
          style={{ objectFit: 'cover' }}
        />
        <span className="fw-bold text-truncate d-none d-sm-block" style={{ color: '#111151' }}>{PortifolioData.personal.name}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ms-auto text-end">
          <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
          <Nav.Link href="#experiencia">Experiência</Nav.Link>
          <Nav.Link href="#habilidades">Habilidades</Nav.Link>
          <Nav.Link href="#certificacao">Certificações</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const About = () => (
  <section id="sobre" className="py-5" style={{ backgroundColor: '#ffffff' }}>
    <Container>
      <h2 className="text-center mb-4" style={{ color: '#111151' }}>{PortifolioData.personal.aboutTitle}</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image 
            src={PortifolioData.personal.photo} 
            alt={PortifolioData.personal.name}
            roundedCircle 
            fluid 
            style={{ width: '250px', height: '250px', objectFit: 'cover', border: '4px solid #111151' }} 
          />
        </Col>
        <Col md={8}>
          <h4 style={{ color: '#293237' }}>{PortifolioData.personal.role}</h4>
          <p className="lead">{PortifolioData.personal.aboutDescription}</p>
        </Col>
      </Row>
    </Container>
  </section>
);

const Journey = () => {
  const groupedData = PortifolioData.educationAndCertifications.reduce((acc, curr) => {
    const year = curr.period.match(/\d{4}/)?.[0];
    if (year) {
      if (!acc[year]) acc[year] = [];
      acc[year].push(curr);
    }
    return acc;
  }, {});

  const years = Object.keys(groupedData).sort((a, b) => parseInt(b) - parseInt(a));
  
  // Divide os anos em grupos de 3 para criar linhas separadas
  const chunkedYears = [];
  for (let i = 0; i < years.length; i += 3) {
    chunkedYears.push(years.slice(i, i + 3));
  }

  return (
    <section id="jornada" className="py-5 text-white" style={{ backgroundColor: '#111151', fontFamily: "'Fredoka', sans-serif" }}>
      <Container>
        <h2 className="text-center display-4 mb-5">Jornada de Aprendizado</h2>
        
        {chunkedYears.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="position-relative mb-5">
             {/* Linha do tempo (visível apenas em telas médias para cima) */}
             <div className="d-none d-md-block position-absolute start-0 w-100 bg-white" 
                  style={{ height: '4px', opacity: 0.5, borderRadius: '2px', top: '80px', zIndex: 0 }}></div>
             
             <Row className="justify-content-center">
               {chunk.map((year) => {
                 const items = groupedData[year];
                 const formal = items.find(i => PortifolioData.education.some(e => e.course === i.course));
                 
                 let title = formal ? formal.course : (items.length > 1 ? "Cursos e Certificações" : items[0].course);
                 let subtitle = formal ? formal.institution : (items.length > 1 ? `${items.length} Conclusões` : items[0].institution);

                 return (
                   <Col key={year} xs={12} md={4} className="text-center mb-5 mb-md-0">
                      <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle shadow-sm mb-3 position-relative interactive-block" 
                           style={{ width: '160px', height: '160px', border: '6px solid #293237', color: '#111151', zIndex: 1 }}>
                         <div className="d-flex flex-column">
                            <span className="h2 m-0 fw-bold">{year}</span>
                            <span className="small text-muted fw-bold">Conclusão</span>
                         </div>
                      </div>
                      <h4 className="fw-bold mt-3">{title}</h4>
                      <p className="text-white-50 lead mb-1" style={{fontSize: '1rem'}}>{subtitle}</p>
                   </Col>
                 );
               })}
             </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

const Experience = () => {
  // Usando a ordem original (do mais recente para o mais antigo)
  const sortedExperiences = PortifolioData.experiences;

  return (
    <section id="experiencia" className="py-5" style={{ backgroundColor: '#f0f8ff', fontFamily: "'Fredoka', sans-serif" }}>
      <Container>
        <h2 className="text-center mb-5 display-4" style={{ color: '#111151' }}>Experiência Profissional</h2>
        
        <Row className="justify-content-center g-4">
            {sortedExperiences.map((exp, index) => (
                <Col key={index} md={6} lg={4} className="d-flex align-items-stretch">
                    <div 
                        className="position-relative p-4 bg-white rounded-4 shadow-sm w-100 interactive-block" 
                        style={{ 
                            border: '4px solid #293237',
                        }}
                    >
                        <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill shadow px-3 py-2" style={{ backgroundColor: '#ffffff', color: '#111151', border: '2px solid #293237', fontSize: '0.85rem', width: 'max-content' }}>
                            {exp.period.includes('Atuante') ? (
                                <>
                                    {exp.period.replace('Atuante', '')}
                                    <span className="text-primary" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Atuante</span>
                                </>
                            ) : exp.period}
                        </div>
                        <h5 className="fw-bold mt-4 text-center" style={{ color: '#111151' }}>{exp.role}</h5>
                        <div className="text-center text-muted fst-italic mb-3">@ {exp.company}</div>
                        <p className="text-center mb-0" style={{ lineHeight: '1.5' }}>{exp.description}</p>
                    </div>
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

const Skills = () => {
  const getSkillIcon = (skillName) => {
    const icons = {
      "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      "Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      "Digital Ocean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
      "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "MariaDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
      "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      "GIT": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "Github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "Gitlab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      "Microsoft": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    };
    return icons[skillName];
  };

  return (
    <section id="habilidades" className="py-5" style={{ backgroundColor: '#e9ecef', fontFamily: "'Fredoka', sans-serif" }}>
      <Container>
        <h2 className="text-center mb-5 display-4" style={{ color: '#111151' }}>Habilidades & Competências</h2>
        <Row>
          {Object.keys(PortifolioData.skills).map((category, index) => (
            <Col key={category} md={6} className="mb-4">
              <div className="h-100 p-4 bg-white rounded-4 shadow-sm border-top border-5 interactive-block" style={{ borderColor: index % 2 === 0 ? '#111151' : '#293237' }}>
                <h3 className="text-center mb-4 fw-bold" style={{ color: '#293237' }}>{category}</h3>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {PortifolioData.skills[category].map(skill => {
                    const iconUrl = getSkillIcon(skill);
                    return iconUrl ? (
                      <div key={skill} className="text-center" style={{ width: '80px' }}>
                        <img src={iconUrl} alt={skill} width="50" height="50" className="mb-2" />
                        <div className="small fw-bold text-muted">{skill}</div>
                      </div>
                    ) : (
                      <span key={skill} className="badge p-2 d-flex align-items-center" style={{ backgroundColor: '#111151', fontSize: '0.9rem', height: 'fit-content' }}>
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certificacao" className="py-5" style={{ backgroundColor: '#dbe9f4', fontFamily: "'Fredoka', sans-serif" }}>
      <Container>
        <h2 className="text-center mb-5 display-4" style={{ color: '#111151' }}>Educação e Certificações</h2>
        <Row className="g-3">
          {PortifolioData.educationAndCertifications.map((cert, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 rounded-3">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg="secondary">{cert.period}</Badge>
                    <AwardFill size={26} style={{ color: '#D4AF37', filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.1))' }} />
                  </div>
                  <Card.Title className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>{cert.course}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{cert.institution}</Card.Subtitle>
                  
                  <div className="mt-auto pt-3 border-top">
                    {cert.credentialId ? (
                      cert.credentialId.startsWith('http') ? (
                        <a href={cert.credentialId} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: '#111151' }}>
                          <BoxArrowUpRight size={14} /> Ver Credencial
                        </a>
                      ) : (
                        <small className="text-muted font-monospace">ID: {cert.credentialId}</small>
                      )
                    ) : (
                      <small className="text-muted fst-italic">Concluído</small>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Contact = () => {
  const getIcon = (name) => {
    switch(name) {
      case 'Instagram': return <Instagram size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Youtube': return <Youtube size={20} />;
      default: return null;
    }
  };

  return (
    <section id="contato" className="py-3 text-white" style={{ backgroundColor: '#111151' }}>
      <Container>
        <Row className="justify-content-center align-items-center gy-3">
          <Col md={5} className="d-flex justify-content-end align-items-center gap-4 border-end pe-4">
            {PortifolioData.social.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              >
                {getIcon(social.name)}
              </a>
            ))}
          </Col>
          <Col md={5} className="d-flex flex-column gap-1 ps-4">
            <a href={`mailto:${PortifolioData.personal.email}`} className="text-white text-decoration-none opacity-75" style={{ fontSize: '0.9rem' }}>{PortifolioData.personal.email}</a>
            <span className="opacity-75" style={{ fontSize: '0.9rem' }}>{PortifolioData.personal.phone}</span>
            <span className="opacity-75" style={{ fontSize: '0.9rem' }}>{PortifolioData.personal.address}</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      <Header />
      <main>
        <About />
        <Journey />
        <Experience />
        <Skills />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;