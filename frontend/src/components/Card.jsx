import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, description, provider, rating, icon, to, launchDate }) {
  // 检查icon是否为图片路径
  const isImageIcon = typeof icon === 'string' && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg'));
  
  return (
    <Link 
      to={to} 
      className="card flex flex-col p-2 h-full w-full transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center mb-1">
        <div className="mr-2 flex items-center justify-center">
          {isImageIcon ? (
            <img 
              src={icon} 
              alt={title}
              className="w-12 h-12 object-contain"
            />
          ) : (
            <div className="text-4xl icon-glow">{icon}</div>
          )}
        </div>
        <h3 className="cosmic-title text-xl text-slate-100 tracking-tight">{title}</h3>
      </div>
      
      <div className="mb-1 flex items-center text-cosmic-muted text-sm">
        <span>由 {provider} 提供</span>
      </div>
      
      <p className="cosmic-subtitle text-slate-300 mb-1 flex-grow text-sm leading-tight">{description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-slate-200">{rating}</span>
          </div>
          <span className="text-cosmic-muted">上线: {launchDate}</span>
        </div>
      </div>
    </Link>
  );
}