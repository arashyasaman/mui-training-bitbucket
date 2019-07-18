import React from 'react';
import { Typography, Button } from '@material-ui/core';

const HomeStart = () => {
    return (
        <div style={{backgroundColor: '#f4f5f7'}}>
            <div className="mycontainer homeStart">
                <Typography variant="h4" style={{ padding: '3.5rem 0 1.4rem' }}>
                    ساخته شده برای تیم های حرفه ای
                </Typography>
                <Typography variant="h6" style={{ padding: '.1rem 0 .2rem' }}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </Typography>
                <Button variant="contained" color="primary" style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
                    شـــروع کــنـیـد
                </Button>
                <Typography variant="subtitle2" style={{ fontSize: '1rem' }}>
                    با توسط خود میزبانی کنید با
                    
                    <a href={'gfggg'} style={{ marginRight: '.5rem' , fontSize: '1rem' }}>
                        تست لینک
                    </a>
                </Typography>
                <img src={require('../img/HeroImage.png')} style={{width: '100%', marginBottom: '1.5rem'}} />
            </div>
            <div className="homeSepDiv">
                <svg xmlns="http://www.w3.org/2000/svg" class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68">
                    <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#fff" transform="translate(0-1977)"></path>
                </svg>
            </div>
        </div>
    )
}

export default HomeStart;