import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Image,
    Group,
    Anchor,
    Center,
    Box
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/logos/coco-official-logo.png';
import { useForm } from '@mantine/form';
import { forgotPassword, authState } from 'services/features/AuthSlice';
import { showNotification } from '@mantine/notifications';

import { IconArrowLeft } from '@tabler/icons';
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

export default function ForgotPasswordScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector(authState);
    const { classes } = useStyles();
    const form = useForm({
        initialValues: {
            user: ''
        }
    });

    const handleSubmit = (values) => {
        dispatch(forgotPassword(values)).then((res) => {
            if (
                res.payload.info ===
                'A password reset instruction will be sent to your email inbox.'
            ) {
                showNotification({
                    message: 'Password reset link sent!',
                    color: 'green'
                });
                navigate('/login');
            } else {
                showNotification({
                    message: res.payload.info ? res.payload.info : 'Something went wrong!',
                    color: 'red'
                });
            }
        });
    };

    return (
        <div className="login">
            <Container sx={{ padding: 50 }} size={500}>
                <Title>
                    <Link to="/" className="login__logo">
                        <Image src={logo} width={100} sx={{ marginRight: '10px' }} />
                        PCA Portal
                    </Link>
                </Title>
                <form
                    onSubmit={form.onSubmit((values) => {
                        handleSubmit(values);
                    })}>
                    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                        <Title color="orange" className={classes.title} align="center">
                            Forgot your password?
                        </Title>
                        <Text sx={{ paddingBottom: 30 }} color="dimmed" size="sm" align="center">
                            Enter your email to get a reset link
                        </Text>
                        <TextInput
                            label="Your email"
                            placeholder="you@email.com"
                            required
                            {...form.getInputProps('user')}
                        />
                        <Group position="apart" mt="lg" className={classes.controls}>
                            <Anchor
                                onClick={() => {
                                    navigate('/login');
                                }}
                                color="dimmed"
                                size="sm"
                                className={classes.control}>
                                <Center inline>
                                    <IconArrowLeft size={12} stroke={1.5} />
                                    <Box ml={5}>Back to login page</Box>
                                </Center>
                            </Anchor>
                            <Button
                                loading={loading}
                                type="submit"
                                color="orange"
                                className={classes.control}>
                                Reset password
                            </Button>
                        </Group>
                    </Paper>
                </form>
            </Container>
        </div>
    );
}
