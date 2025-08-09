import React from "react";
import { GiScissors, GiComb } from "react-icons/gi";


interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  iconType?: 'scissors' | 'comb' | 'dryer' | 'letter';
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'default',
  size = 'md',
  iconType = 'scissors'
}) => {
  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8',
      iconSize: 'text-sm',
      title: 'text-lg',
      subtitle: 'text-xs'
    },
    md: {
      icon: 'w-10 h-10',
      iconSize: 'text-lg',
      title: 'text-xl',
      subtitle: 'text-sm'
    },
    lg: {
      icon: 'w-12 h-12',
      iconSize: 'text-xl',
      title: 'text-2xl',
      subtitle: 'text-base'
    }
  };

  const variantClasses = {
    default: {
      container: 'text-gray-800',
      icon: 'bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600 shadow-lg shadow-purple-200',
      iconColor: 'text-white',
      title: 'text-gray-800',
      subtitle: 'text-gray-600'
    },
    white: {
      container: 'text-white',
      icon: 'bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg shadow-black/10',
      iconColor: 'text-white',
      title: 'text-white',
      subtitle: 'text-white/80'
    },
    minimal: {
      container: 'text-gray-700',
      icon: 'bg-purple-100 border-2 border-purple-200',
      iconColor: 'text-purple-600',
      title: 'text-gray-700',
      subtitle: 'text-gray-500'
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  // Icon selection
  const renderIcon = () => {
    const iconProps = {
      className: `${currentSize.iconSize} ${currentVariant.iconColor} transition-transform duration-300 group-hover:scale-110`
    };

    switch (iconType) {
      case 'scissors':
        return <GiScissors {...iconProps} />;
      case 'comb':
        return <GiComb {...iconProps} />;
      case 'letter':
        return (
          <span className={`${currentSize.iconSize} ${currentVariant.iconColor} font-bold relative z-10 transition-transform duration-300 group-hover:scale-110`}>
            M
          </span>
        );
      default:
        return <GiScissors {...iconProps} />;
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`
        ${currentSize.icon} 
        ${currentVariant.icon}
        rounded-full 
        flex items-center justify-center 
        transition-all duration-300 
        hover:scale-110 hover:rotate-12
        relative
        group
      `}>
        {/* Sparkle effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Salon Icon */}
        <div className="relative z-10">
          {renderIcon()}
        </div>
        
        {/* Decorative sparkles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-40 animate-pulse animation-delay-500"></div>
      </div>

      {/* Text Content */}
      <div className={`${currentVariant.container} transition-all duration-300`}>
        <h1 className={`${currentSize.title} ${currentVariant.title} font-bold tracking-tight leading-none`}>
          Marc's
        </h1>
        <div className="flex items-center space-x-1">
          <p className={`${currentSize.subtitle} ${currentVariant.subtitle} -mt-0.5 font-medium tracking-wide`}>
            Hair Salon
          </p>
          {/* Decorative element */}
          <div className="flex space-x-0.5 ml-1">
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-1 h-1 bg-rose-300 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;