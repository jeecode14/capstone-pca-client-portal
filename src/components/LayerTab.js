import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Select, Grid, Button, Accordion, Box, ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { getLayers, getAuthLayers } from 'services/features/MapSlice';
import { IconEye, IconEyeOff } from '@tabler/icons';
import { setSelectedLayer, mapState } from 'services/features/MapSlice';
import { get, find, result } from 'lodash';
import { layerDetails } from 'components/common/layerDetails';
import chroma from 'chroma-js';

export default function LayerTab() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            year: '2020',
            month: 'January'
        }
    });

    const { selectedLayer, layers } = useSelector(mapState);

    function AccordionControl(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Accordion.Control {...props} />
                <ActionIcon size="md" onClick={props.onClick}>
                    {props.accName === selectedLayer ? (
                        <IconEye size={16} />
                    ) : (
                        <IconEyeOff size={16} />
                    )}
                </ActionIcon>
            </Box>
        );
    }

    // console.log('selected layer' + selectedLayer);
    const showLayer = () => {};

    const handleGetLayer = (values) => {
        if (localStorage.getItem('auth') === null) {
            dispatch(getLayers(values));
        } else {
            dispatch(getAuthLayers(values));
        }
    };

    const createLegend = (info) => {
        const colorScale = chroma
            .scale(get(info, 'product_info.color_scale'))
            .mode('lch')
            .colors(6);
        return (
            <div className="legend__container">
                Legend:
                <div className="min">{get(info, 'product_info.min_value')}</div>
                {colorScale.map((color) => (
                    <div
                        key={color}
                        style={{
                            backgroundColor: color,
                            width: '1rem',
                            height: '1rem',
                            display: 'inline-block'
                        }}></div>
                ))}
                <div className="max">{get(info, 'product_info.max_value')}</div>
            </div>
        );
    };

    useEffect(() => {
        showLayer();
    }, [selectedLayer]);

    return (
        <div className="genTab">
            <form onSubmit={form.onSubmit((values) => handleGetLayer(values))}>
                <Grid grow>
                    <Grid.Col span={6}>
                        <Select
                            label="Year"
                            placeholder="Select a year"
                            nothingFound="No options"
                            data={['2020', '2019', '2018', '2017']}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            {...form.getInputProps('year')}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Select
                            onChange={(e) => {
                                console.log(e);
                            }}
                            label="Month"
                            placeholder="Select a month"
                            nothingFound="No options"
                            data={[
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
                    </Grid.Col>
                    <Grid.Col>
                        <Button fullWidth variant="outline" color="orange" type="submit">
                            Apply
                        </Button>
                    </Grid.Col>
                </Grid>
            </form>
            <hr />
            <div className="layer-result">
                <div className="layer__label">
                    {' '}
                    {get(layers, 'layers', []).length
                        ? 'Available Layers'
                        : 'No Layers available'}{' '}
                </div>
                <div className="layer__result">
                    <Accordion chevronPosition="left" sx={{ maxWidth: '95%' }}>
                        {get(layers, 'layers', []).map((x) => {
                            return (
                                <Accordion.Item value={x} key={x}>
                                    <AccordionControl
                                        accName={x}
                                        onClick={() => {
                                            dispatch(setSelectedLayer(x));
                                        }}>
                                        <span className={x === selectedLayer ? 'active' : ''}>
                                            {x}
                                        </span>
                                    </AccordionControl>
                                    <Accordion.Panel>
                                        <div>
                                            <div>
                                                {result(
                                                    find(layerDetails, { name: selectedLayer }),
                                                    'description',
                                                    ''
                                                )}
                                            </div>
                                            <div>{createLegend(layers[selectedLayer])}</div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
            {get(layers, 'layers') && (
                <div className="layer__download">
                    <Button
                        disabled={!get(layers, 'layers', []).length}
                        fullWidth
                        variant="fill"
                        color="orange"
                        onClick={() => {
                            if (localStorage.getItem('auth') === null) {
                                showNotification({
                                    message: 'Please sign-in to request data',
                                    color: 'orange'
                                });
                            } else {
                                navigate('/requests/layer');
                            }
                        }}>
                        Download
                    </Button>
                </div>
            )}
            <div className="layer__redirect">
                <Button
                    fullWidth
                    variant="outline"
                    color="orange"
                    onClick={() => {
                        navigate('/forecast');
                    }}>
                    Go to Forecast
                </Button>
            </div>
        </div>
    );
}
