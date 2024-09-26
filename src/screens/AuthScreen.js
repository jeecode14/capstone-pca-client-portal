import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import BrowseNav from 'components/design/BrowseNav';
import { NavLink } from '@mantine/core';
import { IconUserCircle, IconFileDownload, IconCrown } from '@tabler/icons';
export default function AuthScreen() {
    const [active, setActive] = useState('profile');
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (loc) => {
        navigate(loc);
        setActive(loc);
    };

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    return (
        <>
            <BrowseNav />
            <div className="authScreen">
                <div className="nav-grp">
                    <NavLink
                        icon={<IconUserCircle />}
                        onClick={() => {
                            handleClick('/profile');
                        }}
                        label="Profile"
                        active={active === '/profile'}
                    />

                    <NavLink
                        icon={<IconFileDownload />}
                        label="Requests"
                        childrenOffset={37}
                        defaultOpened>
                        <NavLink
                            label="Forecast Requests"
                            active={active === '/requests/forecast'}
                            onClick={() => {
                                handleClick('/requests/forecast');
                            }}
                        />
                        <NavLink
                            label="Layer Requests"
                            active={active === '/requests/layer'}
                            onClick={() => {
                                handleClick('/requests/layer');
                            }}
                        />
                    </NavLink>
                    <NavLink
                        icon={<IconCrown />}
                        onClick={() => {
                            handleClick('/subscription');
                        }}
                        label="Subscription"
                        active={active === '/subscription'}
                    />
                </div>
                <div className="auth-body">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
