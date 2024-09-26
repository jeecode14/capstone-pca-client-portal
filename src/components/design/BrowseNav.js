import React, { useEffect } from 'react';
import Gravatar from 'react-gravatar';
import { useNavigate } from 'react-router-dom';
import {
    createStyles,
    Header,
    Group,
    Image,
    Button,
    Divider,
    Navbar,
    Burger,
    Drawer,
    ScrollArea,
    Avatar,
    // UnstyledButton,
    Menu
} from '@mantine/core';
import { IconCrown } from '@tabler/icons';
import logo from 'assets/logos/main_logo.png';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
// import { getProfile, profileState } from 'services/features/ProfileSlice';
import { getProfile, profileState } from 'services/features/ProfileSlice';

const linkStyle = {
    color: 'orange',
    textDecoration: 'none'
};

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: 'orange',
        fontWeight: 'bold',
        fontSize: theme.fontSizes.md,
        marginRight: '10px',
        '&:active': {
            fontWeight: 'bold !important',
            color: 'white !important'
        },
        '&:focus': {
            ...linkStyle
        },
        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },

        ...theme.fn.hover({
            ...linkStyle,
            background: 'none'
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
    const dispatch = useDispatch();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const { profile } = useSelector(profileState);
    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <Navbar fixed className="browseNav" position={{ top: '0 !important', left: 0 }}>
            <Header className="browseHeader" px="md" py="sm">
                <Group position="apart" sx={{ height: '100%', margin: '0 auto' }}>
                    <Link to="/">
                        <Image src={logo} width={60} />
                    </Link>

                    <Group
                        sx={{ height: '100%', alignItems: 'center' }}
                        spacing={0}
                        className={classes.hiddenMobile}>
                        {localStorage.getItem('auth') === null
                            ? ''
                            : !get(profile, 'is_subscribed') && (
                                  <Button
                                      type="submit"
                                      color="orange"
                                      onClick={() => {
                                          navigate('/subscription');
                                      }}>
                                      Avail Premium <IconCrown />
                                  </Button>
                              )}

                        <Link className={classes.link} to="/forecast">
                            Forecast
                        </Link>
                        <Link className={classes.link} to="/browse">
                            Layers
                        </Link>

                        <Menu shadow="md">
                            <Menu.Target>
                                <Avatar>
                                    <Gravatar email={get(profile, 'email', '')} />
                                </Avatar>
                            </Menu.Target>

                            <Menu.Dropdown>
                                {localStorage.getItem('auth') === null ? (
                                    <>
                                        <Menu.Item>
                                            <Link className="slink" to="/login">
                                                Sign In
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className="slink" to="/register">
                                                Create an Account
                                            </Link>
                                        </Menu.Item>
                                    </>
                                ) : (
                                    <>
                                        <Menu.Item>
                                            <Link className="slink" to="/profile">
                                                Profile
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className="slink" to="/requests/forecast">
                                                Forecast Requests
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className="slink" to="/requests/layer">
                                                Layer Requests
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                                className="slink"
                                                onClick={() => {
                                                    localStorage.removeItem('auth');
                                                }}
                                                to="/">
                                                Logout
                                            </Link>
                                        </Menu.Item>
                                    </>
                                )}
                            </Menu.Dropdown>
                        </Menu>
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
                </ScrollArea>
            </Drawer>
        </Navbar>
    );
}
