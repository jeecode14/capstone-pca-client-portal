import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import parseGeoraster from 'georaster';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import { MapContainer, TileLayer, ZoomControl, FeatureGroup, LayersControl } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import L from 'leaflet';
import TabContainer from './TabContainer';
import { mapState } from 'services/features/MapSlice';
import { LoadingOverlay } from '@mantine/core';
import { get } from 'lodash';
import chroma from 'chroma-js';

export default function Map() {
    const { BaseLayer } = LayersControl;
    const { selectedLayer, loading, layers } = useSelector(mapState);
    const [drawState, setDrawState] = useState(null);
    const mapRef = useRef();
    const layerRef = useRef(L.layerGroup());
    const handleDrawCreate = (data) => {
        setDrawState(data.layer.toGeoJSON());
        const layer = data.layer;
        mapRef.current.addLayer(layer);
    };
    const handleDrawDelete = () => {
        return;
    };
    const handleDrawEdit = () => {
        return;
    };

    useEffect(() => {
        if (mapRef.current) {
            layerRef.current.clearLayers();
        }
    }, [layers]);

    useEffect(() => {
        get(layers, selectedLayer) &&
            fetch(get(layers, `${selectedLayer}.cloud_geotiff`), {
                'Access-Control-Allow-Origin': '*'
            })
                .then((response) => response.arrayBuffer())
                .then((arrayBuffer) => {
                    parseGeoraster(arrayBuffer).then((georaster) => {
                        const min = georaster.mins[0];
                        //  const max = georaster.maxs[0];
                        const range = georaster.ranges[0];

                        // available color scales can be found by running console.log(chroma.brewer);
                        // console.log(chroma.brewer);
                        var scale = chroma.scale(
                            get(layers, `${selectedLayer}.product_info.color_scale`)
                        );

                        var layer = new GeoRasterLayer({
                            mask: drawState,
                            mask_strategy: 'outside',
                            zIndex: 101,
                            georaster: georaster,
                            opacity: 0.7,
                            pixelValuesToColorFn: function (pixelValues) {
                                var pixelValue = pixelValues[0]; // there's just one band in this raster

                                // if there's zero wind, don't return a color
                                if (pixelValue === 0) return null;

                                // scale to 0 - 1 used by chroma
                                var scaledPixelValue = (pixelValue - min) / range;

                                var color = scale(scaledPixelValue).hex();

                                return color;
                            },
                            resolution: 256
                        });
                        // mapRef.current.addLayer(layer);
                        layerRef.current.clearLayers();
                        layerRef.current.addLayer(layer);
                        layerRef.current.addTo(mapRef.current);
                        // mapRef.current.fitBounds(layer.getBounds());
                    });
                });
    }, [selectedLayer, drawState]);

    return (
        <>
            <LoadingOverlay
                zIndex={999}
                visible={loading}
                overlayBlur={2}
                loaderProps={{ size: 'lg', color: 'orange' }}
            />
            <div className="map">
                <TabContainer />
                <MapContainer
                    ref={mapRef}
                    className="mapContainer"
                    center={[12.8797, 121.774]}
                    zoom={6}
                    zoomControl={false}>
                    <ZoomControl position="bottomright" />

                    <LayersControl>
                        <BaseLayer checked name="Openstreet Map">
                            <TileLayer
                                zIndex={100}
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=b5f321aa-1b69-4377-854e-30066594b7da"
                            />
                        </BaseLayer>
                        <BaseLayer name="Digital Elevation Model">
                            <TileLayer
                                zIndex={100}
                                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                                maxNativeZoom={8}
                            />
                        </BaseLayer>
                    </LayersControl>

                    <FeatureGroup>
                        <EditControl
                            position="topright"
                            onEdited={handleDrawEdit}
                            onCreated={handleDrawCreate}
                            onDeleted={handleDrawDelete}
                            draw={{
                                circle: false,
                                marker: false,
                                circlemarker: false,
                                polyline: false,
                                rectangle: {
                                    shapeOptions: {
                                        opacity: 0.3,
                                        fillOpacity: 0, // set fill opacity to 50%
                                        color: 'blue', // set border color to blue
                                        weight: 2 // set border weight to 2 pixels
                                    }
                                }
                            }}
                        />
                    </FeatureGroup>
                </MapContainer>
            </div>
        </>
    );
}
