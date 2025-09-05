import Link from 'next/link';
import React from 'react';
import {
  ArrowUpRight,
  MapPin,
  Clock,
  DollarSign,
  Mail,
  ArrowLeft,
  Users,
  Building,
  Calendar,
} from 'lucide-react';
import { JobProps, jobs } from '@/lib/jobs';

const JobOverviewCard = ({ job }: { job: JobProps }) => {
  return (
    <Link href={`/careers/${job.id}`}>
      <div
        // onClick={onClick}
        className='group relative bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

        <div className='relative z-10'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-2'>
                <h3 className='text-xl font-semibold text-gray-900 tracking-tight group-hover:text-purple-700 transition-colors'>
                  {job.title}
                </h3>
                <span className='px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full'>
                  {job.level}
                </span>
              </div>

              <div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
                <div className='flex items-center gap-1.5'>
                  <MapPin className='w-4 h-4' />
                  <span>{job.location}</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Clock className='w-4 h-4' />
                  <span>{job.type}</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Building className='w-4 h-4' />
                  <span>{job.department}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center w-10 h-10 bg-gray-50 group-hover:bg-purple-100 rounded-full transition-colors duration-200'>
              <ArrowUpRight className='w-5 h-5 group-hover:text-purple-600 transition-colors' />
            </div>
          </div>

          <p className='text-gray-700 leading-relaxed mb-4 line-clamp-2'>
            {job.summary}
          </p>

          <div className='flex items-center justify-between'>
            <span className='text-lg font-semibold text-gray-900'>
              {job.compensation
                .replace('Avg CA$', '$')
                .replace('/year', '/year')}
            </span>
            <span className='text-sm text-gray-500'>Posted {job.posted}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Careers() {
  return (
    <>
      <div className='text-center my-16'>
        <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6 tracking-tight'>
          Join WallX Inc.
        </h1>

        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
          Build the future of cross-border payments. We're a licensed MSB
          delivering secure, intuitive payment infrastructure connecting North
          America to Africa.
        </p>

        <div className='flex items-center justify-center gap-8'>
          <div className='flex items-center gap-2 text-gray-600'>
            <div className='w-3 h-3 bg-green-400 rounded-full'></div>
            <span className='text-sm font-medium'>
              {jobs.length} Open Positions
            </span>
          </div>

          <div className='flex items-center gap-2 text-gray-600'>
            <Calendar className='w-4 h-4' />
            <span className='text-sm font-medium'>Updated daily</span>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 w-[80%] mx-auto gap-6 mb-16'>
        {jobs.map((job) => (
          <JobOverviewCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
