import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const worldGeoURL = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export default function Dashboard() {
    const locationData = [
        {
          name: 'Pakistan',
          coordinates: [69.3451, 30.3753],
        },
        {
          name: 'USA',
          coordinates: [-95.7129, 37.0902],
        },
        // Add more location data objects as needed
      ];

  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    if (locationData.length > 0) {
      const coordinates = locationData.map((location) => location.coordinates);
      const minX = Math.min(...coordinates.map(([longitude]) => longitude));
      const maxX = Math.max(...coordinates.map(([longitude]) => longitude));
      const minY = Math.min(...coordinates.map(([, latitude]) => latitude));
      const maxY = Math.max(...coordinates.map(([, latitude]) => latitude));

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      const deltaX = maxX - minX;
      const deltaY = maxY - minY;

      const zoomX = 360 / deltaX;
      const zoomY = 180 / deltaY;

      const zoom = Math.min(zoomX, zoomY);

      setCenter([centerX, centerY]);
      setZoom(zoom);
    }
  }, [locationData]);

  return (
    <div style={{ width: '50%', height: '500px', backgroundColor: 'white' }}>
      <ComposableMap
        projection="geoMercator"
        width={400}
        height={400}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup zoom={zoom} center={center}>
          <Geographies geography={worldGeoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#1a1a1c" stroke="#575757" />
              ))
            }
          </Geographies>
          {locationData.map((location) => (
            <Marker coordinates={location.coordinates}>
              <circle r={0} fill="#F00" />
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 7.31 5.35 12.37 11.74 20.29a1 1 0 0 0 1.52 0C18.65 24.37 24 19.31 24 12c0-6.63-5.37-12-12-12zm0 17.33a5.32 5.32 0 1 1 0-10.64 5.32 5.32 0 0 1 0 10.64zm.67-8.25h-.96v3.95l2.67 1.6.48-.8-2.19-1.31v-3.94z"
                fill="#FF0000"
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}