import Image from 'next/image';
import img1 from '../../../../public/Partnership/ikea-logo-color.svg'
import img2 from '../../../../public/Partnership/google-logo-color.svg'
import img3 from '../../../../public/Partnership/bcc-logo-color.svg'
import img4 from '../../../../public/Partnership/kfc-logo-color.svg'
import img5 from '../../../../public/Partnership/friday-logo-color.svg'
import img6 from '../../../../public/Partnership/moo-logo-color.svg'
import img7 from '../../../../public/Partnership/kk-logo-color.svg'
import img8 from '../../../../public/Partnership/bajaj-allianz-logo-color.svg'
import img11 from '../../../../public/Partnership/domin-logo-color.svg'
import img9 from '../../../../public/Partnership/hardees-logo-color.svg'
import img10 from '../../../../public/Partnership/wimpy-logo-color.svg'
import img12 from '../../../../public/Partnership/empirehotels-logo-color.svg'
import img13 from '../../../../public/Partnership/jobget-lgo-color.svg'
import img14 from '../../../../public/Partnership/asian-bnk-logo-color.svg'
const partners = [
  { name: 'IKEA', src: img1 },
  { name: 'Google', src: img2 },
  { name: 'BCG', src: img3 },
  { name: 'KFC', src: img4 },
  { name: 'TGI Fridays', src: img5 },
  { name: 'moo', src: img6 },
  { name: 'Krispy Kreme', src: img7 },
  { name: 'Hardees', src: img8 },
  { name: 'Bajaj Allianz', src: img9 },
  { name: 'Dominos', src: img11 },
  { name: 'SuperShe', src: img10 },
  { name: 'Wimpy', src: img10 },
  { name: 'Empire Hotels', src: img12 },
  { name: 'JobGet', src: img13 },
  { name: 'Asian Bank', src: img14 },
];

const Partners = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full md:w-[85%] ">
        <h2 className="text-black text-2xl text-center md:text-left md:text-4xl font-semibold mb-10">
          Our Partnerships Have Transformed How You Experience These Global Leaders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={50}
                className="max-w-full h-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
