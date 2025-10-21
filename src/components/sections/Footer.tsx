'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CookieConsent from '../../components/CookieConsent';
import { TiLocation } from 'react-icons/ti';
import Link from 'next/link';

interface Props {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon = ({ src, alt, href }: Props) => (
  <a
    href={href}
    target='_blank'
    className='w-8 h-8 sm:w-10 sm:h-10 block hover:opacity-80 transition'
  >
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className='object-contain w-full h-full'
    />
  </a>
);

export default function Footer() {
  const [showCookies, setShowCookies] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookies(true);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookieConsent', choice);
    setShowCookies(false);
  };

  return (
    <section className='w-full overflow-hidden'>
      {/* --- Top Section --- */}
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-white py-6 px-6 md:px-24'>
        <Image
          src='/faaspay-logo.svg'
          alt='logo'
          width={120}
          height={120}
          className='w-20 md:w-28 h-auto'
        />

        <div className='flex md:hidden gap-6 text-sm font-medium text-gray-700'>
          <a href='#' className='hover:text-[#473893] transition'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-[#473893] transition'>
            Terms
          </a>
          <a href='#' className='hover:text-[#473893] transition'>
            Help
          </a>
        </div>

        <a
          href='https://play.google.com/store/apps/details?id=co.wallx.fasepay'
          target='_blank'
          className='bg-[#473893] text-white rounded-3xl flex items-center gap-2 md:gap-3 py-2 px-6 text-sm md:text-base font-medium hover:bg-[#392d74] transition'
        >
          <Image src={'/phone-icon.png'} alt='phone' width={20} height={20} />
          Download App – it’s free
        </a>
      </div>

      {/* --- Bottom Section --- */}
      <footer className='w-full bg-[#F4F2FF] px-6 md:px-24 py-10 md:py-16 flex flex-col md:flex-row gap-12 md:gap-24'>
        {/* Left Column */}
        <div className='flex-1 space-y-6 text-gray-600 text-sm md:text-base leading-relaxed'>
          <p>
            FaasPay by WallX is a WallX Innovation Inc. Company, duly registered
            and regularized by Financial Transaction and Report Analysis Centre
            of Canada as a Money Service Business.
            <br />
            MSB Registration No: 22718986
          </p>

          <div className='flex items-start gap-2'>
            <TiLocation size={20} className='text-[#473893] mt-1' />
            <p className='font-medium text-[#333]'>
              290 King Street E, Kitchener, ON N2G 2L3, Canada
            </p>
          </div>

          <div className='flex items-start gap-2'>
            <TiLocation size={20} className='text-[#473893] mt-1' />
            <p className='font-medium text-[#333]'>
              220 East 23rd St Manhattan NY 10010, United States
            </p>
          </div>

          <p className='font-medium text-[#333]'>Fax Only: +1 519-804-9236</p>

          {/* Partners */}
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-[#111]'>Powered By</h2>
            <div className='flex flex-wrap items-center gap-6'>
              {[
                { src: '/interrac.jpg', alt: 'Interac' },
                { src: '/fiatmatch.jpg', alt: 'Fiatmatch' },
                { src: '/flutterwave.jpeg', alt: 'Flutterwave' },
                { src: '/veriff.jpeg', alt: 'Veriff' },
              ].map((partner) => (
                <Image
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className='h-12 md:h-16 w-auto object-contain'
                />
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-[#111]'>
              Cards Supported
            </h2>
            <Image
              src='/visa.jpeg'
              alt='Visa'
              width={120}
              height={60}
              className='h-10 md:h-12 w-auto object-contain'
            />
          </div>

          <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Faaspay by WallX Innovation Inc.
          </p>

          <div className='hidden md:flex gap-6 text-sm font-medium text-gray-700 mt-6'>
            <a
              href='/privacy-policy'
              className='hover:text-[#473893] transition'
            >
              Privacy Policy
            </a>
            <a href='#' className='hover:text-[#473893] transition'>
              Terms
            </a>
            <a href='#' className='hover:text-[#473893] transition'>
              Help
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex md:flex-col items-center md:items-start gap-5 md:gap-6'>
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
            href='https://www.instagram.com/'
            src='/instagram-icon.png'
            alt='Instagram'
          />
          <SocialIcon href='' src='/linkedin-icon.png' alt='LinkedIn' />
        </div>
      </footer>

      {/* --- Cookie Consent Banner --- */}
      {showCookies && (
        <>
          <CookieConsent />
        </>
      )}
    </section>
  );
}
