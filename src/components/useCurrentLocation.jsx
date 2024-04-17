import { useState, useEffect } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
    };

    if (navigator.geolocation) {
      getCurrentLocation();
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return { location, latitude, longitude, error, loading };
}