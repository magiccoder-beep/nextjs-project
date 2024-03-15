import SmileImg from '../assets/smile.png';
import { useState, useRef } from 'react';
import Stepper from './Stepper';
import Toggle from './Toggle';
import builderBg from '../assets/builderBg.jpg'
import visualOne from '../assets/visualOne.png'
import brandingImg from '../assets/brandingImg.png'
import redesImg from '../assets/redesImg.png'
import webImg from '../assets/webImg.png'
import conversaoImg from '../assets/conversaoImg.png'
import simpleLogoWhite from '../assets/simpleLogoWhite.svg'
import verticalBarcode from '../assets/verticalBarcode.svg'
import smileSvg from '../assets/smileYellow.svg'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import LeadingIconInput from './atoms/inputs/Variants/LeadingIconInput';
import LeadingDropdownInput from './atoms/inputs/Variants/LeadingDropdownInput';
import ValidationErrorInput from './atoms/inputs/Variants/ValidationErrorInput';
import ValidationErrorMessage from './atoms/inputs/Variants/ValidationErrorMessage';

import InlineAddOnInput from './atoms/inputs/Variants/InlineAddOnInput';
import contactImg from '../assets/contactImg.png';
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Confetti from 'react-confetti';
import { calcConst } from '@/const/calculateConst';
import FinalResultComponent from './BuilderSubComponents/FinalResultComponent';

const stepImages = {
  branding: brandingImg,
  socialMedia: redesImg,
  web: webImg,
  conversion: conversaoImg,
};

const smileSize = 40; // Assumindo que o tamanho do smile SVG seja 30px
const maxPerRow = 5; // Máximo número de SVGs por linha
const verticalSpacing = 10; // Espaço vertical entre SVGs

const randomPositionStyle = (index) => {
  // Distribui os ícones em colunas e linhas
  const row = Math.floor(index / maxPerRow);
  const col = index % maxPerRow;
  // Adiciona um deslocamento aleatório em cada linha para o efeito xadrez
  const offsetX = (Math.random() - 0.5) * (100 / maxPerRow - smileSize);
  const offsetY = (Math.random() - 0.5) * verticalSpacing;

  return {
    top: `calc(${row * verticalSpacing}vh + ${offsetY}px)`,
    left: `calc(${col * (100 / maxPerRow)}% + ${offsetX}px)`,
    transform: 'translate(-50%, -50%)', // Centraliza o SVG em sua posição "top" e "left"
  };
};

const renderSmiles = (amount) => {
  return Array.from({ length: amount }).map((_, index) => (
    <img
      key={index}
      src={smileSvg.src}
      alt="Smile"
      style={randomPositionStyle()}
    />
  ));
};
  


export default function Builder() {

  //last step user info
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [userEmailValid, setUserEmailValid] = useState(true);

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeUserEmail = (value) => {
    console.log("useremailChanged", validateEmail(value));
    if (!validateEmail(value)) {
      setUserEmailValid(false);
    } else {
      setUserEmailValid(true);
    }
    setUserEmail(value);
  };
  const onChangeUserName = (value) => {
    setUserName(value);
  };
  const onChangePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  //total value and day state
  const [totalValue, setTotalValue] = useState(0);
  const [totalDay, setTotalDay] = useState(0);

  // Estado para controlar o passo atual do stepper
  const [currentStep, setCurrentStep] = useState(0);
  
  // Estado para controlar os toggles para cada passo
  const [toggles, setToggles] = useState({
    'Branding': {
      'Logo': false,
      'Paleta de cores': false,
      'Tipografia': false,
      'Design de camisetas': false,
    },
    'Redes sociais': {
      'Bio profissional': false,
      'Chatbot': false,
      'Destacados': false,
      'Templates para posts': false,
      'Templates para stories': false,
    },
    'Web': {
      'Página de links': false,
      'Website': false,
    },
    'Conversão': {
      'Integração CRM': false,
      'Estar no Google Maps': false,
      'Calendário automático': false,
    },
  });

  // Função para lidar com a mudança dos toggles
  const handleToggleChange = async (step, option) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [step]: {
        ...prevToggles[step],
        [option]: !prevToggles[step][option],
      },
    }));
    setTotalDay(totalDay + (toggles[step][option] ? (-1) * calcConst[step][option].day : calcConst[step][option].day));
    setTotalValue(totalValue + (toggles[step][option] ? (-1) * calcConst[step][option].value : calcConst[step][option].value));
  };
  

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

    // Atualiza o estado do contato com base nas entradas do usuário
    const handleContactChange = (e) => {
      const { name, value } = e.target;
      setContact((prevContact) => ({
        ...prevContact,
        [name]: value
      }));
    };

      // Função para submeter os dados de contato e seleções dos toggles
const submitData = async () => {
  // const contactInfo = { name: 'Nome', email: 'Email', phone: 'Telefone' };
  // const contactResponse = await fetch('/api/saveContact', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(contactInfo),
  // });

  // if (!contactResponse.ok) {
  //   throw new Error('Erro ao salvar contato');
  // }

  // const contactData = await contactResponse.json();

  // const selections = [{ step: 'branding', option: 'logo', value: true }, /* ... outras seleções ... */];
  // const selectionsResponse = await fetch('/api/saveSelections', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     userId: contactData.id,
  //     selections: selections,
  //   }),
  // });

  // if (!selectionsResponse.ok) {
  //   throw new Error('Erro ao salvar seleções');
  // }

  // Trate o sucesso aqui
};


  const parentRef = useRef();
  const width = parentRef.current ? parentRef.current.offsetWidth : 300;
  const height = parentRef.current ? parentRef.current.offsetHeight : 300;

  const [showConfetti, setShowConfetti] = useState(false);

    const handleNextClick = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000); // Desativa o confete após 2 segundos
    };

    const handleButtonClick = () => {
      if (currentStep === steps.length - 1) {
        // Se estamos no último passo, enviamos os dados
        // submitData();
        console.log("calcbutton clicked!", showConfetti);
        setShowConfetti(true);
        console.log("after clicked!", showConfetti);
        // setTimeout(() => setShowConfetti(false), 2000); // Desativa o confete após 2 segundos
      } else {
        setShowConfetti(false);
        // setTimeout(() => setShowConfetti(false), 2000); // Desativa o confete após 2 segundos
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    };

  // Os passos do stepper com títulos e subtítulos
  const steps = [
    { title: 'Branding', subtitle: 'Logo, cores, tipografia e camisetas', options: ['Logo', 'Paleta de cores', 'Tipografia', 'Design de camisetas'] },
    { title: 'Redes sociais', subtitle: 'Instagram, Facebook ou LinkedIn', options: ['Bio profissional', 'Chatbot', 'Destacados', 'Templates para posts', 'Templates para stories'] },
    { title: 'Web', subtitle: 'Pagina de links, website', options: ['Página de links', 'Website'] },
    { title: 'Conversão', subtitle: 'Google Maps, CRM, calendários', options: ['Integração CRM', 'Estar no Google Maps', 'Calendário automático'] },
    { title: 'Calcular', subtitle: 'Simule o tempo e investimento', options: [] }, 
  ];
  
const countryOptions = [
    { value: 'BR', label: 'BR' },
    { value: 'ES', label: 'ES' },
]

  // Para facilitar a renderização dos títulos e toggles
  const currentOptions = steps[currentStep].options;
  const currentToggles = toggles[Object.keys(toggles)[currentStep]];

  const getCurrentStepImage = (step) => {
    console.log(toggles);
    switch (step) {
      case 'Branding':
        return brandingImg.src;
      case 'Redes sociais':
        return redesImg.src;
      case 'Web':
        return webImg.src;
      case 'Conversão':
        return conversaoImg.src;
      case 'Contact':
        return contactImg.src; // Image for the Contact step
      default:
        return ''; // ou alguma imagem padrão
    }
  };
  

  return (
    <div className="relative isolate bg-white">
      <img src={visualOne.src} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-56 lg:h-96 z-50"/>
      <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative px-0 pb-20 pt-24 sm:pt-32 lg:static lg:px-0 lg:py-48">
          {!showConfetti && <div className="pl-24 pr-8">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white lg:w-1/2"></div>
            <img src={SmileImg.src} alt="" className='w-8 h-8' />
            <h2 className="font-brand font-semibold text-subheading-3 text-brand-primary">Quer testar sem compromisso?</h2>
            <div className="overflow-hidden" style={{ overflowX: 'auto' }}>
              <div className="flex flex-col items-left justify-start">
                <p className="font-brand mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Simule seu pacote de publicidade
                </p>
                <div className="font-brand relative text-left text-xl text-gray-600 my-4" style={{ width: 'fit-content' }}>
                  Temos tudo o que você precisa para sua marca decolar.
                </div>
              </div>
            </div>
            <p className='font-brand text-lg font-bold'>
              {currentStep === steps.length - 1 ? "Estamos quase lá" : "Selecione suas necessidades:"}
            </p>
  
            <div className='flex flex-column py-8'>
              <div className="pr-16 w-96 ">
                {currentStep === steps.length - 1 ? ( // If current step is the last step
                  <div className="mt- space-y-6">
                        <LeadingIconInput
                        id="lead_name"
                        label="Seu nome"
                        placeholder="Digite o seu nome"
                        IconComponent={UserIcon}
                        value={userName}
                        onChangeFunction={onChangeUserName}
                        />
  
                        {/* LeadingIconInput Component for Optional Message */}
                        <LeadingIconInput
                        id="lead_email"
                        label="Email"
                        placeholder="Digite o seu e-mail"
                        IconComponent={EnvelopeIcon}
                        value={userEmail}
                        onChangeFunction={onChangeUserEmail}
                        />

                        { !userEmailValid && <ValidationErrorMessage errorMessage="Not a Valid Email Address" /> }

                        {/* LeadingDropdownInput Component */}
                        <LeadingDropdownInput
                        id="lead_number"
                        label="Seu número"
                        placeholder="99 1234-5678"
                        options={countryOptions} 
                        inputProps={{}}
                        />

                        
                        
                  </div>
                ) : (
                  currentOptions.map((option, index) => (
                    <Toggle
                      key={index}
                      checked={currentToggles[option]}
                      onChange={() => handleToggleChange(Object.keys(toggles)[currentStep], option)}
                      label={option}
                    />
                  ))
                )}
              </div>
              <Stepper steps={steps.map(step => ({ name: step.title, description: step.subtitle }))} currentStep={currentStep} />
            </div>
            <div className="relative pt-0.5">
              <div className="absolute top-0 left-0 w-full border-t border-gray-300" style={{ borderTopWidth: '0.2px' }}></div>
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                  className="flex items-center text-brand-tertiary hover:text-brand-tertiary-darker font-semibold"
                  disabled={currentStep === 0} // Disable button if it's the first step
                >
                  <ChevronLeftIcon className="w-5 h-5 mr-1" />
                  Anterior
                </button>
                <button
                  onClick={handleButtonClick}
                  className="font-brand flex font-semibold items-center text-brand-tertiary hover:text-brand-tertiary-darker z-50"
                  // disabled={currentStep === steps.length - 1} // Disable button if it's the last step
                >
                  {currentStep === steps.length - 1 ? "Calcular" : "Próximo"}
                  <ChevronRightIcon className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>}
          {showConfetti && <FinalResultComponent className='h-full w-full' value={totalValue} day={totalDay} />}
        </div>
        <div className="relative flex px-6 sm:pb-32 lg:px-8 lg:py-24">
          {showConfetti && <Confetti className='h-full w-full' />}
          <div className="absolute inset-0 flex">
            <div className="w-1/3 bg-brand-primary h-full"></div>
            <div className="w-1/3 bg-brand-secondary h-full"></div>
            {/* Last column with SVG background */}
            <div className="w-1/3 bg-brand-tertiary relative overflow-hidden h-full">
              {Array.from({ length: 111 }).map((_, index) => (
                <img
                  key={index}
                  src={smileSvg.src}
                  alt="Smile"
                  className="absolute opacity-55"
                  style={randomPositionStyle(index)}
                />
              ))}
            </div>
          </div>
          {/* Imagem do barcode no canto inferior esquerdo */}
          <img src={verticalBarcode.src} alt="Barcode" className="absolute bottom-0 left-0 mb-0 ml-0" />
          {/* Conteúdo central, como o logo e a imagem dinâmica */}
          <div className="z-10 flex justify-center items-center w-full">
            {/* Logo at the top-left corner */}
            <img src={simpleLogoWhite.src} alt="Logo" className="absolute top-0 left-0 mt-4 ml-4" /> 
            <div className="relative flex px-6 sm:pb-32 lg:px-8 lg:py-24">
              {currentStep === steps.length - 1 ? ( // If current step is the last step
                <img src={contactImg.src} alt="Contact" className="h-3/4 object-scale-down" />
              ) : (
                <img src={getCurrentStepImage(steps[currentStep].title)} alt={steps[currentStep].title} className="h-3/4 object-scale-down" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
