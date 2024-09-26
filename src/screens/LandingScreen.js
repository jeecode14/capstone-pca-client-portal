/* eslint-disable react/no-unescaped-entities */

import React, { useEffect } from 'react';
import LandingNav from 'components/design/LandingNav';
import { Button, Text, Box, Image, ActionIcon } from '@mantine/core';
import climate from 'assets/icons/climate-change.png';
// import api from 'assets/icons/api.png';
import logo from 'assets/logos/coco-official-logo.png';
import facebook from 'assets/icons/facebook.png';
import yt from 'assets/icons/youtube.png';
import click from 'assets/icons/click.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function LandingScreen(props) {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleClickScroll = (el) => {
        const element = document.getElementById(el);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (state) {
            handleClickScroll(state.redirect);
        }
    }, [state]);

    console.log(props);
    return (
        <div className="landing">
            <LandingNav handleClickScroll={handleClickScroll} />
            <div className="landing__hero">
                <div className="landing__hero-content">
                    <div className="landing__hero-p">
                        <Text className="text" fw="700" color="orange" fs="italic">
                            Philippine Coconut Authority
                        </Text>
                        <Text fz="md" sx={{ padding: '20px 0', textAlign: 'center' }}>
                            {`Web portal for permit applications`}{' '}
                        </Text>
                        <Box sx={{ textAlign: 'center', paddingTop: 20 }}>
                            <Button
                                onClick={() => {
                                    navigate('login');
                                }}
                                color="orange"
                                size="lg">
                                Get Started
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
            <div className="landing__mid" id="services">
                <div className="landing__mid-title">Services</div>
                <div className="">
                    <br/>
                    <div className="landing__mid-products--item">
                        <Link to="/">
                            <div className="landing__icon">
                                <Image src={climate} width={80} />
                            </div>
                        </Link>
                        <div className="landing__text">
                            <Link to="/">
                                <Text fz="xl" fw="700" color="orange" fs="italic">
                                    Permit to Cut
                                </Text>
                                <Text fz="md" sx={{ padding: '20px 0', textAlign: 'center' }}>
                                    Online application of permit documents to cut coconut trees.
                                </Text>
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </div>
            <hr className="landing__hr" />
            <div className="landing__container" id="contact">
                <div className="landing__footer">
                    <div className="landing__footer-logo">
                        <Image src={logo} width={250} sx={{ margin: '0 auto' }} />
                    </div>
                    <div className="landing__footer-content">
                        <Text fz="xl" fw="700" color="orange" fs="italic">
                            Reach out
                        </Text>
                        <Text sx={{ fontSize: '50px' }} fw="700" color="orange">
                            PCA Website
                        </Text>
                        <Text fz="md" color="orange">
                            https://pca.gov.ph/
                        </Text>
                        <div className="landing__footer-socials">
                            <ActionIcon
                                onClick={() => {
                                    window.open('#', '_blank');
                                }}
                                sx={{ marginRight: '20px' }}>
                                <Image src={facebook} width={30} />
                            </ActionIcon>
                            <ActionIcon
                                onClick={() => {
                                    window.open('#', '_blank');
                                }}
                                sx={{ marginRight: '20px' }}>
                                <Image src={yt} width={35} />
                            </ActionIcon>
                            <ActionIcon
                                onClick={() => {
                                    window.open('#', '_blank');
                                }}>
                                <Image src={click} width={35} />
                            </ActionIcon>
                        </div>
                        
                    </div>
                </div>
                <div className="landing__contact">
                    <div className="addr">
                        <Text fz="xl" fw="700" color="orange" fs="italic">
                            Office Address
                        </Text>
                        <Text fz="md" fw="400" color="black" fs="regular">
                            Home, Street, Barangay, City, Province, Zip Code
                        </Text>
                        <Text fz="xl" fw="700" color="orange" fs="italic" mt={20}>
                            Email
                        </Text>
                        <Text fz="md" fw="400" color="black" fs="regular">
                            email@email.com
                        </Text>
                        <Text fz="xl" fw="700" color="orange" fs="italic" mt={20}>
                            Phone
                        </Text>
                        <Text fz="md" fw="400" color="black" fs="regular">
                            Phone 000-0000 (local) 00
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
