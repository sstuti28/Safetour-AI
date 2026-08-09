import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useGeolocation from '../../hooks/useGeolocation';
import L from 'leaflet';

// Fix for Leaflet default marker icons not showing in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Mock Danger Zones (Red Polygons)
const dangerZones = [
  [ [28.61, 77.20], [28.62, 77.22], [28.60, 77.23] ], // Flood Zone
];

// Mock Safe Route (Green Line)
const safeRoute = [
  [28.58, 77.18], [28.59, 77.20], [28.61, 77.24], [28.63, 77.25]
];

const MainMap = () => {
  const { location, error } = useGeolocation();
  
  // Default Center (New Delhi) if GPS is off
  const center = location ? [location.lat, location.lng] : [28.6139, 77.2090];

  return (
    <div className="w-full h-full relative">
      <MapContainer 
        center={center} 
        zoom={12} 
        style={{ width: '100%', height: '100%' }}
      >
        {/* FREE OpenStreetMap Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Tourist Live Location */}
        {location && (
          <>
            <Marker position={[location.lat, location.lng]}>
              <Popup>You are here</Popup>
            </Marker>
            <Circle 
              center={[location.lat, location.lng]} 
              pathOptions={{ fillColor: 'blue', color: 'blue' }} 
              radius={400} 
            />
          </>
        )}

        {/* Danger Zones Overlay */}
        {dangerZones.map((zone, idx) => (
          <Polygon 
            key={idx} 
            positions={zone} 
            pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.4 }} 
          >
            <Popup>Danger Zone: High Risk Area</Popup>
          </Polygon>
        ))}

        {/* AI Safe Route Overlay */}
        <Polyline 
          positions={safeRoute} 
          pathOptions={{ color: '#10b981', weight: 5 }} 
        >
          <Popup>AI Recommended Safe Route</Popup>
        </Polyline>

      </MapContainer>

      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-100 text-red-700 p-3 rounded-lg shadow-md z-[1000] text-sm font-medium text-center border border-red-200">
          Location Error: {error}. Please enable GPS.
        </div>
      )}
    </div>
  );
};

export default MainMap;