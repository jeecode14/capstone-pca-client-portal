const provinces = [
    {
        province_code: '0128',
        province_name: 'Ilocos Norte',
        psgc_code: '012800000',
        region_code: '01'
    },
    {
        province_code: '0129',
        province_name: 'Ilocos Sur',
        psgc_code: '012900000',
        region_code: '01'
    },
    {
        province_code: '0133',
        province_name: 'La Union',
        psgc_code: '013300000',
        region_code: '01'
    },
    {
        province_code: '0155',
        province_name: 'Pangasinan',
        psgc_code: '015500000',
        region_code: '01'
    },
    {
        province_code: '0209',
        province_name: 'Batanes',
        psgc_code: '020900000',
        region_code: '02'
    },
    {
        province_code: '0215',
        province_name: 'Cagayan',
        psgc_code: '021500000',
        region_code: '02'
    },
    {
        province_code: '0231',
        province_name: 'Isabela',
        psgc_code: '023100000',
        region_code: '02'
    },
    {
        province_code: '0250',
        province_name: 'Nueva Vizcaya',
        psgc_code: '025000000',
        region_code: '02'
    },
    {
        province_code: '0257',
        province_name: 'Quirino',
        psgc_code: '025700000',
        region_code: '02'
    },
    {
        province_code: '0308',
        province_name: 'Bataan',
        psgc_code: '030800000',
        region_code: '03'
    },
    {
        province_code: '0314',
        province_name: 'Bulacan',
        psgc_code: '031400000',
        region_code: '03'
    },
    {
        province_code: '0349',
        province_name: 'Nueva Ecija',
        psgc_code: '034900000',
        region_code: '03'
    },
    {
        province_code: '0354',
        province_name: 'Pampanga',
        psgc_code: '035400000',
        region_code: '03'
    },
    {
        province_code: '0369',
        province_name: 'Tarlac',
        psgc_code: '036900000',
        region_code: '03'
    },
    {
        province_code: '0371',
        province_name: 'Zambales',
        psgc_code: '037100000',
        region_code: '03'
    },
    {
        province_code: '0377',
        province_name: 'Aurora',
        psgc_code: '037700000',
        region_code: '03'
    },
    {
        province_code: '0410',
        province_name: 'Batangas',
        psgc_code: '041000000',
        region_code: '04'
    },
    {
        province_code: '0421',
        province_name: 'Cavite',
        psgc_code: '042100000',
        region_code: '04'
    },
    {
        province_code: '0434',
        province_name: 'Laguna',
        psgc_code: '043400000',
        region_code: '04'
    },
    {
        province_code: '0456',
        province_name: 'Quezon',
        psgc_code: '045600000',
        region_code: '04'
    },
    {
        province_code: '0458',
        province_name: 'Rizal',
        psgc_code: '045800000',
        region_code: '04'
    },
    {
        province_code: '1740',
        province_name: 'Marinduque',
        psgc_code: '174000000',
        region_code: '17'
    },
    {
        province_code: '1751',
        province_name: 'Occidental Mindoro',
        psgc_code: '175100000',
        region_code: '17'
    },
    {
        province_code: '1752',
        province_name: 'Oriental Mindoro',
        psgc_code: '175200000',
        region_code: '17'
    },
    {
        province_code: '1753',
        province_name: 'Palawan',
        psgc_code: '175300000',
        region_code: '17'
    },
    {
        province_code: '1759',
        province_name: 'Romblon',
        psgc_code: '175900000',
        region_code: '17'
    },
    {
        province_code: '0505',
        province_name: 'Albay',
        psgc_code: '050500000',
        region_code: '05'
    },
    {
        province_code: '0516',
        province_name: 'Camarines Norte',
        psgc_code: '051600000',
        region_code: '05'
    },
    {
        province_code: '0517',
        province_name: 'Camarines Sur',
        psgc_code: '051700000',
        region_code: '05'
    },
    {
        province_code: '0520',
        province_name: 'Catanduanes',
        psgc_code: '052000000',
        region_code: '05'
    },
    {
        province_code: '0541',
        province_name: 'Masbate',
        psgc_code: '054100000',
        region_code: '05'
    },
    {
        province_code: '0562',
        province_name: 'Sorsogon',
        psgc_code: '056200000',
        region_code: '05'
    },
    {
        province_code: '0604',
        province_name: 'Aklan',
        psgc_code: '060400000',
        region_code: '06'
    },
    {
        province_code: '0606',
        province_name: 'Antique',
        psgc_code: '060600000',
        region_code: '06'
    },
    {
        province_code: '0619',
        province_name: 'Capiz',
        psgc_code: '061900000',
        region_code: '06'
    },
    {
        province_code: '0630',
        province_name: 'Iloilo',
        psgc_code: '063000000',
        region_code: '06'
    },
    {
        province_code: '0645',
        province_name: 'Negros Occidental',
        psgc_code: '064500000',
        region_code: '06'
    },
    {
        province_code: '0679',
        province_name: 'Guimaras',
        psgc_code: '067900000',
        region_code: '06'
    },
    {
        province_code: '0712',
        province_name: 'Bohol',
        psgc_code: '071200000',
        region_code: '07'
    },
    {
        province_code: '0722',
        province_name: 'Cebu',
        psgc_code: '072200000',
        region_code: '07'
    },
    {
        province_code: '0746',
        province_name: 'Negros Oriental',
        psgc_code: '074600000',
        region_code: '07'
    },
    {
        province_code: '0761',
        province_name: 'Siquijor',
        psgc_code: '076100000',
        region_code: '07'
    },
    {
        province_code: '0826',
        province_name: 'Eastern Samar',
        psgc_code: '082600000',
        region_code: '08'
    },
    {
        province_code: '0837',
        province_name: 'Leyte',
        psgc_code: '083700000',
        region_code: '08'
    },
    {
        province_code: '0848',
        province_name: 'Northern Samar',
        psgc_code: '084800000',
        region_code: '08'
    },
    {
        province_code: '0860',
        province_name: 'Samar (Western Samar)',
        psgc_code: '086000000',
        region_code: '08'
    },
    {
        province_code: '0864',
        province_name: 'Southern Leyte',
        psgc_code: '086400000',
        region_code: '08'
    },
    {
        province_code: '0878',
        province_name: 'Biliran',
        psgc_code: '087800000',
        region_code: '08'
    },
    {
        province_code: '0972',
        province_name: 'Zamboanga Del Norte',
        psgc_code: '097200000',
        region_code: '09'
    },
    {
        province_code: '0973',
        province_name: 'Zamboanga Del Sur',
        psgc_code: '097300000',
        region_code: '09'
    },
    {
        province_code: '0983',
        province_name: 'Zamboanga Sibugay',
        psgc_code: '098300000',
        region_code: '09'
    },
    {
        province_code: '0997',
        province_name: 'City Of Isabela',
        psgc_code: '099700000',
        region_code: '09'
    },
    {
        province_code: '1013',
        province_name: 'Bukidnon',
        psgc_code: '101300000',
        region_code: '10'
    },
    {
        province_code: '1018',
        province_name: 'Camiguin',
        psgc_code: '101800000',
        region_code: '10'
    },
    {
        province_code: '1035',
        province_name: 'Lanao Del Norte',
        psgc_code: '103500000',
        region_code: '10'
    },
    {
        province_code: '1042',
        province_name: 'Misamis Occidental',
        psgc_code: '104200000',
        region_code: '10'
    },
    {
        province_code: '1043',
        province_name: 'Misamis Oriental',
        psgc_code: '104300000',
        region_code: '10'
    },
    {
        province_code: '1123',
        province_name: 'Davao Del Norte',
        psgc_code: '112300000',
        region_code: '11'
    },
    {
        province_code: '1124',
        province_name: 'Davao Del Sur',
        psgc_code: '112400000',
        region_code: '11'
    },
    {
        province_code: '1125',
        province_name: 'Davao Oriental',
        psgc_code: '112500000',
        region_code: '11'
    },
    {
        province_code: '1182',
        province_name: 'Compostela Valley',
        psgc_code: '118200000',
        region_code: '11'
    },
    {
        province_code: '1186',
        province_name: 'Davao Occidental',
        psgc_code: '118600000',
        region_code: '11'
    },
    {
        province_code: '1247',
        province_name: 'Cotabato (North Cotabato)',
        psgc_code: '124700000',
        region_code: '12'
    },
    {
        province_code: '1263',
        province_name: 'South Cotabato',
        psgc_code: '126300000',
        region_code: '12'
    },
    {
        province_code: '1265',
        province_name: 'Sultan Kudarat',
        psgc_code: '126500000',
        region_code: '12'
    },
    {
        province_code: '1280',
        province_name: 'Sarangani',
        psgc_code: '128000000',
        region_code: '12'
    },
    {
        province_code: '1298',
        province_name: 'Cotabato City',
        psgc_code: '129800000',
        region_code: '12'
    },
    {
        province_code: '1339',
        province_name: 'Ncr, City Of Manila, First District',
        psgc_code: '133900000',
        region_code: '13'
    },
    {
        province_code: '1339',
        province_name: 'City Of Manila',
        psgc_code: '133900000',
        region_code: '13'
    },
    {
        province_code: '1374',
        province_name: 'Ncr, Second District',
        psgc_code: '137400000',
        region_code: '13'
    },
    {
        province_code: '1375',
        province_name: 'Ncr, Third District',
        psgc_code: '137500000',
        region_code: '13'
    },
    {
        province_code: '1376',
        province_name: 'Ncr, Fourth District',
        psgc_code: '137600000',
        region_code: '13'
    },
    {
        province_code: '1401',
        province_name: 'Abra',
        psgc_code: '140100000',
        region_code: '14'
    },
    {
        province_code: '1411',
        province_name: 'Benguet',
        psgc_code: '141100000',
        region_code: '14'
    },
    {
        province_code: '1427',
        province_name: 'Ifugao',
        psgc_code: '142700000',
        region_code: '14'
    },
    {
        province_code: '1432',
        province_name: 'Kalinga',
        psgc_code: '143200000',
        region_code: '14'
    },
    {
        province_code: '1444',
        province_name: 'Mountain Province',
        psgc_code: '144400000',
        region_code: '14'
    },
    {
        province_code: '1481',
        province_name: 'Apayao',
        psgc_code: '148100000',
        region_code: '14'
    },
    {
        province_code: '1507',
        province_name: 'Basilan',
        psgc_code: '150700000',
        region_code: '15'
    },
    {
        province_code: '1536',
        province_name: 'Lanao Del Sur',
        psgc_code: '153600000',
        region_code: '15'
    },
    {
        province_code: '1538',
        province_name: 'Maguindanao',
        psgc_code: '153800000',
        region_code: '15'
    },
    {
        province_code: '1566',
        province_name: 'Sulu',
        psgc_code: '156600000',
        region_code: '15'
    },
    {
        province_code: '1570',
        province_name: 'Tawi-tawi',
        psgc_code: '157000000',
        region_code: '15'
    },
    {
        province_code: '1602',
        province_name: 'Agusan Del Norte',
        psgc_code: '160200000',
        region_code: '16'
    },
    {
        province_code: '1603',
        province_name: 'Agusan Del Sur',
        psgc_code: '160300000',
        region_code: '16'
    },
    {
        province_code: '1667',
        province_name: 'Surigao Del Norte',
        psgc_code: '166700000',
        region_code: '16'
    },
    {
        province_code: '1668',
        province_name: 'Surigao Del Sur',
        psgc_code: '166800000',
        region_code: '16'
    },
    {
        province_code: '1685',
        province_name: 'Dinagat Islands',
        psgc_code: '168500000',
        region_code: '16'
    }
];

export default provinces;
