import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TouristHeatmap = () => {
  const mapCenter = [28.6139, 77.2090]; // New Delhi

  // Simulated Tourist GPS Pings
  const tourists = [
    { id: 1, pos: [28.61, 77.20], status: 'safe' },
    { id: 2, pos: [28.62, 77.21], status: 'safe' },
    { id: 3, pos: [28.615, 77.19], status: 'safe' },
    { id: 4, pos: [28.63, 77.22], status: 'sos' }, // SOS Triggered
    { id: 5, pos: [28.64, 77.20], status: 'warning' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800">Live Tourist Radar</h3>
        <div className="flex gap-3 text-xs font-medium">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Safe</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> SOS Active</span>
        </div>
      </div>
      
      <div className="flex-grow rounded-xl overflow-hidden relative z-0">
        <MapContainer center={mapCenter} zoom={12} style={{ width: '100%', height: '100%' }}>
          {/* Dark Mode Map Tiles for "Command Center" look */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap & CartoDB'
          />

          {/* Danger Zone Overlay */}
          <Circle center={[28.63, 77.22]} radius={800} pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.2 }} />

          {tourists.map((t) => (
            <CircleMarker 
              key={t.id} 
              center={t.pos} 
              radius={t.status === 'sos' ? 10 : 6}
              pathOptions={{ 
                color: t.status === 'sos' ? 'red' : t.status === 'warning' ? 'orange' : 'blue',
                fillColor: t.status === 'sos' ? 'red' : t.status === 'warning' ? 'orange' : '#3b82f6',
                fillOpacity: 0.7 
              }}
            >
              <Popup>
                Tourist ID: #{1000 + t.id} <br />
                Status: <strong className={t.status === 'sos' ? 'text-red-600' : 'text-blue-600'}>{t.status.toUpperCase()}</strong>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default TouristHeatmap;