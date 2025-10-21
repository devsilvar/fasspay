import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showManageOptions, setShowManageOptions] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show consent after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowConsent(false);
    setShowManageOptions(false);
  };

  const handleDeclineAll = () => {
    const allDeclined = {
      necessary: true, // Necessary cookies are always enabled
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(allDeclined);
    localStorage.setItem('cookieConsent', JSON.stringify(allDeclined));
    setShowConsent(false);
    setShowManageOptions(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowManageOptions(false);
  };

  const handleManageCookies = () => {
    setShowManageOptions(true);
  };

  const handleBackToMain = () => {
    setShowManageOptions(false);
  };

  const updatePreference = (type, value) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!showConsent) return null;

  return (
    <div className='fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-end justify-center p-2 sm:items-center sm:p-4'>
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-sm w-full transform transition-all duration-300 border border-gray-100 ${
          showManageOptions ? 'scale-100' : 'animate-bounce-in'
        }`}
      >
        {/* Header */}
        <div className='p-4 border-b border-gray-100'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center'>
              <svg
                className='w-4 h-4 text-[#473893]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
            <div>
              <h2 className='text-lg font-medium text-gray-900'>
                {showManageOptions ? 'Cookie Settings' : 'Cookie Notice'}
              </h2>
              <p className='text-xs text-gray-500 mt-0.5'>
                {showManageOptions
                  ? 'Choose your preferences'
                  : 'We use cookies for better experience'}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-4'>
          {!showManageOptions ? (
            // Main consent screen
            <div className='space-y-3'>
              <div className='bg-purple-50/50 border-l-2 border-[#473893] p-3 rounded-r-md'>
                <p className='text-xs text-[#473893]'>
                  We use cookies to enhance your experience and provide
                  personalized content.
                </p>
              </div>
            </div>
          ) : (
            // Manage options screen
            <div className='space-y-3'>
              <div className='space-y-3'>
                {/* Necessary Cookies */}
                <div className='flex items-center justify-between p-2 bg-gray-50/50 rounded-md'>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center space-x-2'>
                      <h3 className='text-xs font-medium text-gray-900 truncate'>
                        Necessary
                      </h3>
                      <span className='inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800'>
                        Required
                      </span>
                    </div>
                  </div>
                  <input
                    type='checkbox'
                    checked={preferences.necessary}
                    disabled
                    className='h-3 w-3 text-[#473893] focus:ring-[#473893] border-gray-300 rounded'
                  />
                </div>

                {/* Analytics Cookies */}
                <div className='flex items-center justify-between p-2 border border-gray-200/50 rounded-md'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-xs font-medium text-gray-900'>
                      Analytics
                    </h3>
                  </div>
                  <input
                    type='checkbox'
                    checked={preferences.analytics}
                    onChange={(e) =>
                      updatePreference('analytics', e.target.checked)
                    }
                    className='h-3 w-3 text-[#473893] focus:ring-[#473893] border-gray-300 rounded'
                  />
                </div>

                {/* Marketing Cookies */}
                <div className='flex items-center justify-between p-2 border border-gray-200/50 rounded-md'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-xs font-medium text-gray-900'>
                      Marketing
                    </h3>
                  </div>
                  <input
                    type='checkbox'
                    checked={preferences.marketing}
                    onChange={(e) =>
                      updatePreference('marketing', e.target.checked)
                    }
                    className='h-3 w-3 text-[#473893] focus:ring-[#473893] border-gray-300 rounded'
                  />
                </div>

                {/* Functional Cookies */}
                <div className='flex items-center justify-between p-2 border border-gray-200/50 rounded-md'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-xs font-medium text-gray-900'>
                      Functional
                    </h3>
                  </div>
                  <input
                    type='checkbox'
                    checked={preferences.functional}
                    onChange={(e) =>
                      updatePreference('functional', e.target.checked)
                    }
                    className='h-3 w-3 text-[#473893] focus:ring-[#473893] border-gray-300 rounded'
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className='p-4 border-t border-gray-100 bg-gray-50/30 rounded-b-xl'>
          {!showManageOptions ? (
            // Main consent buttons
            <div className='flex gap-2'>
              <button
                onClick={handleDeclineAll}
                className='flex-1 px-3 py-2 text-xs font-medium text-white bg-red-600 border border-gray-200 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all duration-200'
              >
                Decline
              </button>
              <button
                onClick={handleManageCookies}
                className='flex-1 px-3 py-2 text-xs font-medium text-[#473893] bg-purple-50/50 border border-purple-200 rounded-lg hover:bg-purple-100/50 focus:outline-none focus:ring-1 focus:ring-[#473893] transition-all duration-200'
              >
                Settings
              </button>
              <button
                onClick={handleAcceptAll}
                className='flex-1 px-3 py-2 text-xs font-medium text-white bg-[#473893] rounded-lg hover:bg-[#392d74] focus:outline-none focus:ring-1 focus:ring-[#473893] transition-all duration-200'
              >
                Accept
              </button>
            </div>
          ) : (
            // Manage options buttons
            <div className='flex gap-2'>
              <button
                onClick={handleBackToMain}
                className='flex-1 px-3 py-2 text-xs font-medium text-gray-600 bg-white/50 border border-gray-200 rounded-lg hover:bg-white/80 focus:outline-none focus:ring-1 focus:ring-[#473893] transition-all duration-200'
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className='flex-1 px-3 py-2 text-xs font-medium text-white bg-[#473893] rounded-lg hover:bg-[#392d74] focus:outline-none focus:ring-1 focus:ring-[#473893] transition-all duration-200'
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
