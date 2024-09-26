import React, { useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Grid, Select, LoadingOverlay, Modal } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { find, filter, get } from 'lodash';
// import { IconCrown } from '@tabler/icons';
import { profileState, onEditProfile } from 'services/features/ProfileSlice';
import { formatCountries, formatProvinces, formatCities } from 'components/common/functions';
import provinces from 'assets/data/provinces';
import cities from 'assets/data/cities';
import countries from 'assets/data/countries';
import ChangePasswordForm from 'components/profile/ChangePasswordForm';

export default function ProfileScreen() {
    const { profile, loading } = useSelector(profileState);
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {},
        validate: {
            first_name: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only',
            last_name: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only',
            affiliation: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only'
        }
    });
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCities, setSelectedCities] = useState('');
    const [opened, handlers] = useDisclosure(false);

    useEffect(() => {
        form.setValues({
            ...profile
        });
        setCountry(profile.country);
        setProvince(profile.province);
    }, [profile]);
    useEffect(() => {
        const selectedProv = find(provinces, (o) => {
            return o.province_name === province;
        });
        setSelectedProvince(selectedProv);
    }, [province]);

    useEffect(() => {
        if (selectedProvince) {
            const getCities = filter(cities, (o) => {
                return o.province_code === selectedProvince.province_code;
            });

            setSelectedCities(getCities);
        }
    }, [selectedProvince]);

    const handleSubmit = (data) => {
        delete data['is_subscribed'];
        delete data['subscription_expiry_date'];
        delete data['payment_status'];
        delete data['email'];
        dispatch(onEditProfile(data)).then((res) => {
            if (get(res, 'payload.info', '') === 'Profile updated successfuly.') {
                showNotification({
                    message: 'Successfully updated profile!',
                    color: 'green',
                    sx: { zIndex: 100000 }
                });
            } else {
                showNotification({
                    message: get(res, 'payload.error', 'Something went wrong!'),
                    color: 'red'
                });
            }
        });
    };

    return (
        <>
            <LoadingOverlay
                visible={loading}
                overlayBlur={2}
                loaderProps={{ size: 'lg', color: 'orange' }}
            />
            <Modal
                sx={{ zIndex: 1000 }}
                opened={opened}
                onClose={() => {
                    handlers.close();
                }}
                title="Change Password">
                <ChangePasswordForm handlers={handlers} />
            </Modal>
            <div className="profile">
                <div className="profile__cont">
                    <div className="sec--title">User Information</div>
                    <Button
                        onClick={() => {
                            handlers.open();
                        }}>
                        Change Password
                    </Button>
                </div>
                <div className="profile__body">
                    <form
                        onSubmit={form.onSubmit((values) => {
                            handleSubmit(values);
                        })}>
                        <Grid>
                            <Grid.Col span={12}>
                                <TextInput
                                    value={get(profile, 'email')}
                                    disabled
                                    label="Email"
                                    placeholder="email"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="First Name"
                                    placeholder="First Name"
                                    {...form.getInputProps('first_name')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Last Name"
                                    placeholder="Last Name"
                                    {...form.getInputProps('last_name')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    label="Affiliation"
                                    placeholder="Affiliation"
                                    {...form.getInputProps('affiliation')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    label="Position"
                                    placeholder="Position"
                                    {...form.getInputProps('position')}
                                />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Select
                                    {...form.getInputProps('country')}
                                    required
                                    defaultValue={profile.country}
                                    label="Country"
                                    searchable
                                    clearable
                                    onChange={(e) => {
                                        console.log(e);
                                        setCountry(e);
                                        form.setFieldValue('municipality', '');
                                        form.setFieldValue('province', '');
                                        form.setFieldValue('country', e);
                                        setSelectedCities('');
                                    }}
                                    data={formatCountries(countries)}
                                />
                            </Grid.Col>
                            {country === 'Philippines' && (
                                <Grid.Col span={6}>
                                    <Select
                                        {...form.getInputProps('province')}
                                        defaultValue={profile.province}
                                        required
                                        mt="sm"
                                        label="Province"
                                        searchable
                                        clearable
                                        onChange={(e) => {
                                            setProvince(e);
                                            form.setFieldValue('municipality', '');

                                            form.setFieldValue('province', e);
                                        }}
                                        data={formatProvinces(provinces)}
                                    />
                                </Grid.Col>
                            )}
                            {country === 'Philippines' && selectedCities && (
                                <Grid.Col span={6}>
                                    <Select
                                        required
                                        {...form.getInputProps('municipality')}
                                        mt="sm"
                                        label="Municipality"
                                        searchable
                                        clearable
                                        onChange={(e) => {
                                            form.setFieldValue('municipality', e);
                                        }}
                                        data={formatCities(selectedCities)}
                                    />
                                </Grid.Col>
                            )}

                            <Grid.Col span={12}>
                                <Button type="submit" color="orange" fullWidth mt="xl">
                                    Edit
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </form>
                    {/* <div className="premium">
                        <div className="spiel"> Do you want to download high-resolution data? </div>
                        <Button type="submit" color="orange" mt="xl">
                            Avail Premium <IconCrown />
                        </Button>
                    </div> */}
                </div>
            </div>
        </>
    );
}
