import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FsaW1vdG8tdGVzdCIsImEiOiJjbTRjbGVweG8wNmZ4MmpyNjJlczU3ODc4In0.tVmAbu1paX21aW-zexwhCw';

const MapPage: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        projection: 'globe',
        zoom: 1,
        center: [30, 15],
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.scrollZoom.disable();

      map.on('style.load', () => {
        map.setFog({});
      });
      map.on('load', () => {
        console.log('Map has been initialized');
        const initialMarkerCoordinates: [number, number] = [30, 15];

        markerRef.current = new mapboxgl.Marker()
          .setLngLat(initialMarkerCoordinates)
          .addTo(map);

        map.on('click', (e) => {
          const newCoordinates: [number, number] = [e.lngLat.lng, e.lngLat.lat];
          if (markerRef.current) {
            markerRef.current.setLngLat(newCoordinates);
          }
        });
      });

      return () => map.remove();
    }
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default MapPage;
