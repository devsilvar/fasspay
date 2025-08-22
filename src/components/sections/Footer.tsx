import Image from 'next/image';
import React from 'react';
import { TiLocation } from 'react-icons/ti';

interface Props {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon = ({ src, alt, href }: Props) => (
  <a
    href={href}
    target='_blank'
    className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'
  >
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      layout='responsive'
      className='object-contain'
    />
  </a>
);

export default function Footer() {
  return (
    <section className='w-screen overflow-hidden'>
      <div className='w-full flex items-start md:items-center justify-between gap-5 bg-white py-5 px-5 md:px-24'>
        <div>
          <Image
            src='/faaspay-logo.svg'
            alt='logo'
            width={80}
            height={93}
            className='hidden md:block'
          />
        </div>
        <div className='block md:hidden'>
          <Image
            src='/faaspay-logo.svg'
            alt='logo'
            width={40}
            height={73}
            className='block md:hidden'
          />
          <div className='block pt-5 space-y-2  text-xs '>
            <li className='list-none cursor-pointer'>Privacy Policy</li>
            <li className='list-none cursor-pointer'>Terms of Service</li>
            <li className='list-none cursor-pointer'>Help/FAQ</li>
          </div>
        </div>

        <a
          href='https://play.google.com/store/apps/details?id=co.wallx.fasepay'
          target='_blank'
          className='text-white bg-[#473893] rounded-3xl border-white border flex gap-3 text-xs md:text-base items-center py-2 px-6'
        >
          <Image src={'/phone-icon.png'} alt='logo' width={20} height={32} />
          {`Download App -it's free`}
        </a>
      </div>
      <footer className='w-full text-sm bg-[#F4F2FF] md:flex items-center px-10 py-5 md:py-24'>
        <div className='space-y-5'>
          <p className='text-sm md:text-base'>
            FaasPay by WallX is a WallX Innovation Inc. Company, duly registered
            and regularized by Financial Transaction and Report Analysius Centre
            of Canada as a Money Service Business. MSB Registration No: 22718986
          </p>

          <div className='flex items-start lg:items-center gap-1'>
            <TiLocation size={20} />
            <p className='text-base font-medium text-[#333]'>
              290 King Street E Kitchener, ON N2G 2L3 Canada
            </p>
          </div>
          <p className='text-base font-medium text-[#333]'>
            Fax Only: +1 519-804-9236
          </p>
          <div className='flex items-start flex-col gap-4'>
            <h2 className='text-[20px] font-bold ttext-[#111]'>Powered By:</h2>
            <div className='flex items-center gap-4'>
              <Image
                src='/interact.jpg'
                alt='Interract'
                width={1000}
                height={1000}
                quality={100}
                className='w-[120px] lg:w-[150px] h-auto'
              />
              <Image
                src='/fiatmatch.jpg'
                alt='fiatmatch'
                width={1000}
                height={1000}
                quality={100}
                className='w-[120px] lg:w-[150px] h-auto'
              />
              <Image
                src='/flutterwave.jpeg'
                alt='flutterwave'
                width={1000}
                height={1000}
                quality={100}
                className='w-[120px] lg:w-[150px] h-auto'
              />
              <Image
                src='/veriff.jpeg'
                alt='veriff'
                width={1000}
                height={1000}
                quality={100}
                className='w-[80px] lg:w-[150px] h-auto'
              />
            </div>
          </div>
          <div className='flex items-start flex-col gap-4'>
            <h2 className='text-[20px] font-bold ttext-[#111]'>
              Cards Supported:
            </h2>
            <div className='flex items-center gap-4'>
              <Image
                src='/visa.jpeg'
                alt='visa'
                width={1000}
                height={1000}
                quality={100}
                className='w-[100px] lg:w-[120px] h-auto'
              />
            </div>
          </div>
          <p>© {new Date().getFullYear()} Faaspay by WallX Innovation Inc.</p>
        </div>

        <div className='flex items-center gap-3 sm:gap-4 md:gap-5 py-5 md:py-0'>
          <SocialIcon
            href='https://x.com/faaspayng/status/1864629941775602075'
            src='/twitter-icon.png'
            alt='Twitter'
          />
          <SocialIcon
            href='https://www.facebook.com/share/p/18NtM8jcv4/'
            src='/facebook-icon.png'
            alt='Facebook'
          />
          <SocialIcon
            href='https://www.facebook.com/share/p/18NtM8jcv4/'
            src='/instagram-icon.png'
            alt='Instagram'
          />
          <SocialIcon href='' src='/linkedin-icon.png' alt='LinkedIn' />
        </div>
      </footer>
    </section>
  );
}
