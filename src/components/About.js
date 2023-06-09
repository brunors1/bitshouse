import React from 'react';
import '../styles/About.css'
import AboutImage1 from '../assets/images/leilani-angel-persona.jpg'
import AboutImage2 from '../assets/images/jake-nakos-persona.jpg'
import AboutImage3 from '../assets/images/robert-godwin-persona.jpg'

const About = () => {
  return (
    <div className='container py-3'>
      <div className='bg-white  border rounded p-4 mb-3'> 
        <h1 className='text-center text-success'>Sobre a BitsHouse</h1>
        <div className='m-5 fw-semibold'>
            <p>
                A BitsHouse é uma renomada empresa de e-commerce especializada na venda de componentes de computadores. Desde a nossa fundação, há mais de uma década, nos dedicamos a fornecer aos nossos clientes uma ampla variedade de produtos de alta qualidade para atender às suas necessidades tecnológicas.
            </p>
            <p>
                Nosso compromisso é oferecer uma experiência de compra excepcional, combinando uma vasta seleção de componentes de última geração com um atendimento personalizado e suporte técnico especializado. Trabalhamos apenas com os melhores fabricantes e marcas do mercado, garantindo que nossos clientes tenham acesso aos mais recentes avanços em tecnologia.
            </p>
            <p>
                Na BitsHouse, você encontrará uma ampla gama de produtos, incluindo processadores, placas-mãe, memórias RAM, placas de vídeo, unidades de armazenamento, fontes de alimentação, gabinetes, periféricos e muito mais. Nossa equipe de especialistas está sempre pronta para ajudá-lo a encontrar os componentes ideais para aprimorar o desempenho e a funcionalidade do seu computador.
            </p>
            <p>
                Além da qualidade dos produtos, nos orgulhamos de oferecer preços competitivos e promoções exclusivas aos nossos clientes. Acreditamos que a tecnologia de ponta deve ser acessível a todos os entusiastas e profissionais da área. Portanto, buscamos constantemente negociar os melhores acordos com nossos fornecedores para garantir que você obtenha o melhor custo-benefício em cada compra.
            </p>
            <p>
                Agradecemos por escolher a BitsHouse como sua parceira de confiança em componentes de computadores. Estamos aqui para ajudá-lo a transformar suas ideias e projetos em realidade, oferecendo as melhores soluções tecnológicas para impulsionar seu desempenho e criatividade. Explore nosso catálogo online e descubra a qualidade, variedade e inovação que a BitsHouse tem a oferecer!
            </p>
        </div>    
      </div>
      <div className='bg-white border rounded p-4 mb-3'> 
        <h1 className='text-center text-success'>Equipe</h1>
        <div className="row text-center">
            <div className="col-lg-4">
            <img
                className="aboutpage-img rounded-circle my-4 border border-success-subtle"
                src={AboutImage1}
                alt="Foto de Leilani Angel, Gerente de Marketing"
            />
            <h2 className="fs-3"><i className="fa-solid fa-star fa-2xs text-warning"></i> Leilani Angel <i className="fa-solid fa-star fa-2xs text-warning"></i></h2>
            <p className='fw-bold text-success'>Gerente de Marketing</p>
            </div>
            <div className="col-lg-4">
            <img
                className="aboutpage-img rounded-circle my-4 border border-success-subtle"
                src={AboutImage2}
                alt="Foto de Jake Nakos, Diretor de Tecnologia"
            />
            <h2 className="fs-3"><i className="fa-solid fa-star fa-2xs text-warning"></i> Jake Nakos <i className="fa-solid fa-star fa-2xs text-warning"></i></h2>
            <p className='fw-bold text-success'>Diretor de Tecnologia</p>
            </div>
            <div className="col-lg-4">
            <img
                className="aboutpage-img rounded-circle my-4 border border-success-subtle"
                src={AboutImage3}
                alt="Foto de Robert Godwin, CEO da empresa"
            />
            <h2 className="fs-3"><i className="fa-solid fa-star fa-2xs text-warning"></i> Robert Godwin <i className="fa-solid fa-star fa-2xs text-warning"></i></h2>
            <p className='fw-bold text-success'>CEO da empresa</p>
            </div>
        </div>
      </div>
      <div className='bg-white border rounded p-4'>
        <h1 className='text-center text-success'>Contato</h1>
        <p className='text-center fw-semibold'>
            Tem alguma dúvida ou sugestão? Entre em contato conosco através do nosso formulário online ou pelos nossos canais de atendimento listados abaixo:
        </p>
        <div className="row mt-5 ">
            <div className="col-lg-6 p-4 rounded border bg-secondary-subtle border-success-subtle fw-semibold">
                <h4 className='text-center text-success'>Formulário</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Nome:</label>
                        <input type="text" className="form-control border-success-subtle" id="nameInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">E-mail:</label>
                        <input type="email" className="form-control border-success-subtle" id="emailInput" />
                        <div id="emailHelp" className="form-text fw-normal">Nós nunca compartilharemos seu e-mail com ninguém.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="messageInput" className="form-label">Mensagem:</label>
                        <textarea className="form-control border-success-subtle" id="messageInput" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success fw-semibold">Enviar</button>
                </form>
            </div>
            <div className="col-lg-6 p-4 d-flex justify-content-center align-items-center ">
                <div>
                    <div className='border bg-body-secondary border-success-subtle rounded'>
                    <h4 className='text-center text-success pt-3'>Canais de Atendimento</h4>
                        <ul>
                            <li className='p-3 fw-semibold'><span className='fw-bold text-success'><i className="fa-solid fa-envelope text-warning px-2"></i> E-mail:</span> contato@bitshouse.com</li>
                            <li className='pb-3 px-3 fw-semibold'><span className='fw-bold text-success'><i className="fa-solid fa-phone text-warning px-2"></i> Telefone:</span> (11) 4000-4000</li>
                            <li className='pb-3 px-3 fw-semibold'><span className='fw-bold text-success'><i className="fa-solid fa-location-dot text-warning px-2"></i> Endereço:</span> Rua Exemplo, 123 / São Paulo - SP</li>
                            <li className='pb-3 px-3 fw-semibold'><span className='fw-bold text-success'><i className="fa-solid fa-location-arrow text-warning px-2"></i> CEP:</span> 0600-000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    </div>
  );
};

export default About;
