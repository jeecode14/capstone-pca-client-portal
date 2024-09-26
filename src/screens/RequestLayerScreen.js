import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductTypes, getRequestLayers, requestState } from 'services/features/RequestSlice';
import { getSolarYears, forecastState } from 'services/features/ForecastSlice';
import { Table, Pagination, Select, LoadingOverlay, Button, Alert } from '@mantine/core';
import { getProfile, profileState } from 'services/features/ProfileSlice';
import { IconAlertCircle } from '@tabler/icons';
import { get } from 'lodash';
import { useForm } from '@mantine/form';

function RequestLayerScreen() {
    const dispatch = useDispatch();
    const [activePage, setPage] = useState(1);
    const { profile } = useSelector(profileState);
    const { solar_years } = useSelector(forecastState);
    const { layers_list, product_types, loading } = useSelector(requestState);
    const form = useForm({
        initialValues: {
            year: '',
            month: '',
            product_type: ''
        }
    });

    console.log(profile);
    const handleFilter = (values) => {
        console.log(values);
        dispatch(
            getRequestLayers({
                year: values.year,
                month: values.month,
                product_type: values.product_type
            })
        );
    };

    useEffect(() => {
        dispatch(
            getRequestLayers({
                year: form.values.year,
                month: form.values.month,
                product_type: form.values.product_type
            })
        );
        dispatch(getProductTypes());
        dispatch(getSolarYears());
        dispatch(getProfile());
    }, []);

    return (
        <>
            <LoadingOverlay
                zIndex={999}
                visible={loading}
                overlayBlur={2}
                loaderProps={{ size: 'lg', color: 'orange' }}
            />
            <div className="request">
                <div className="sec--title">Solar Potential Data Download </div>
                <form
                    onSubmit={form.onSubmit((values) => {
                        handleFilter(values);
                    })}>
                    <div className="filter__container">
                        <div className="filter__item">
                            <Select
                                label="Product Types"
                                placeholder="Select product type"
                                data={[
                                    { value: '', label: 'All' },
                                    ...(product_types.length
                                        ? product_types.map((res) => res.name)
                                        : [])
                                ]}
                                {...form.getInputProps('product_type')}
                            />
                        </div>
                        <div className="filter__item">
                            <Select
                                label="Year"
                                placeholder="Select a year"
                                nothingFound="No options"
                                data={[
                                    { value: '', label: 'All' },
                                    ...(solar_years.length
                                        ? solar_years.map((res) => `${res.year}`)
                                        : [])
                                ]}
                                {...form.getInputProps('year')}
                            />
                        </div>
                        <div className="filter__item">
                            <Select
                                label="Month"
                                placeholder="Select a month"
                                nothingFound="No options"
                                data={[
                                    { value: '', label: 'All' },
                                    { value: '01', label: 'January' },
                                    { value: '02', label: 'Februrary' },
                                    { value: '03', label: 'March' },
                                    { value: '04', label: 'April' },
                                    { value: '05', label: 'May' },
                                    { value: '06', label: 'June' },
                                    { value: '07', label: 'July' },
                                    { value: '08', label: 'August' },
                                    { value: '09', label: 'September' },
                                    { value: '10', label: 'October' },
                                    { value: '11', label: 'November' },
                                    { value: '12', label: 'December' }
                                ]}
                                {...form.getInputProps('month')}
                            />
                        </div>
                        <div className="filter__item">
                            <Button type="submit">Filter</Button>
                        </div>
                    </div>
                </form>
                {get(profile, 'is_subscribed') === false && (
                    <Alert
                        style={{ marginTop: '30px' }}
                        icon={<IconAlertCircle size="1rem" />}
                        title="Notice"
                        color="orange">
                        The available layers for download are in low resolution. If you want to
                        download high-resolution layers, we recommend opting for the premium
                        account.
                    </Alert>
                )}
                <div className="request__body">
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Month</th>
                                <th>Year</th>
                                <th>Product Type</th>
                                <th>Spatial Resolution (Meters)</th>
                                <th>Download Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {get(layers_list, 'results', []).map((res) => (
                                <tr key={res.name}>
                                    <td>{res.name}</td>
                                    <td>{res.month}</td>
                                    <td>{res.year}</td>
                                    <td>{res.product_type}</td>
                                    <td>{res.spatial_resolution}</td>
                                    <td>
                                        <a href={res.file}>
                                            <Button size="xs"> Download </Button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="pagination__cont">
                        <Pagination
                            withEdges
                            value={activePage}
                            onChange={setPage}
                            total={get(layers_list, 'total_pages', 0)}
                            style={{
                                justifyContent: 'center'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestLayerScreen;
