import { useState, useEffect } from "react";

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

function useGeolocation(): GeolocationState {
  const [location, setLocation] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    const success = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const error = () => {
      setLocation((prevState) => ({
        ...prevState,
        error: "Unable to retrieve your location",
      }));
    };

    // Вызов метода получения текущей позиции
    navigator.geolocation.getCurrentPosition(success, error);

    // Нет необходимости в очистке для getCurrentPosition, так как он не возвращает ID
  }, []);

  return location;
}

export default useGeolocation;
