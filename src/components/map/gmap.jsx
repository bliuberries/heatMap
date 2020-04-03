import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ children, ...props }) => {
  return (
    <div style={{height: '100vh' }}>
      <GoogleMapReact {...props} >
        {children}
      </GoogleMapReact>
    </div>
  )
};

export default GoogleMap;