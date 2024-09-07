import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

/**
 * @returns {{ city: string | null, country: string | null, countryCode: string | null, lat: number | null, lon: number | null, region: string | null, regionCode: string | null, timezone: string | null, zip: string | null }}
 */
export default function useGeoLocation(): {
  city: string | null;
  country: string | null;
  countryCode: string | null;
  lat: number | null;
  lon: number | null;
  region: string | null;
  regionCode: string | null;
  timezone: string | null;
  zip: string | null;
} {
  const [locationData, setLocationData] = useState<{
    city: string | null;
    country: string | null;
    countryCode: string | null;
    lat: number | null;
    lon: number | null;
    region: string | null;
    regionCode: string | null;
    timezone: string | null;
    zip: string | null;
  } | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const res = await fetch("http://ip-api.com/json", {
      referrerPolicy: "unsafe-url",
    });
    const data = await res.json();
    console.log(data);

    if (data.status === "success") setLocationData(data);
  }

  return {
    city: locationData?.city as string | null,
    country: locationData?.country as string | null,
    countryCode: locationData?.countryCode as string | null,
    lat: locationData?.lat as number | null,
    lon: locationData?.lon as number | null,
    region: locationData?.region as string | null,
    regionCode: locationData?.regionCode as string | null,
    timezone: locationData?.timezone as string | null,
    zip: locationData?.zip as string | null,
  };
}
