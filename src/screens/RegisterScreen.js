import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createStyles,
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Grid,
    Container,
    Image,
    Checkbox,
    Select,
    Button
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { find, filter, get } from 'lodash';
import { useForm } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import countries from 'assets/data/countries';
import logo from 'assets/logos/coco-official-logo.png';
import provinces from 'assets/data/prov';
import cities from 'assets/data/muni';
import { formatCountries, formatProvinces, formatCities, formatBarangay } from 'components/common/functions';
import { onRegister, registerState } from 'services/features/RegisterSlice';
import { fetchBarangayList } from 'services/customServices';

function RegisterScreen() {
    const dispatch = useDispatch();
    const { loading } = useSelector(registerState);
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCities, setSelectedCities] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [selectedBarangay, setSelectedBarangay] = useState('');
    //const [barangay, setBarangay] = useState('');

    const useStyles = createStyles((theme) => ({
        title: {
            fontSize: 20,
            fontWeight: 900,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`
        },

        controls: {
            [theme.fn.smallerThan('xs')]: {
                flexDirection: 'column-reverse'
            }
        },

        control: {
            [theme.fn.smallerThan('xs')]: {
                width: '100%',
                textAlign: 'center'
            }
        }
    }));
    const form = useForm({
        initialValues: {
            terms: false,
            email: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            age: '',
            civil_status: '',
            contact_number: '',
            acr3: '',
            country: '',
            province: '',
            municipality: '',
            barangay : ''
        },

        validate: {
            confirm_password: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
            first_name: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only',
            last_name: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only',
            affiliation: (value) =>
                /^([^0-9]*)$/.test(value) ? null : 'Must be composed of letters only',
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        }
    });

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            navigate('/browse');
        }
    }, []);

    useEffect(() => {
        const selectedProv = find(provinces, (o) => {
            return o.name === province;
        });
        setSelectedProvince(selectedProv);
    }, [province]);

    useEffect(() => {
        if (selectedProvince) {
            const getCities = filter(cities, (o) => {
                return o.province_id === selectedProvince.id;
            });
            setSelectedCities(getCities);
        }
    }, [selectedProvince]);



    useEffect(() => {
        if (municipality) {
            const getCityCode = filter(cities, (o) => {
                return o.name === municipality;
            });
            getBarangays(getCityCode[0].code)
            
        }

        
    }, [municipality]);

    const getBarangays = async (d) =>{
        const response = await fetchBarangayList(d)
        setSelectedBarangay(response);
      }

    

    const handleSubmit = (data) => {
        
        dispatch(onRegister(data)).then((res) => {
            if (get(res, 'payload.info')) {
                showNotification({
                    message: get(res, 'payload.info', 'Account created!'),
                    color: 'green'
                });
                navigate('/login');
            } else {
                showNotification({
                    message: get(res, 'payload.error', 'Something went wrong!'),
                    color: 'red'
                });
            }
        });
    };

    const navigate = useNavigate();
    const { classes } = useStyles();
    return (
        <div className="login">
            <Container sx={{ padding: 50 }} size={600}>
                <Title sx={{ margin: '0 auto' }}>
                    <Link to="/" className="login__logo">
                        <Image src={logo} width={100} sx={{ marginRight: '10px' }} />
                        PCA Registration
                    </Link>
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form
                        onSubmit={form.onSubmit((values) => {
                            console.log(values);
                            handleSubmit(values);
                        })}>
                        <Title color="orange" className={classes.title} align="center">
                            Create an Account
                        </Title>
                        <Text color="dimmed" size="sm" align="center" mt={5}>
                            Already registered?{' '}
                            <Anchor color="orange" size="sm" onClick={() => navigate('/login')}>
                                Sign In
                            </Anchor>
                        </Text>
                        <TextInput
                            type="email"
                            label="Email"
                            placeholder="you@email.dev"
                            required
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Password"
                            {...form.getInputProps('password')}
                        />

                        <PasswordInput
                            required
                            mt="sm"
                            label="Confirm password"
                            placeholder="Confirm password"
                            {...form.getInputProps('confirm_password')}
                        />
                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="First Name"
                                    placeholder="First name"
                                    {...form.getInputProps('first_name')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="Last Name"
                                    placeholder="Last name"
                                    {...form.getInputProps('last_name')}
                                />
                            </Grid.Col>
                        </Grid>

                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="Age"
                                    placeholder="Age"
                                    {...form.getInputProps('age')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="Civil Status"
                                    placeholder="Civil Status"
                                    {...form.getInputProps('civil_status')}
                                />
                            </Grid.Col>
                        </Grid>

                        <Grid>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="Contact Number"
                                    placeholder="Contact Number"
                                    {...form.getInputProps('contact_number')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    required
                                    mt="sm"
                                    label="ACR3"
                                    placeholder="ACR3"
                                    {...form.getInputProps('acr3')}
                                />
                            </Grid.Col>
                        </Grid>

                        <Select
                            required
                            mt="sm"
                            label="Nationality"
                            searchable
                            clearable
                            onChange={(e) => {
                                setCountry(e);
                                form.setFieldValue('barangay', '');
                                form.setFieldValue('municipality', '');
                                form.setFieldValue('province', '');
                                form.setFieldValue('country', e);
                                setSelectedCities('');
                                setSelectedBarangay('');
                            }}
                            data={formatCountries(countries)}
                            
                        />

                        {country === 'Philippines' && (
                            <Select
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
                        )}

                        {country === 'Philippines' && selectedCities && (
                            <Select
                                required
                                {...form.getInputProps('municipality')}
                                mt="sm"
                                label="Municipality"
                                searchable
                                clearable
                                onChange={(e) => {
                                    setMunicipality(e);
                                    form.setFieldValue('municipality', e);
                                }}
                                data={formatCities(selectedCities)}
                            />
                        )}


                        {country === 'Philippines' && selectedBarangay && (
                            <Select
                                required
                                {...form.getInputProps('barangay')}
                                mt="sm"
                                label="Barangay"
                                searchable
                                clearable
                                onChange={(e) => {
                                    //setBarangay(e);
                                    form.setFieldValue('barangay', e);
                                }}
                                data={formatBarangay(selectedBarangay)}
                            />
                        )}

                        <Checkbox
                            mt="sm"
                            label={
                                <span>
                                    By clicking the signup button, confirm, that you allow us to
                                    collect your data and agree with the{' '}
                                    <Link
                                        to="/terms-conditions"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Terms and conditions
                                    </Link>{' '}
                                    and the{' '}
                                    <Link
                                        to="/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        privacy policy
                                    </Link>
                                    .
                                </span>
                            }
                            {...form.getInputProps('terms', { type: 'checkbox' })}
                        />

                        <Button
                            disabled={form.values.terms === false}
                            loading={loading}
                            type="submit"
                            color="orange"
                            fullWidth
                            mt="xl">
                            Sign Up
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}

export default RegisterScreen;
