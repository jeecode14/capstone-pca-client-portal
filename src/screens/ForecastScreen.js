import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Select, Grid, Button, LoadingOverlay } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { get } from 'lodash';
// import { min, max, get } from 'lodash';
import moment from 'moment';
import {
    getModels,
    getYears,
    forecastState,
    getLocations,
    getTypes,
    getForecastInfo,
    getForecast
} from 'services/features/ForecastSlice';
import LineGraph from 'components/line/LineGraph';
import BrowseNav from 'components/design/BrowseNav';
import RequestForm from 'components/forecast/RequestForm';
import { showNotification } from '@mantine/notifications';
export default function ForecastScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [opened, handlers] = useDisclosure(false);
    const { forecast_models, locations, forecast_types, years, loading, forecast_info } =
        useSelector(forecastState);
    const form = useForm({
        initialValues: {}
    });

    const isLoggedIn = localStorage.getItem('auth');

    useEffect(() => {
        dispatch(getYears());
        dispatch(getModels());
        dispatch(getLocations());
        dispatch(getTypes());
    }, []);

    // const [selectedModel, setSelectedModel] = useState('RMSE');
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [forecastYear, setForecastYear] = useState('');
    const [preset, setPreset] = useState('Hourly');
    const [showEnd, setShowEnd] = useState(false);
    const formatData = (data) => data.map((res) => res.name);

    const handleGetForecast = (data) => {
        const compose = {
            year: forecastYear,
            group_by: preset,
            date_start: moment(dateStart).format('YYYY-MM-DD'),
            date_end: moment(dateEnd).format('YYYY-MM-DD'),
            ...data
        };
        dispatch(getForecast(compose));
        dispatch(getForecastInfo(compose));
    };

    useEffect(() => {
        if (preset === 'Hourly') {
            setDateEnd(null);
            setShowEnd(false);
        } else {
            setShowEnd(true);
        }
    }, [preset]);

    return (
        <>
            <Modal
                sx={{ zIndex: 1000 }}
                opened={opened}
                onClose={() => {
                    handlers.close();
                }}
                title="Request Data">
                <RequestForm handlers={handlers} forecast_models={formatData(forecast_models)} />
            </Modal>
            <div className="forecast">
                <BrowseNav />
                <div className="forecast__body">
                    <LoadingOverlay
                        visible={loading}
                        overlayBlur={2}
                        loaderProps={{ size: 'lg', color: 'orange' }}
                    />
                    <div className="forecast__controls">
                        <div className="heading">Forecast</div>
                        <form onSubmit={form.onSubmit((values) => handleGetForecast(values))}>
                            <Grid grow>
                                <Grid.Col span={12}>
                                    <Select
                                        label="Location"
                                        placeholder="Select Location"
                                        data={formatData(locations)}
                                        {...form.getInputProps('location')}
                                    />
                                </Grid.Col>

                                <Grid.Col span={12}>
                                    <Select
                                        label="Model"
                                        placeholder="Select Model"
                                        data={formatData(forecast_models)}
                                        {...form.getInputProps('model')}
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <Select
                                        label="Type"
                                        placeholder="Select Model"
                                        data={formatData(forecast_types)}
                                        {...form.getInputProps('type')}
                                    />
                                </Grid.Col>

                                <Grid.Col span={12}>
                                    <Select
                                        label="Group By"
                                        placeholder="Select Group"
                                        data={['Hourly', 'Daily', 'Weekly', 'Monthly']}
                                        value={preset}
                                        onChange={setPreset}
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <Select
                                        label="Year"
                                        placeholder="Select Year"
                                        data={years.map((res) => `${res.year}`)}
                                        onChange={setForecastYear}
                                    />
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <DatePicker
                                        label="Date Start"
                                        placeholder="Pick date"
                                        defaultDate={new Date(`${forecastYear}-01-01`)}
                                        minDate={new Date(`${forecastYear}-01-01`)}
                                        maxDate={new Date(`${forecastYear}-12-30`)}
                                        value={dateStart}
                                        onChange={setDateStart}
                                    />
                                </Grid.Col>
                                {showEnd && (
                                    <Grid.Col span={6}>
                                        <DatePicker
                                            label="Date End"
                                            placeholder="Pick date"
                                            defaultDate={new Date(`${forecastYear}-01-01`)}
                                            minDate={new Date(`${forecastYear}-01-01`)}
                                            maxDate={new Date(`${forecastYear}-12-30`)}
                                            value={dateEnd}
                                            onChange={setDateEnd}
                                        />
                                    </Grid.Col>
                                )}

                                <Grid.Col>
                                    <Button fullWidth variant="fill" color="orange" type="submit">
                                        Apply
                                    </Button>
                                    <Button
                                        style={{ marginTop: '20px' }}
                                        fullWidth
                                        variant="outline"
                                        color="orange"
                                        onClick={() => {
                                            navigate('/browse');
                                        }}>
                                        Go to Layers
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </form>
                    </div>
                    <div className="forecast__results">
                        <div className="heading">
                            <div>Query Results</div>
                            <div>
                                <Button
                                    className="requestBtn"
                                    variant="outline"
                                    color="orange"
                                    onClick={() => {
                                        if (isLoggedIn) {
                                            handlers.open();
                                        } else {
                                            showNotification({
                                                message: 'Please sign-in to request data',
                                                color: 'orange'
                                            });
                                        }
                                    }}>
                                    Request Data
                                </Button>
                            </div>
                        </div>
                        <div className="res__filters">
                            <Grid align={'center'}>
                                {/* <Grid.Col span={4}>
                                    <Select
                                        onChange={(e) => {
                                            setSelectedModel(e);
                                        }}
                                        label="Model Accuracy"
                                        defaultValue="RMSE"
                                        placeholder="Select a model accuracy"
                                        nothingFound="No options"
                                        data={['RMSE', 'MAE']}
                                    />
                                </Grid.Col> */}
                                <Grid.Col span={3}>
                                    <div className="res__filter-info">
                                        <div className="info-item">
                                            <span>Range(RMSE):</span>{' '}
                                            {get(forecast_info, 'rmse', 0)}
                                        </div>
                                        {/* <div className="info-item">
                                            <span>MAE:</span> {get(forecast_info, 'mae', 0)}
                                        </div> */}
                                        <div className="info-item">
                                            <span>MAPE:</span> {get(forecast_info, 'mape', 0)}
                                        </div>
                                    </div>
                                </Grid.Col>
                            </Grid>
                        </div>
                        <div className="res__container">
                            <div className="line__container">
                                <LineGraph />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
