'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
            <Link href='/privacy' className='hover:text-[#473893] transition'>
              Privacy Policy
            </Link>
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
        <div className='fixed bottom-0 left-0 w-full bg-[#00184A] text-white text-sm md:text-base px-6 md:px-16 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-50 animate-slideUp'>
          <p className='max-w-3xl leading-relaxed text-center md:text-left text-gray-200'>
            This site uses cookies and related technologies, as described in our{' '}
            <a href='#' className='underline hover:text-blue-300'>
              privacy policy
            </a>
            , for purposes that may include site operation, analytics, enhanced
            user experience, or advertising. You may choose to consent to our
            use of these technologies, or manage your own preferences. Please
            visit our{' '}
            <a href='#' className='underline hover:text-blue-300'>
              cookie policy
            </a>{' '}
            for more information.
          </p>

          <div className='flex gap-2 shrink-0'>
            <button
              onClick={() => handleConsent('accepted')}
              className='bg-[#007AFF] hover:bg-[#005FCC] transition text-white px-4 py-2 rounded-md font-medium'
            >
              AGREE & PROCEED
            </button>
            <button
              onClick={() => handleConsent('declined')}
              className='bg-transparent border border-gray-400 text-white px-4 py-2 rounded-md font-medium hover:bg-white/10 transition'
            >
              DECLINE ALL
            </button>
            <button
              onClick={() => alert('Here you can add a real preferences modal')}
              className='bg-white text-[#00184A] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition'
            >
              MANAGE CHOICES
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
