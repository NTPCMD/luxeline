interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl md:text-6xl',
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`} style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
      <span style={{ color: '#121212' }}>LUXE</span>
      <span style={{ color: '#E8B4BC' }}>LINÈ</span>
    </div>
  );
}
