import React from 'react';
import API from 'services/API';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Grid, Button, FileInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { get } from 'lodash';
import { showNotification } from '@mantine/notifications';
import { handleForecastRequest, forecastState } from 'services/features/ForecastSlice';
import { profileState } from 'services/features/ProfileSlice';
export default function RequestForm({ forecast_models, handlers }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { forecast_request_loading } = useSelector(forecastState);
    const { profile } = useSelector(profileState);

    const form = useForm({
        initialValues: {}
    });
    const getCSV = async () => {
        try {
            const response = await API.get(
                `${process.env.REACT_APP_API}/request/forecast/download_template/`
            );

            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    };
    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append('dataset', values.dataset);
        formData.append('message', values.message);
        formData.append('forecast_model', values.forecast_models);

        dispatch(handleForecastRequest(formData)).then((res) => {
            if (get(res, 'payload.info')) {
                showNotification({
                    message: get(res, 'payload.info', 'Account created!'),
                    color: 'green'
                });
                handlers.close();
                navigate('/requests/forecast');
            } else {
                showNotification({
                    message: get(res, 'payload.info', 'Something went wrong!'),
                    color: 'red'
                });
            }
        });
    };
    return (
        <div>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Grid grow>
                    <Grid.Col span={12}>
                        <Select
                            label="Model"
                            placeholder="Select Model"
                            data={forecast_models}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            {...form.getInputProps('forecast_models')}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <FileInput
                            label="Upload files"
                            placeholder="Upload files"
                            accept="text/csv"
                            {...form.getInputProps('dataset')}
                        />
                        <Button
                            variant="outline"
                            color="orange"
                            style={{ marginTop: '10px', marginLeft: 'auto' }}
                            size="xs"
                            onClick={() => {
                                getCSV().then((e) => {
                                    if (get(e, 'info')) {
                                        window.open(e.template);
                                    }
                                });
                            }}>
                            Get Dataset CSV Template
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Textarea
                            label="Message"
                            placeholder="Description"
                            {...form.getInputProps('message')}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <span>
                            To upload your own dataset, a premium account subscription is required.
                            Click this <Link to="/subscription">link</Link> to subscribe.
                        </span>
                    </Grid.Col>
                    <Grid.Col>
                        <Button
                            disabled={!get(profile, 'is_subscribed')}
                            loading={forecast_request_loading}
                            fullWidth
                            variant="fill"
                            color="orange"
                            type="submit">
                            Request Data
                        </Button>
                    </Grid.Col>
                </Grid>
            </form>
        </div>
    );
}
