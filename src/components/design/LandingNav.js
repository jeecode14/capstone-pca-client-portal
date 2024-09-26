import React from 'react';
import { Link } from 'react-router-dom';
import {
    createStyles,
    Header,
    Group,
    Image,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea
} from '@mantine/core';
import logo from 'assets/logos/coco-official-logo.png';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 'bold',
        fontSize: theme.fontSizes.md,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },

        ...theme.fn.hover({
            backgroundColor: 'orange',
            color: 'white'
        })
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
        }),

        '&:active': theme.activeStyles
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none'
        }
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none'
        }
    }
}));

export default function LandingNav() {
    const navigate = useNavigate();

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    console.log(localStorage.getItem('auth'));

    return (
        <Box>
            <Header height={80} px="md">
                <Group
                    position="apart"
                    sx={{ height: '100%', maxWidth: '1300px', margin: '0 auto' }}>
                    <Link to="/">
                        <Image src={logo} width={60} />
                    </Link>

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        

                        {localStorage.getItem('auth') === null ? (
                            <Group sx={{ marginLeft: '20px' }} className={classes.hiddenMobile}>
                                <Button
                                    variant="outline"
                                    color="orange"
                                    size="md"
                                    onClick={() => {
                                        navigate('/login');
                                    }}>
                                    Log in
                                </Button>
                                <Button
                                    color="orange"
                                    size="md"
                                    onClick={() => {
                                        navigate('/register');
                                    }}>
                                    {' '}
                                    Sign up
                                </Button>
                            </Group>
                        ) : (
                            <Button
                                variant="outline"
                                color="orange"
                                size="md"
                                onClick={() => {
                                    navigate('browse');
                                }}>
                                Back to Browse
                            </Button>
                        )}
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        className={classes.hiddenDesktop}
                    />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<Image src={logo} width={60} />}
                className={classes.hiddenDesktop}
                zIndex={1000000}>
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        Home
                    </a>

                    <a href="#" className={classes.link}>
                        About
                    </a>
                    <a href="#" className={classes.link}>
                        Contact
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button
                            variant="outline"
                            color="orange"
                            onClick={() => {
                                navigate('login');
                            }}>
                            Log in
                        </Button>
                        <Button
                            color="orange"
                            onClick={() => {
                                navigate('register');
                            }}>
                            Sign up
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
