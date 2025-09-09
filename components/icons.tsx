import React from 'react';

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const PawIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M8.25 5.625c1.284 0 2.329.834 2.628 1.956a5.25 5.25 0 0 1-.22 4.198 5.138 5.138 0 0 1-2.408 2.964.75.75 0 0 1-1.042-.321 5.13 5.13 0 0 1-.34-4.832c.112-.348.24-.686.386-1.012a.75.75 0 0 1 .697-.503h.001ZM15.75 5.625c1.284 0 2.329.834 2.628 1.956a5.25 5.25 0 0 1-.22 4.198 5.138 5.138 0 0 1-2.408 2.964.75.75 0 0 1-1.042-.321 5.13 5.13 0 0 1-.34-4.832c.112-.348.24-.686.386-1.012a.75.75 0 0 1 .697-.503h.001Z" clipRule="evenodd" />
        <path d="M21.75 12.012c0-1.21-.63-2.31-1.609-2.885a5.25 5.25 0 0 0-3.834-1.332 5.26 5.26 0 0 0-3.696 1.334 5.246 5.246 0 0 0-1.218 6.448.75.75 0 0 0 .647.455h.21a.75.75 0 0 0 .647-.455c.31-.973.8-1.898 1.45-2.733.666-.856 1.5-1.572 2.446-2.077a.75.75 0 0 1 1.082.939 9.855 9.855 0 0 1-.95 3.525.75.75 0 0 0 .647.455h.21a.75.75 0 0 0 .647-.455 5.25 5.25 0 0 0 2.213-4.729Z" />
        <path d="M3.859 9.127c-1.02-.575-1.609-1.675-1.609-2.885 0-1.84 1.488-3.34 3.321-3.34.42 0 .825.079 1.209.224a5.253 5.253 0 0 1 3.696 1.334c.31.31.594.643.85 1a.75.75 0 0 1-1.082.94A10.024 10.024 0 0 0 8.05 5.666a3.734 3.734 0 0 0-2.33 6.643.75.75 0 0 1-.383.957.75.75 0 0 1-.94-.383 5.25 5.25 0 0 1-.538-2.756Z" />
    </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
  
export const ViewIcon: React.FC<{ className?: string }> = ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
    </svg>
);