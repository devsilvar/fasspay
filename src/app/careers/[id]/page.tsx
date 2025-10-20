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
import { JobProps } from '@/lib/jobs';
import { jobs } from '@/lib/jobs';
import BackButton from '@/components/BackButton';

export async function generateStaticParams() {
  return jobs.map((_, index) => ({
    id: String(index + 1), // ✅ numeric IDs (1-based)
  }));
}

const JobDetailView = ({ job }: { job: JobProps }) => {
  if (!job) return <p className='p-6'>Job not found</p>;
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 animate-in slide-in-from-right duration-500'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='mb-8'>
          <BackButton link='/careers' />
          <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 mb-8'>
            <div className='flex md:flex-row flex-col gap-y-10 items-start justify-between mb-6'>
              <div>
                <div className='flex items-center gap-3 mb-3'>
                  <h1 className='text-3xl font-bold text-gray-900 tracking-tight'>
                    {job.title}
                  </h1>
                  <span className='px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full'>
                    {job.level}
                  </span>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-sm'>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <MapPin className='w-4 h-4 text-gray-400' />
                    <div>
                      <div className='font-medium text-gray-900'>Location</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Clock className='w-4 h-4 text-gray-400' />
                    <div>
                      <div className='font-medium text-gray-900'>Type</div>
                      <div>{job.type}</div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Building className='w-4 h-4 text-gray-400' />
                    <div>
                      <div className='font-medium text-gray-900'>
                        Department
                      </div>
                      <div>{job.department}</div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Users className='w-4 h-4 text-gray-400' />
                    <div>
                      <div className='font-medium text-gray-900'>Team</div>
                      <div>{job.team}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-right'>
                <div className='text-2xl font-bold text-gray-900 mb-1'>
                  {job.compensation.replace('Avg CA$', '$')}
                </div>
                <div className='text-sm text-gray-500'>Posted {job.posted}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-8'>
            {/* About the Role */}
            <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                About this role
              </h2>
              <p className='text-gray-700 leading-relaxed text-lg'>
                {job.summary}
              </p>
            </div>

            {/* Responsibilities */}
            <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                What you&apos;ll do
              </h2>
              <div className='space-y-4'>
                {job.responsibilities.map((item, i) => (
                  <div key={i} className='flex items-start gap-4'>
                    <div className='w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                    </div>
                    <span className='text-gray-700 leading-relaxed'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                What we&apos;re looking for
              </h2>
              <div className='space-y-4'>
                {job.requirements.map((item, i) => (
                  <div key={i} className='flex items-start gap-4'>
                    <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                    </div>
                    <span className='text-gray-700 leading-relaxed'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Apply Card */}

            {/* Company Info */}
            <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6'>
              <h3 className='font-semibold text-gray-900 mb-4'>About WallX</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                We&apos;re a licensed MSB delivering secure, intuitive payment
                infrastructure connecting North America to Africa through our
                flagship product, FaasPay.
              </p>
            </div>

            {/* Questions */}
            <div className='bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6'>
              <h3 className='font-semibold text-gray-900 mb-4'>
                Have questions?
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                Reach out to our team if you&apos;d like to learn more about
                this role or WallX.
              </p>
              <a
                href='mailto:careers@wallx.co'
                className='text-purple-600 hover:text-purple-700 text-sm font-medium'
              >
                Contact us →
              </a>
            </div>

            <div className='bg-gradient-to-br  from-purple-900 to-blue-900 rounded-2xl p-6 text-white sticky bottom-0'>
              <h3 className='text-lg font-semibold mb-4'>Ready to apply?</h3>
              <p className='text-purple-100 mb-6 text-sm leading-relaxed'>
                {job.notes}
              </p>
              <a
                href={`mailto:${job.email}?subject=${encodeURIComponent(
                  job.subject
                )}`}
                className='w-full inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105'
              >
                <Mail className='w-4 h-4' />
                Apply for this role
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function CareersPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) return <p>Job not found</p>;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30'>
      <JobDetailView job={job} />
      <div className='max-w-6xl mx-auto px-6 py-20'>
        {/* Footer CTA */}
        <div className='text-center p-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl text-white'>
          <h3 className='text-2xl font-semibold mb-4'>
            Don&apos;t see the perfect role?
          </h3>
          <p className='text-purple-100 mb-6 max-w-2xl mx-auto'>
            We&apos;re always looking for exceptional talent. Send us your
            resume and tell us how you&apos;d like to contribute to the future
            of fintech.
          </p>
          <a
            href='mailto:careers@wallx.co?subject=General Application - Future Opportunities'
            className='inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105'
          >
            <Mail className='w-4 h-4' />
            Send General Application
          </a>
        </div>
      </div>
    </div>
  );
}
