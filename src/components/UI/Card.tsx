import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'default',
  shadow = 'default',
  hover = true,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'gradient';
  padding?: 'none' | 'sm' | 'default' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'default' | 'lg' | 'xl';
  hover?: boolean;
}) => {
  const baseClasses = 'bg-white rounded-2xl border transition-all duration-300';
  
  const variants = {
    default: 'border-gray-200',
    bordered: 'border-gray-300',
    elevated: 'border-none',
    gradient: 'border-none bg-gradient-to-br from-rose-50 to-pink-50'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl'
  };

  const hoverEffects = hover 
    ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer' 
    : '';

  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${hoverEffects} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card Sub-components
const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', size = 'lg' }: { children: React.ReactNode; className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <h3 className={`font-bold text-gray-900 ${sizes[size]} ${className}`}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-gray-600 ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

// Attach sub-components to main Card component
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;