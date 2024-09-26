import React from 'react';
import LandingNav from 'components/design/LandingNav';
import logo from 'assets/logos/main_logo.png';
import { useNavigate } from 'react-router-dom';
import { IconCheck } from '@tabler/icons';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
export default function AvailSubsScreen() {
    const isLoggedIn = localStorage.getItem('auth');
    const navigate = useNavigate();
    const handleClickScroll = (el) => {
        const element = document.getElementById(el);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="avail">
            <LandingNav onAvail handleClickScroll={handleClickScroll} />
            <div className="avail__container">
                <div className="avail__item">
                    <div className="avail__item--title">FREE Plan</div>
                    <img src={logo} />
                    <div className="grp">
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>View PV Forecast</span>
                        </div>
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>View Map Layers</span>
                        </div>
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>Download Layers in LOW Resolution</span>
                        </div>
                    </div>
                    <div className="btn">
                        <Button
                            fullWidth
                            disabled={isLoggedIn}
                            onClick={() => {
                                navigate('/register');
                            }}>
                            Sign up for Free
                        </Button>
                    </div>
                </div>
                <div className="avail__item">
                    <div className="avail__item--title">PREMIUM Plan</div>
                    <img src={logo} />
                    <div className="grp">
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>View PV Forecast</span>
                        </div>
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>View Map Layers</span>
                        </div>
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>Download Layers in HIGH Resolution</span>
                        </div>
                        <div className="feat">
                            <span className="icon">
                                <IconCheck color="green" />
                            </span>
                            <span>Request forecasting data using own dataset</span>
                        </div>
                    </div>
                    <div className="btn">
                        <Button
                            fullWidth
                            onClick={() => {
                                if (isLoggedIn) {
                                    navigate('/subscription');
                                } else {
                                    showNotification({
                                        message: 'Please sign-in to subscribe',
                                        color: 'orange'
                                    });
                                }
                            }}>
                            Subscribe Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
