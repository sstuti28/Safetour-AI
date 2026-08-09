import React from 'react';
import MainMap from '../components/maps/MainMap';
import MapSidebar from '../components/maps/MapSidebar';

const TouristMapPage = () => {
  return (
    <div className="min-h-[80vh] h-[calc(100vh-5rem)] flex flex-col font-sans overflow-hidden rounded-xl border border-slate-200">
      <div className="flex-grow flex flex-col md:flex-row h-full">
        
        {/* Sidebar */}
        <MapSidebar />

        {/* Map Container (z-0 ensures it stays behind your topbar/sidebar) */}
        <div className="flex-grow h-full min-h-[500px] z-0">
          <MainMap />
        </div>

      </div>
    </div>
  );
};

export default TouristMapPage;