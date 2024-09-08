"use client";

import useGeolocation from "@/hooks/use-geolokation";
import { useEffect } from "react";

const GeoLocation = () => {
  const { latitude, longitude, error } = useGeolocation();
  useEffect(() => {
    //@ts-ignore
    if (!error && window.ymaps) {
      //@ts-ignore
      const myReverseGeocoder = window.ymaps.geocode([latitude, longitude]);
      myReverseGeocoder.then((res: any) => {
        const geo = res.geoObjects.get(0).properties.get("metaDataProperty")
          .GeocoderMetaData.text;
        localStorage.setItem("geo", geo);
      });
    }
  }, [latitude, longitude, error]);
  return null;
};

export default GeoLocation;
