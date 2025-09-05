import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full overflow-hidden py-12 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12'>
      {/* Left: Text + CTA */}
      <div className='flex-1 space-y-6 text-center md:text-left'>
        <h1 className='text-[#111111] text-3xl md:text-5xl font-bold leading-tight'>
          Seamlessly send & receive money from your customers{' '}
          <br className='hidden md:block' />
          in less than 5 minutes using{' '}
          <span className='text-[#473893]'>PayCodes</span>.
        </h1>

        <p className='text-gray-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0'>
          Experience hassle-free fund transfers for business and personal use —
          it’s simple, secure, and no personal banking details needed.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start'>
          <a
            href='https://apps.apple.com/us/app/fasepay-by-wallx/id6590625075'
            target='_blank'
            className='w-40 md:w-48 lg:w-56 transform hover:scale-105 transition duration-200'
          >
            <Image
              src='/appstore-logo.png'
              alt='Download on App Store'
              width={223}
              height={66}
              layout='responsive'
              className='object-contain'
            />
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=co.wallx.fasepay'
            target='_blank'
            className='w-40 md:w-48 lg:w-56 transform hover:scale-105 transition duration-200'
          >
            <Image
              src='/playstore-logo.png'
              alt='Get it on Play Store'
              width={223}
              height={66}
              layout='responsive'
              className='object-contain'
            />
          </a>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className='flex-1 relative'>
        <Image
          src='/flags.png'
          alt='Flags representing international money transfer'
          width={580}
          height={560}
          layout='responsive'
          className='object-contain drop-shadow-lg'
        />
      </div>
    </header>
  );
}
