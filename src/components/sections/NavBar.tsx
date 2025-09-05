'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    // { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <nav className='w-full bg-[#473893] p-3'>
      <div className='flex items-center justify-between px-4 md:px-24'>
        {/* Logo */}
        <div className='flex flex-col'>
          <Image
            src={'/faaspay-white.svg'}
            alt='logo'
            width={111}
            height={42}
            className='hidden md:block'
          />
          <Image
            src={'/faaspay-white.svg'}
            alt='logo'
            width={75}
            height={32}
            className='block md:hidden'
          />
          <p className='text-white text-xs opacity-70 mt-1 italic'>by WallX</p>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-10 items-center text-white'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='hover:text-gray-200 transition-colors'
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className='hover:text-gray-200 transition-colors'
          >
            Contact
          </button>
          <a
            href='https://play.google.com/store/apps/details?id=co.wallx.fasepay'
            target='_blank'
            className='bg-white text-[#473893] rounded-3xl font-medium py-2 px-5 hover:bg-gray-100 transition-colors'
          >
            Download App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-white md:hidden'
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-6 py-6 text-white bg-[#473893] border-t border-white/20'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='hover:text-gray-200 transition-colors text-lg'
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className='hover:text-gray-200 transition-colors text-lg'
          >
            Contact
          </button>
          <a
            href='https://play.google.com/store/apps/details?id=co.wallx.fasepay'
            target='_blank'
            className='bg-white text-[#473893] rounded-3xl font-medium py-2 px-6 hover:bg-gray-100 transition-colors'
          >
            Download App
          </a>
        </div>
      )}

      {/* Contact Modal */}
      {showModal && (
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </nav>
  );
}
