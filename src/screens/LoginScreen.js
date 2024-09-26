import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Image,
    Button
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import get from 'lodash/get';
import { Link, useNavigate } from 'react-router-dom';
import { login, authState } from 'services/features/AuthSlice';
import logo from 'assets/logos/coco-official-logo.png';

function LoginScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector(authState);
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            navigate('/browse');
        }
    }, []);

    const handleSubmit = (values) => {
        dispatch(login(values)).then((res) => {
            if (get(res, 'payload.access_token')) {
                showNotification({
                    message: 'Login Successful!',
                    color: 'green'
                });
                navigate('/browse');
            } else {
                showNotification({
                    message: get(res, 'payload.error', 'Something went wrong!'),
                    color: 'red'
                });
            }
        });
    };
    return (
        <div className="login">
            <form
                onSubmit={form.onSubmit((values) => {
                    // console.log(values);
                    handleSubmit(values);
                })}>
                <Container sx={{ padding: 50 }} size={460}>
                    <Title>
                        <Link to="/" className="login__logo">
                            <Image src={logo} width={100} sx={{ marginRight: '10px' }} />
                            PCA Login
                        </Link>
                    </Title>
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Do not have an account yet?{' '}
                        <Anchor color="orange" size="sm" onClick={() => navigate('/register')}>
                            Create account
                        </Anchor>
                    </Text>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput
                            label="Email"
                            placeholder="you@email.dev"
                            required
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            required
                            mt="md"
                            {...form.getInputProps('password')}
                        />
                        <Group position="apart" mt="lg">
                            <Checkbox color="orange" label="Remember me" sx={{ lineHeight: 1 }} />
                            <Anchor
                                color="orange"
                                onClick={() => navigate('/forgot-password')}
                                size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button loading={loading} type="submit" color="orange" fullWidth mt="xl">
                            Sign in
                        </Button>
                    </Paper>
                </Container>
            </form>
        </div>
    );
}

export default LoginScreen;
