import React from "react";
import {MapContainer, 
    TileLayer,
    LayersControl,
    GeoJSON,
} from "react-leaflet"
import kabupaten from '../Data/kabupaten.json';
import AK from '../Data/areal_kerja.json';
import april from '../Data/april.json';

const aprilStyle = {
    fillColor: "red",
    fillOpacity:1,
    color:"black",
    weight: 1,
}

const AKStyle = {
    fillOpacity:0,
    color:"black",
    weight: 1,
}

const onEachApril = (april, layer) => {
    const AprillName = april.properties.remarks;
    layer.bindPopup(AprillName);
}

function MyMap (){
    const position = [-2.572042, 140.293851]
    return(
        <MapContainer className = "map"
        center={position}
        zoom={12}
        style = {{height:800,weight:"100%"}}
        >
            
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
            <LayersControl position="topright">
            <LayersControl.Overlay name="Update April">
                    <GeoJSON  style={aprilStyle} onEachFeature={onEachApril} data = {april}/>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Areal Kerja">
                    <GeoJSON style={AKStyle}  data = {AK}/>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Batas Administrasi">
                    <GeoJSON data = {kabupaten}/>
                </LayersControl.Overlay>    
            </LayersControl>
        </MapContainer>
    )
}

export default MyMap;