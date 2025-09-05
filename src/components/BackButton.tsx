'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ App Router
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ link }: { link: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(link)}
      className='inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group'
    >
      <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
      <span>Back to all jobs</span>
    </button>
  );
};

export default BackButton;
