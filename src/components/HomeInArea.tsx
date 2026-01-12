import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons (good practice)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function HomeArea() {
  const center = [45.5606, -73.7121];
  const locations = [
    {
      id: 1,
      position: [45.5606, -73.7121],
      title: "Market habitats locatifs",
      price: "$1,653 per month",
      main: true,
    },
    {
      id: 2,
      position: [45.57, -73.69],
      label: "2",
    },
    {
      id: 3,
      position: [45.55, -73.73],
      label: "16",
    },
    {
      id: 4,
      position: [45.545, -73.7],
      label: "4",
    },
  ];

  return (
    <section className="mt-14 mx-5">
      <h2 className="mb-4 text-lg font-bold text-black">Home in the area</h2>

      <div
        className="overflow-hidden rounded-xl border"
        style={{ height: "340px" }}
      >
        <MapContainer
          center={center}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc) => (
            <Marker key={loc.id} position={loc.position}>
              {loc.main && (
                <Popup>
                  <div className="space-y-1">
                    <p className="font-bold">{loc.title}</p>
                    <p className="text-xs text-gray-500">Condos</p>
                    <p className="text-sm font-semibold text-green-600">
                      {loc.price}
                    </p>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
