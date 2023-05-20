import React from "react";
import { MapContainer, TileLayer, LayersControl, GeoJSON } from "react-leaflet";
import Legend from "./Legend";
import AK from "../Data/areal_kerja.json";
import april from "../Data/april.json";
import mei from "../Data/mei.json";


console.log(april);
console.log(mei)

const aprilStyle = (april) => {
    var remarks = april.properties.remarks
    if (remarks == "sudah ditanami") {
        return {
            fillColor: "green",
            fillOpacity: 1,
            color: "black",
            weight: 1,
        }
    } else if (remarks == "belum ditanami") {
        return {
            fillColor: "yellow",
            fillOpacity: 1,
            color: "black",
            weight: 1,
        }
    } else {
        return {
            fillColor: "red",
            fillOpacity: 1,
            color: "black",
            weight: 1,
        }
    }
}

const meiStyle = (mei) => {
  var remarks = mei.properties.remarks
  if (remarks == "sudah ditanami") {
      return {
          fillColor: "green",
          fillOpacity: 1,
          color: "black",
          weight: 1,
      }
  } else if (remarks == "on progress") {
      return {
          fillColor: "yellow",
          fillOpacity: 1,
          color: "black",
          weight: 1,
      }
  } else {
      return {
          fillColor: "red",
          fillOpacity: 1,
          color: "black",
          weight: 1,
      }
  }
}


const AKStyle = {
  fillOpacity: 0,
  color: "red",
  weight: 1,
};


const onEachApril = (april, layer) => {
  const AprillName = `
    <table>
        <tr>
            <th colspan="3">Detail</th>
        </tr>
        <tr>
            <td>Blok</td>
            <td>:</td>
            <td>${april.properties.blok}</td>
        </tr>
        <tr>
            <td>Kampung</td>
            <td>:</td>
            <td>${april.properties.kampung}</td>
        </tr>
        <tr>
            <td>Luas</td>
            <td>:</td>
            <td>${april.properties.luas_ha} Ha</td>
        </tr>
        <tr>
            <td>Periode</td>
            <td>:</td>
            <td>${april.properties.periode}</td>
        </tr>
        <tr>
            <td>Petak</td>
            <td>:</td>
            <td>${april.properties.petak}</td>
        </tr>
        <tr>
            <td>Remarks</td>
            <td>:</td>
            <td>${april.properties.remarks}</td>
        </tr>
    </table>
    `;
  layer.bindPopup(AprillName);
};

const onEachMei = (mei, layer) => {
  const MeiName = `
    <table>
        <tr>
            <th colspan="3">Detail</th>
        </tr>
        <tr>
            <td>Blok</td>
            <td>:</td>
            <td>${mei.properties.blok}</td>
        </tr>
        <tr>
            <td>Kampung</td>
            <td>:</td>
            <td>${mei.properties.kampung}</td>
        </tr>
        <tr>
            <td>Luas</td>
            <td>:</td>
            <td>${mei.properties.luas_ha} Ha</td>
        </tr>
        <tr>
            <td>Periode</td>
            <td>:</td>
            <td>${mei.properties.periode}</td>
        </tr>
        <tr>
            <td>Petak</td>
            <td>:</td>
            <td>${mei.properties.petak}</td>
        </tr>
        <tr>
            <td>Remarks</td>
            <td>:</td>
            <td>${mei.properties.remarks}</td>
        </tr>
    </table>
    `;
  layer.bindPopup(MeiName);
};

function MyMap() {
  const position = [-2.572042, 140.293851];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={12}
      style={{ height: 800, weight: "100%" }}
    >
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <LayersControl position="topright">
      <LayersControl.Overlay name="Update Mei">
          <GeoJSON 
            style={meiStyle} 
            onEachFeature={onEachMei}
            data={mei} />
        </LayersControl.Overlay> 
        <LayersControl.Overlay name="Update April">
          <GeoJSON
            style={aprilStyle}
            onEachFeature={onEachApril}
            data={april}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Areal Kerja">
          <GeoJSON style={AKStyle} data={AK} />
        </LayersControl.Overlay>
            
      </LayersControl>
      <Legend/>
    </MapContainer>
  );
}

export default MyMap;
