import React from 'react';

const colorGroups = [
  {
    title: 'Primary Colors',
    colors: [
      { name: 'Color 1', hex: '#00CEEA', bg: '#00CEEA' },
      { name: 'Color 1', hex: '#00CEEA', bg: 'linear-gradient(135deg, #00CEEA 0%, #0066FF 100%)' },
    ]
  },
  {
    title: 'Secondary Colors',
    colors: [
      { name: 'Color 1', hex: '#101935', bg: '#101935' },
      { name: 'Color 2', hex: '#8B5CF6', bg: '#8B5CF6' },
      { name: 'Color 3', hex: '#57C3FF', bg: '#57C3FF' },
      { name: 'Color 4', hex: '#0A91FB', bg: '#0A91FB' },
      { name: 'Color 5', hex: '#FDB52A', bg: '#FDB52A' },
    ]
  },
  {
    title: 'Neutral Colors',
    colors: [
      { name: 'Color 900', hex: '#000F25', bg: '#000F25' },
      { name: 'Color 800', hex: '#121C3D', bg: '#121C3D' },
      { name: 'Color 700', hex: '#27346D', bg: '#27346D' },
      { name: 'Color 600', hex: '#7C86AC', bg: '#7C86AC' },
      { name: 'Color 400', hex: '#AEBDE1', bg: '#AEBDE1' },
      { name: 'Color 300', hex: '#D1DBFD', bg: '#D1DBFD' },
      { name: 'Color 200', hex: '#D9E1FA', bg: '#D9E1FA' },
      { name: 'Color 100', hex: '#FFFFFF', bg: '#FFFFFF' },
    ]
  }
];

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-[#070B14] p-10 -m-8 text-slate-50">
      <div className="max-w-5xl space-y-16">
        {colorGroups.map((section) => (
          <div key={section.title} className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-white">{section.title}</h2>
            
            <div className="flex flex-wrap gap-6">
              {section.colors.map((color, index) => (
                <div 
                  key={`${color.name}-${index}`} 
                  className="flex flex-col w-[200px] overflow-hidden rounded-xl border border-slate-800/40 bg-[#0B101E] shadow-xl"
                >
                  <div 
                    className="h-28 w-full"
                    style={{ background: color.bg }}
                  />
                  <div className="p-4 bg-[#0B101E]">
                    <p className="text-xs font-semibold text-slate-200">{color.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono tracking-wider">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Divider between sections, except for the last one */}
            {section.title !== 'Neutral Colors' && (
              <div className="pt-8 border-b border-slate-800/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
