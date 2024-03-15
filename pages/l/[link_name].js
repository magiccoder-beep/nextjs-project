import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import diskImg from '../../assets/diskImg.png'; 
import smileImg from '../../assets/smileImg.png'; 
import tvWhatsApp from '../../assets/tvWhatsApp.png'; 
import foldedTexture from '../../assets/foldedTexture.png';
import angrybaraImg from '../../assets/angrybaraImg.png'

const LinkPage = () => {
  const [whatsappHref, setWhatsappHref] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      fetch(`/api/l/${link_name}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch data');
          return response.json();
        })
        .then(data => {
          const phoneNumber = data.phone_number;
          const message = encodeURIComponent(data.message);
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
          setWhatsappHref(whatsappUrl);
          setPhoneNumber(phoneNumber); // Set phoneNumber state here
        })
        .catch(error => console.error('Error:', error));
    }
  }, [link_name]);

  return (
    <>
      <div className='h-full mt-24 bg-brand-tertiary'>
        <img 
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={foldedTexture.src}
          alt="Folded Texture"
        />
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src={smileImg.src}
              alt="Smiley"
              className="absolute -left-24 -bottom-10 w-32"
            />
            <img
              src={diskImg.src}
              alt="Disk"
              className="absolute -right-0 lg:right-24 -bottom-16 w-16 lm:w-32 z-40"
            />

            <div className="relative max-w-md bg-white rounded-3xl p-8 text-center shadow-xl z-10">
              <div className="my-4 flex justify-center">
                <img src={tvWhatsApp.src} alt="WhatsApp Television" className="mx-auto" />
              </div>
              <h2 className="text-lg font-brand leading-8 text-gray-900">
                Clique abaixo para mandar uma mensagem para:
              </h2>
              <h2 className='text-brand-tertiary font-brand font-semibold'>{phoneNumber ? `+${phoneNumber}` : 'carregando...'}</h2>

              <a
                href={whatsappHref}
                className="bg-brand-primary text-white rounded-md py-2 px-3 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 mt-4 inline-block"
              >
                Mandar mensagem no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-24 text-white flex-col w-full">
          <h2 className='font-brand text-4xl font-semibold text-center justify-center'>Quer gerar o seu próprio link?</h2>
          <p className='font-brand text-xl max-w-2xl text-center justify-center mt-4'>Com seu próprio link de mensagens do WhatsApp, você pode elevar o profissionalismo da sua empresa, proporcionando uma maneira direta e conveniente para seus clientes e leads entrarem em contato. Ao simplificar o processo de comunicação, você economiza o tempo dos seus leads, tornando mais fácil e rápido para eles iniciar uma conversa com você. Isso não apenas melhora a experiência do cliente, mas também aumenta as chances de converter leads em clientes.</p>
          <a
            href="https://www.beabstracto.com/gerador-link-whatsapp"
            className="bg-brand-primary text-white rounded-md py-2 px-3 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 mt-4 inline-block"
          >
            Quero Gerar meu Link
          </a>
          <img src={angrybaraImg.src} alt="Angrybara Image"/>
        </div>
      </div>
    </>
  );
};

export default LinkPage;
