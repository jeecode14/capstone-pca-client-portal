const provinces = [
    {
            id: 1,
            created_at: '2023-05-02T19:38:38.000000Z',
            updated_at: '2023-05-02T19:38:38.000000Z',
            name: 'Ilocos Norte',
            code: '0102800000',
            region_id: 1
        },
    {
            id: 2,
            created_at: '2023-05-02T19:38:39.000000Z',
            updated_at: '2023-05-02T19:38:39.000000Z',
            name: 'Ilocos Sur',
            code: '0102900000',
            region_id: 1
        },
    {
            id: 3,
            created_at: '2023-05-02T19:38:40.000000Z',
            updated_at: '2023-05-02T19:38:40.000000Z',
            name: 'La Union',
            code: '0103300000',
            region_id: 1
        },
    {
            id: 4,
            created_at: '2023-05-02T19:38:41.000000Z',
            updated_at: '2023-05-02T19:38:41.000000Z',
            name: 'Pangasinan',
            code: '0105500000',
            region_id: 1
        },
    {
            id: 5,
            created_at: '2023-05-02T19:38:42.000000Z',
            updated_at: '2023-05-02T19:38:42.000000Z',
            name: 'Batanes',
            code: '0200900000',
            region_id: 2
        },
    {
            id: 6,
            created_at: '2023-05-02T19:38:42.000000Z',
            updated_at: '2023-05-02T19:38:42.000000Z',
            name: 'Cagayan',
            code: '0201500000',
            region_id: 2
        },
    {
            id: 7,
            created_at: '2023-05-02T19:38:43.000000Z',
            updated_at: '2023-05-02T19:38:43.000000Z',
            name: 'Isabela',
            code: '0203100000',
            region_id: 2
        },
    {
            id: 8,
            created_at: '2023-05-02T19:38:45.000000Z',
            updated_at: '2023-05-02T19:38:45.000000Z',
            name: 'Nueva Vizcaya',
            code: '0205000000',
            region_id: 2
        },
    {
            id: 9,
            created_at: '2023-05-02T19:38:45.000000Z',
            updated_at: '2023-05-02T19:38:45.000000Z',
            name: 'Quirino',
            code: '0205700000',
            region_id: 2
        },
    {
            id: 10,
            created_at: '2023-05-02T19:38:45.000000Z',
            updated_at: '2023-05-02T19:38:45.000000Z',
            name: 'Bataan',
            code: '0300800000',
            region_id: 3
        },
    {
            id: 11,
            created_at: '2023-05-02T19:38:46.000000Z',
            updated_at: '2023-05-02T19:38:46.000000Z',
            name: 'Bulacan',
            code: '0301400000',
            region_id: 3
        },
    {
            id: 12,
            created_at: '2023-05-02T19:38:46.000000Z',
            updated_at: '2023-05-02T19:38:46.000000Z',
            name: 'Nueva Ecija',
            code: '0304900000',
            region_id: 3
        },
    {
            id: 13,
            created_at: '2023-05-02T19:38:47.000000Z',
            updated_at: '2023-05-02T19:38:47.000000Z',
            name: 'Pampanga',
            code: '0305400000',
            region_id: 3
        },
    {
            id: 14,
            created_at: '2023-05-02T19:38:48.000000Z',
            updated_at: '2023-05-02T19:38:48.000000Z',
            name: 'Tarlac',
            code: '0306900000',
            region_id: 3
        },
    {
            id: 15,
            created_at: '2023-05-02T19:38:49.000000Z',
            updated_at: '2023-05-02T19:38:49.000000Z',
            name: 'Zambales',
            code: '0307100000',
            region_id: 3
        },
    {
            id: 16,
            created_at: '2023-05-02T19:38:49.000000Z',
            updated_at: '2023-05-02T19:38:49.000000Z',
            name: 'Aurora',
            code: '0307700000',
            region_id: 3
        },
    {
            id: 17,
            created_at: '2023-05-02T19:38:49.000000Z',
            updated_at: '2023-05-02T19:38:49.000000Z',
            name: 'Batangas',
            code: '0401000000',
            region_id: 4
        },
    {
            id: 18,
            created_at: '2023-05-02T19:38:50.000000Z',
            updated_at: '2023-05-02T19:38:50.000000Z',
            name: 'Cavite',
            code: '0402100000',
            region_id: 4
        },
    {
            id: 19,
            created_at: '2023-05-02T19:38:51.000000Z',
            updated_at: '2023-05-02T19:38:51.000000Z',
            name: 'Laguna',
            code: '0403400000',
            region_id: 4
        },
    {
            id: 20,
            created_at: '2023-05-02T19:38:52.000000Z',
            updated_at: '2023-05-02T19:38:52.000000Z',
            name: 'Quezon',
            code: '0405600000',
            region_id: 4
        },
    {
            id: 21,
            created_at: '2023-05-02T19:38:54.000000Z',
            updated_at: '2023-05-02T19:38:54.000000Z',
            name: 'Rizal',
            code: '0405800000',
            region_id: 4
        },
    {
            id: 22,
            created_at: '2023-05-02T19:38:54.000000Z',
            updated_at: '2023-05-02T19:38:54.000000Z',
            name: 'Marinduque',
            code: '1704000000',
            region_id: 5
        },
    {
            id: 23,
            created_at: '2023-05-02T19:38:54.000000Z',
            updated_at: '2023-05-02T19:38:54.000000Z',
            name: 'Occidental Mindoro',
            code: '1705100000',
            region_id: 5
        },
    {
            id: 24,
            created_at: '2023-05-02T19:38:54.000000Z',
            updated_at: '2023-05-02T19:38:54.000000Z',
            name: 'Oriental Mindoro',
            code: '1705200000',
            region_id: 5
        },
    {
            id: 25,
            created_at: '2023-05-02T19:38:55.000000Z',
            updated_at: '2023-05-02T19:38:55.000000Z',
            name: 'Palawan',
            code: '1705300000',
            region_id: 5
        },
    {
            id: 26,
            created_at: '2023-05-02T19:38:56.000000Z',
            updated_at: '2023-05-02T19:38:56.000000Z',
            name: 'Romblon',
            code: '1705900000',
            region_id: 5
        },
    {
            id: 27,
            created_at: '2023-05-02T19:38:56.000000Z',
            updated_at: '2023-05-02T19:38:56.000000Z',
            name: 'Albay',
            code: '0500500000',
            region_id: 6
        },
    {
            id: 28,
            created_at: '2023-05-02T19:38:57.000000Z',
            updated_at: '2023-05-02T19:38:57.000000Z',
            name: 'Camarines Norte',
            code: '0501600000',
            region_id: 6
        },
    {
            id: 29,
            created_at: '2023-05-02T19:38:57.000000Z',
            updated_at: '2023-05-02T19:38:57.000000Z',
            name: 'Camarines Sur',
            code: '0501700000',
            region_id: 6
        },
    {
            id: 30,
            created_at: '2023-05-02T19:38:58.000000Z',
            updated_at: '2023-05-02T19:38:58.000000Z',
            name: 'Catanduanes',
            code: '0502000000',
            region_id: 6
        },
    {
            id: 31,
            created_at: '2023-05-02T19:38:59.000000Z',
            updated_at: '2023-05-02T19:38:59.000000Z',
            name: 'Masbate',
            code: '0504100000',
            region_id: 6
        },
    {
            id: 32,
            created_at: '2023-05-02T19:38:59.000000Z',
            updated_at: '2023-05-02T19:38:59.000000Z',
            name: 'Sorsogon',
            code: '0506200000',
            region_id: 6
        },
    {
            id: 33,
            created_at: '2023-05-02T19:39:00.000000Z',
            updated_at: '2023-05-02T19:39:00.000000Z',
            name: 'Aklan',
            code: '0600400000',
            region_id: 7
        },
    {
            id: 34,
            created_at: '2023-05-02T19:39:00.000000Z',
            updated_at: '2023-05-02T19:39:00.000000Z',
            name: 'Antique',
            code: '0600600000',
            region_id: 7
        },
    {
            id: 35,
            created_at: '2023-05-02T19:39:01.000000Z',
            updated_at: '2023-05-02T19:39:01.000000Z',
            name: 'Capiz',
            code: '0601900000',
            region_id: 7
        },
    {
            id: 36,
            created_at: '2023-05-02T19:39:02.000000Z',
            updated_at: '2023-05-02T19:39:02.000000Z',
            name: 'Iloilo',
            code: '0603000000',
            region_id: 7
        },
    {
            id: 37,
            created_at: '2023-05-02T19:39:04.000000Z',
            updated_at: '2023-05-02T19:39:04.000000Z',
            name: 'Negros Occidental',
            code: '0604500000',
            region_id: 7
        },
    {
            id: 38,
            created_at: '2023-05-02T19:39:05.000000Z',
            updated_at: '2023-05-02T19:39:05.000000Z',
            name: 'Guimaras',
            code: '0607900000',
            region_id: 7
        },
    {
            id: 39,
            created_at: '2023-05-02T19:39:05.000000Z',
            updated_at: '2023-05-02T19:39:05.000000Z',
            name: 'Bohol',
            code: '0701200000',
            region_id: 8
        },
    {
            id: 40,
            created_at: '2023-05-02T19:39:06.000000Z',
            updated_at: '2023-05-02T19:39:06.000000Z',
            name: 'Cebu',
            code: '0702200000',
            region_id: 8
        },
    {
            id: 41,
            created_at: '2023-05-02T19:39:08.000000Z',
            updated_at: '2023-05-02T19:39:08.000000Z',
            name: 'Negros Oriental',
            code: '0704600000',
            region_id: 8
        },
    {
            id: 42,
            created_at: '2023-05-02T19:39:08.000000Z',
            updated_at: '2023-05-02T19:39:08.000000Z',
            name: 'Siquijor',
            code: '0706100000',
            region_id: 8
        },
    {
            id: 43,
            created_at: '2023-05-02T19:39:09.000000Z',
            updated_at: '2023-05-02T19:39:09.000000Z',
            name: 'Eastern Samar',
            code: '0802600000',
            region_id: 9
        },
    {
            id: 44,
            created_at: '2023-05-02T19:39:09.000000Z',
            updated_at: '2023-05-02T19:39:09.000000Z',
            name: 'Leyte',
            code: '0803700000',
            region_id: 9
        },
    {
            id: 45,
            created_at: '2023-05-02T19:39:11.000000Z',
            updated_at: '2023-05-02T19:39:11.000000Z',
            name: 'Northern Samar',
            code: '0804800000',
            region_id: 9
        },
    {
            id: 46,
            created_at: '2023-05-02T19:39:12.000000Z',
            updated_at: '2023-05-02T19:39:12.000000Z',
            name: 'Samar',
            code: '0806000000',
            region_id: 9
        },
    {
            id: 47,
            created_at: '2023-05-02T19:39:13.000000Z',
            updated_at: '2023-05-02T19:39:13.000000Z',
            name: 'Southern Leyte',
            code: '0806400000',
            region_id: 9
        },
    {
            id: 48,
            created_at: '2023-05-02T19:39:14.000000Z',
            updated_at: '2023-05-02T19:39:14.000000Z',
            name: 'Biliran',
            code: '0807800000',
            region_id: 9
        },
    {
            id: 49,
            created_at: '2023-05-02T19:39:14.000000Z',
            updated_at: '2023-05-02T19:39:14.000000Z',
            name: 'Zamboanga del Norte',
            code: '0907200000',
            region_id: 10
        },
    {
            id: 50,
            created_at: '2023-05-02T19:39:15.000000Z',
            updated_at: '2023-05-02T19:39:15.000000Z',
            name: 'Zamboanga del Sur',
            code: '0907300000',
            region_id: 10
        },
    {
            id: 51,
            created_at: '2023-05-02T19:39:16.000000Z',
            updated_at: '2023-05-02T19:39:16.000000Z',
            name: 'Zamboanga Sibugay',
            code: '0908300000',
            region_id: 10
        },
    {
            id: 52,
            created_at: '2023-05-02T19:39:16.000000Z',
            updated_at: '2023-05-02T19:39:16.000000Z',
            name: 'Bukidnon',
            code: '1001300000',
            region_id: 11
        },
    {
            id: 53,
            created_at: '2023-05-02T19:39:17.000000Z',
            updated_at: '2023-05-02T19:39:17.000000Z',
            name: 'Camiguin',
            code: '1001800000',
            region_id: 11
        },
    {
            id: 54,
            created_at: '2023-05-02T19:39:17.000000Z',
            updated_at: '2023-05-02T19:39:17.000000Z',
            name: 'Lanao del Norte',
            code: '1003500000',
            region_id: 11
        },
    {
            id: 55,
            created_at: '2023-05-02T19:39:18.000000Z',
            updated_at: '2023-05-02T19:39:18.000000Z',
            name: 'Misamis Occidental',
            code: '1004200000',
            region_id: 11
        },
    {
            id: 56,
            created_at: '2023-05-02T19:39:18.000000Z',
            updated_at: '2023-05-02T19:39:18.000000Z',
            name: 'Misamis Oriental',
            code: '1004300000',
            region_id: 11
        },
    {
            id: 57,
            created_at: '2023-05-02T19:39:19.000000Z',
            updated_at: '2023-05-02T19:39:19.000000Z',
            name: 'Davao del Norte',
            code: '1102300000',
            region_id: 12
        },
    {
            id: 58,
            created_at: '2023-05-02T19:39:19.000000Z',
            updated_at: '2023-05-02T19:39:19.000000Z',
            name: 'Davao del Sur',
            code: '1102400000',
            region_id: 12
        },
    {
            id: 59,
            created_at: '2023-05-02T19:39:20.000000Z',
            updated_at: '2023-05-02T19:39:20.000000Z',
            name: 'Davao Oriental',
            code: '1102500000',
            region_id: 12
        },
    {
            id: 60,
            created_at: '2023-05-02T19:39:20.000000Z',
            updated_at: '2023-05-02T19:39:20.000000Z',
            name: 'Davao de Oro',
            code: '1108200000',
            region_id: 12
        },
    {
            id: 61,
            created_at: '2023-05-02T19:39:20.000000Z',
            updated_at: '2023-05-02T19:39:20.000000Z',
            name: 'Davao Occidental',
            code: '1108600000',
            region_id: 12
        },
    {
            id: 62,
            created_at: '2023-05-02T19:39:20.000000Z',
            updated_at: '2023-05-02T19:39:20.000000Z',
            name: 'Cotabato',
            code: '1204700000',
            region_id: 13
        },
    {
            id: 63,
            created_at: '2023-05-02T19:39:21.000000Z',
            updated_at: '2023-05-02T19:39:21.000000Z',
            name: 'South Cotabato',
            code: '1206300000',
            region_id: 13
        },
    {
            id: 64,
            created_at: '2023-05-02T19:39:21.000000Z',
            updated_at: '2023-05-02T19:39:21.000000Z',
            name: 'Sultan Kudarat',
            code: '1206500000',
            region_id: 13
        },
    {
            id: 65,
            created_at: '2023-05-02T19:39:22.000000Z',
            updated_at: '2023-05-02T19:39:22.000000Z',
            name: 'Sarangani',
            code: '1208000000',
            region_id: 13
        },
    {
            id: 66,
            created_at: '2023-05-02T19:39:24.000000Z',
            updated_at: '2023-05-02T19:39:24.000000Z',
            name: 'Abra',
            code: '1400100000',
            region_id: 15
        },
    {
            id: 67,
            created_at: '2023-05-02T19:39:24.000000Z',
            updated_at: '2023-05-02T19:39:24.000000Z',
            name: 'Benguet',
            code: '1401100000',
            region_id: 15
        },
    {
            id: 68,
            created_at: '2023-05-02T19:39:25.000000Z',
            updated_at: '2023-05-02T19:39:25.000000Z',
            name: 'Ifugao',
            code: '1402700000',
            region_id: 15
        },
    {
            id: 69,
            created_at: '2023-05-02T19:39:25.000000Z',
            updated_at: '2023-05-02T19:39:25.000000Z',
            name: 'Kalinga',
            code: '1403200000',
            region_id: 15
        },
    {
            id: 70,
            created_at: '2023-05-02T19:39:25.000000Z',
            updated_at: '2023-05-02T19:39:25.000000Z',
            name: 'Mountain Province',
            code: '1404400000',
            region_id: 15
        },
    {
            id: 71,
            created_at: '2023-05-02T19:39:25.000000Z',
            updated_at: '2023-05-02T19:39:25.000000Z',
            name: 'Apayao',
            code: '1408100000',
            region_id: 15
        },
    {
            id: 72,
            created_at: '2023-05-02T19:39:25.000000Z',
            updated_at: '2023-05-02T19:39:25.000000Z',
            name: 'Agusan del Norte',
            code: '1600200000',
            region_id: 16
        },
    {
            id: 73,
            created_at: '2023-05-02T19:39:26.000000Z',
            updated_at: '2023-05-02T19:39:26.000000Z',
            name: 'Agusan del Sur',
            code: '1600300000',
            region_id: 16
        },
    {
            id: 74,
            created_at: '2023-05-02T19:39:26.000000Z',
            updated_at: '2023-05-02T19:39:26.000000Z',
            name: 'Surigao del Norte',
            code: '1606700000',
            region_id: 16
        },
    {
            id: 75,
            created_at: '2023-05-02T19:39:27.000000Z',
            updated_at: '2023-05-02T19:39:27.000000Z',
            name: 'Surigao del Sur',
            code: '1606800000',
            region_id: 16
        },
    {
            id: 76,
            created_at: '2023-05-02T19:39:27.000000Z',
            updated_at: '2023-05-02T19:39:27.000000Z',
            name: 'Dinagat Islands',
            code: '1608500000',
            region_id: 16
        },
    {
            id: 77,
            created_at: '2023-05-02T19:39:27.000000Z',
            updated_at: '2023-05-02T19:39:27.000000Z',
            name: 'Basilan',
            code: '1900700000',
            region_id: 17
        },
    {
            id: 78,
            created_at: '2023-05-02T19:39:27.000000Z',
            updated_at: '2023-05-02T19:39:27.000000Z',
            name: 'Lanao del Sur',
            code: '1903600000',
            region_id: 17
        },
    {
            id: 79,
            created_at: '2023-05-02T19:39:29.000000Z',
            updated_at: '2023-05-02T19:39:29.000000Z',
            name: 'Sulu',
            code: '1906600000',
            region_id: 17
        },
    {
            id: 80,
            created_at: '2023-05-02T19:39:29.000000Z',
            updated_at: '2023-05-02T19:39:29.000000Z',
            name: 'Tawi-Tawi',
            code: '1907000000',
            region_id: 17
        },
    {
            id: 81,
            created_at: '2023-05-02T19:39:30.000000Z',
            updated_at: '2023-05-02T19:39:30.000000Z',
            name: 'Maguindanao del Norte',
            code: '1908700000',
            region_id: 17
        },
    {
            id: 82,
            created_at: '2023-05-02T19:39:30.000000Z',
            updated_at: '2023-05-02T19:39:30.000000Z',
            name: 'Maguindanao del Sur',
            code: '1908800000',
            region_id: 17
        }
    ];

    export default provinces;