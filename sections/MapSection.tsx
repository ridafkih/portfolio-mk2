import React, { useEffect, useState } from "react";
import { ColorScheme, Map, MapType, Marker } from "mapkit-react";
import { usePreferredTheme } from "@/hooks/preferred-theme";
import { LocationInformation } from "@/@types/location";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

const token =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijc3SFRRR0xaRDMifQ.eyJpc3MiOiJIUUxNOFBIV0NNIiwiaWF0IjoxNjc4MDU2ODYzLCJleHAiOjE3MDk1OTY4MDAsIm9yaWdpbiI6Imh0dHBzOi8vd3d3LnJpZGEuZGV2In0.L1APky8haemxHF3INFW0HULn4djTsVGbrwHCTUqfAf370P0pQ_g64Gg1k9Vrz9K_ahDLhFlic1UHkIOzeXvTxw";

const MapSection: React.VFC = () => {
  const [location, setLocation] = useState<LocationInformation>();

  const [mapTransform, setMapTransform] = useState<string>(
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.75)"
  );
  const { theme } = usePreferredTheme();

  useEffect(() => {
    if (location)
      setMapTransform("rotateX(50deg) rotateY(0deg) rotateZ(16deg) scale(0.9)");
    else
      fetch("/api/location")
        .then((response) => response.json() as Promise<LocationInformation>)
        .then(setLocation);
  }, [location, setLocation]);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative flex items-center justify-center w-full overflow-hidden rounded-lg h-44"
        style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute z-20 w-[1200px] h-[1200px] transition-transform delay-1000 duration-1000"
          style={{ transform: mapTransform }}
        >
          {location && (
            <Map
              token={token}
              initialRegion={{
                centerLatitude: location.latitude,
                centerLongitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
              colorScheme={
                theme === "light" ? ColorScheme.Light : ColorScheme.Dark
              }
              isZoomEnabled={false}
              isRotationEnabled={false}
              isScrollEnabled={false}
              showsMapTypeControl={false}
              showsPointsOfInterest={false}
              showsUserLocation={false}
              showsUserLocationControl={false}
              showsZoomControl={false}
              mapType={MapType.MutedStandard}
            />
          )}
        </div>
        <div className="absolute inset-0 z-10 opacity-40 bg-neutral-300 dark:bg-neutral-800" />
      </div>
      <div className="min-h-[1rem]">
        {location && <div className="flex items-center justify-between">
          <SewingPinFilledIcon className="dark:text-neutral-500 text-neutral-600" />
          <div className="flex items-center gap-4 flex-end">
            <p className="text-xs dark:text-neutral-500 text-neutral-600">last seen in {location?.description?.toLowerCase()}</p>
            <div className="relative w-1 h-1">
              <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full" />
              <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full animate-ping" />
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default MapSection;
