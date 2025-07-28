import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, description, provider, rating, icon, to, launchDate }) {
  return (
    <Link 
      to={to} 
      className="card flex flex-col p-6 h-full w-full transition-all duration-300 hover:-translate-y-1"
    >
      <div className="mb-4 text-4xl icon-glow">{icon}</div>
      
      <h3 className="text-xl font-semibold mb-1 text-slate-100">{title}</h3>
      <div className="mb-3 flex items-center text-slate-400 text-sm">
        <span>由 {provider} 提供</span>
      </div>
      
      <p className="text-slate-300 mb-4 flex-grow text-sm">{description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center text-sm mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-slate-200">{rating}</span>
          </div>
          <span className="text-slate-400">上线: {launchDate}</span>
        </div>
      </div>
    </Link>
  );
}