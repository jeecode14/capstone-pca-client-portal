export const layerDetails = [
    {
        name: 'Solar PV Installation Potential',
        source: 'Project SINAG Data Product',
        description:
            ' The effective solar PV power resource potential in the Philippines considering meteorological and geomorphological aspects.',
        resolution: {
            temporal_resolution: 'Monthly'
        }
    },
    {
        name: 'Shortwave Radiation',
        source: 'HIMAWARI',
        description:
            'SWR is obtained from Himawari L3 PAR(Short Wave Radiation / Photosynthetically Available Radiation) data product.',
        resolution: {
            temporal_resolution: 'Monthly'
        }
    },
    {
        name: 'Cell Temperature',
        source: 'Project SINAG Data Product',
        description:
            'Tcell is the computed cell temperature from shortwave radiation, ambient temperature and wind speed.',
        resolution: {
            temporal_resolution: 'Monthly'
        }
    },
    {
        name: 'Temperature Effect',
        source: 'Project SINAG Data Product',
        description: 'Δμt is the loss in efficiency due to temperature effects.',
        resolution: {
            temporal_resolution: 'Monthly'
        }
    },
    {
        name: 'Dust Effects',
        source: 'Project SINAG Data Product',
        description:
            'The combined effects of dust and precipitation was calculated using the AirRGB decomposition method which requires values of Aerosol Optical Depth (AOD) and Angstrom Exponent (AE). In the Philippines, primarily, the R component is relevant with high AE and high AOD.',
        resolution: {
            temporal_resolution: 'Monthly'
        }
    }
];
