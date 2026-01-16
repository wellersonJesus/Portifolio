import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import { Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';
import logo from './assets/images/logo.jpg';
import devLogo from './assets/images/dev.png';

// --- DADOS DO PORTFÓLIO ---
const PortifolioData = {
  personal: {
    name: "Wellerson de Jesus Silva",
    role: "Development | SRE | Software Architect | Software Engineer",
    email: "wellersonjesus46@gmail.com",
    phone: "+55 (31) 99332-7287",
    address: "Rua Ismar Francisco da Silva 101, CEP: 31-680-420",
    photo: logo,
    aboutTitle: "Sobre Mim",
    aboutDescription: "Desenvolvedor PHP, atuando no desenvolvimento de aplicações web e back-end escaláveis, seguras e orientadas a resultados. Possuo experiência na criação de APIs REST, integração com bancos de dados PostgreSQL e MySQL, autenticação com JWT e OAuth2 e desenvolvimento de sistemas personalizados. Trabalho desde a análise de requisitos até a entrega final, aplicando boas práticas, organização de código, performance e manutenibilidade, além de integração com interfaces modernas e automação de deploy."
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
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={devLogo}
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle me-2"
          alt={PortifolioData.personal.name}
          style={{ objectFit: 'cover' }}
        />
        <span className="fw-bold" style={{ color: '#111151' }}>{PortifolioData.personal.name}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
          <Nav.Link href="#experiencia">Experiência</Nav.Link>
          <Nav.Link href="#habilidades">Habilidades</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const About = () => (
  <section id="sobre" className="py-5">
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

const Journey = () => (
  <section id="jornada" className="py-5 text-white" style={{ backgroundColor: '#111151', fontFamily: "'Fredoka', sans-serif" }}>
    <Container>
      <h2 className="text-center display-4 mb-5">Jornada de Aprendizado</h2>
      <div className="position-relative py-4">
         {/* Linha do tempo (visível apenas em telas médias para cima) */}
         <div className="d-none d-md-block position-absolute top-50 start-0 w-100 translate-middle-y bg-white" style={{ height: '4px', opacity: 0.5, borderRadius: '2px' }}></div>
         
         <Row className="justify-content-center">
           {[...PortifolioData.education]
             .sort((a, b) => parseInt(a.period.match(/\d{4}/)?.[0] || 0) - parseInt(b.period.match(/\d{4}/)?.[0] || 0))
             .map((edu, index) => (
             <Col key={index} xs={12} md={4} className="text-center mb-5 mb-md-0">
                <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle shadow mb-3 position-relative z-1" 
                     style={{ width: '160px', height: '160px', border: '6px solid #293237', color: '#111151' }}>
                   <div className="d-flex flex-column">
                      <span className="h2 m-0 fw-bold">{edu.period.match(/\d{4}/)?.[0]}</span>
                      <span className="small text-muted fw-bold">Conclusão</span>
                   </div>
                </div>
                <h4 className="fw-bold mt-3">{edu.course}</h4>
                <p className="text-white-50 lead mb-1" style={{fontSize: '1rem'}}>{edu.institution}</p>
             </Col>
           ))}
         </Row>
      </div>
    </Container>
  </section>
);

const Experience = () => {
  // Usando a ordem original (do mais recente para o mais antigo)
  const sortedExperiences = PortifolioData.experiences;

  return (
    <section id="experiencia" className="py-5" style={{ backgroundColor: '#f0f8ff', fontFamily: "'Fredoka', sans-serif", overflowX: 'hidden' }}>
      <Container fluid="lg">
        <h2 className="text-center mb-5 display-4" style={{ color: '#111151' }}>Experiência Profissional</h2>
        
        <div className="position-relative py-4">
            {/* Linha contínua (estilo Jornada) */}
            <div className="d-none d-lg-block position-absolute top-50 start-0 w-100 translate-middle-y" style={{ height: '4px', backgroundColor: '#293237', opacity: 0.5, borderRadius: '2px' }}></div>

            <div className="d-flex flex-column flex-lg-row flex-lg-nowrap justify-content-center align-items-center gap-4">
                {sortedExperiences.map((exp, index) => (
                    <React.Fragment key={index}>
                    <div 
                        className="position-relative p-3 bg-white rounded-4 shadow-lg" 
                        style={{ 
                            width: '150px', 
                            minWidth: '150px',
                            border: '4px solid #293237',
                            zIndex: 10 - index
                        }}
                    >
                        <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill shadow px-2 py-1" style={{ backgroundColor: '#ffffff', color: '#111151', border: '2px solid #293237', fontSize: '0.75rem', width: 'max-content' }}>
                            {exp.period.includes('Atuante') ? (
                                <>
                                    {exp.period.replace('Atuante', '')}
                                    <span className="text-primary" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Atuante</span>
                                </>
                            ) : exp.period}
                        </div>
                        <h6 className="fw-bold mt-3 text-center" style={{ color: '#111151', fontSize: '1rem' }}>{exp.role}</h6>
                        <div className="text-center text-muted fst-italic mb-2" style={{ fontSize: '0.8rem' }}>@ {exp.company}</div>
                        <p className="text-center mb-0" style={{ lineHeight: '1.2', fontSize: '0.75rem' }}>{exp.description}</p>
                    </div>
                    {exp.period === "Jan/2014 – Dez/2020" && (
                        <div 
                            className="d-none d-lg-block rounded-circle" 
                            style={{ 
                                width: '25px', 
                                height: '25px', 
                                border: '4px solid #293237', 
                                backgroundColor: '#f0f8ff',
                                flexShrink: 0,
                                zIndex: 1,
                                marginLeft: '60px'
                            }}
                        ></div>
                    )}
                    </React.Fragment>
                ))}
            </div>
        </div>
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
    <section id="habilidades" className="py-5 bg-light" style={{ fontFamily: "'Fredoka', sans-serif" }}>
      <Container>
        <h2 className="text-center mb-5 display-4" style={{ color: '#111151' }}>Habilidades & Competências</h2>
        <Row>
          {Object.keys(PortifolioData.skills).map((category, index) => (
            <Col key={category} md={6} className="mb-4">
              <div className="h-100 p-4 bg-white rounded-4 shadow-sm border-top border-5" style={{ borderColor: index % 2 === 0 ? '#111151' : '#293237' }}>
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

const Contact = () => {
  const getIcon = (name) => {
    switch(name) {
      case 'Instagram': return <Instagram size={30} />;
      case 'LinkedIn': return <Linkedin size={30} />;
      case 'Youtube': return <Youtube size={30} />;
      default: return null;
    }
  };

  return (
    <section id="contato" className="py-5 text-white" style={{ backgroundColor: '#111151' }}>
      <Container>
        <h2 className="mb-3 text-center">Contato</h2>
        <Row className="justify-content-center align-items-center">
          <Col md={5} className="d-flex justify-content-end align-items-center gap-4 border-end pe-4">
            {PortifolioData.social.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
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
      </main>
      <Contact />
    </div>
  );
}

export default App;