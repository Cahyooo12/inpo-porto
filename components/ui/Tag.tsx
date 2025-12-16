import React from 'react';

export const Tag = ({ children }: { children?: React.ReactNode }) => (
  <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
    {children}
  </span>
);