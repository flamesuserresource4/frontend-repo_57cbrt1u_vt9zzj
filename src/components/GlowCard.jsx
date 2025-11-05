import React from 'react';

// Wrapper with animated glowing gradient border
export default function GlowCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-[linear-gradient(135deg,#6C00FF,rgba(108,0,255,0.2)_30%,rgba(0,194,255,0.2)_70%,#00C2FF)] shadow-[0_0_30px_rgba(108,0,255,0.25),0_0_60px_rgba(0,194,255,0.15)] ${className}`}>
      <div className="rounded-2xl bg-[#0b0b12]/90 backdrop-blur-sm">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
        background: 'radial-gradient(60% 60% at 50% 0%, rgba(108,0,255,0.15) 0%, rgba(0,0,0,0) 60%)',
        mixBlendMode: 'screen'
      }} />
    </div>
  );
}
