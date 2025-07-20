import { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-primary leading-tight drop-shadow-lg font-sans">
      {children}
    </h1>
  );
}