import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const HomeTestimonial = () => {
    return (
        <div className="Testimonial">
            <div className="mycontainer">
                <div className="TestimonialHead">
                    <Typography variant="h1">
                        بیش از ۱ میلیون تیم و ۱۰ میلیون توسعه دهنده بیت‌باکت را دوست دارند
                    </Typography>
                    <Grid container sm={12} className="TestmonialLogo">
                        <Grid item sm={12} style={{ textAlign: 'center', marginTop: '1.5rem' , marginBottom: '3rem' }}>
                            <img src={require('../img/logo/customers-image.png')} />
                        </Grid>
                    </Grid>

                    <Typography variant="h1">
                        برنامه های ساده میزبانی شده در ابر مقیاس به ارزش
                    </Typography>
                    
                    <Grid container sm={12} className="TestmonialBottom">
                        <Grid container sm={12}>
                            <Grid item sm={3} className="TestmonialBottomImg">
                                <img src={require('../img/Server-Cluster.png')}/>
                            </Grid>
                            <Grid item sm={9} className="TestmonialBottomText">
                                <Typography variant="h1">
                                    آیا می خواهید بر روی سرور خود میزبان شوید؟
                                </Typography>
                                <Typography variant='body1'>
                                    کنترل کامل کد منبع خود را با بیت‌باکت سرور کنترل کنید. به عنوان شما تیم و بلوغ گردش کار، فارغ از یک سرور تک، راه اندازی یک خوشه فعال فعال با مرکز دیتای بیت‌باکستر.
                                </Typography>
                                <a href="#"className="TestimonialLink">
                                    بیشتر بدانید
                                </a>
                            </Grid>
                        </Grid>
                        
                        <Grid container sm={12} style={{marginBottom: '0'}}>
                            <Grid item sm={3} className="TestmonialBottomImg">
                                <img src={require('../img/Cloud.png')} style={{ height: '70px' }}/>
                            </Grid>
                            <Grid item sm={9} className="TestmonialBottomText">
                                <Typography variant="h1">
                                نسخه ی نمایشی بیت‌باکت ابری را ببینید
                                </Typography>
                                <Typography variant='body1'>
                                    کنترل کامل کد منبع خود را با بیت‌باکت سرور کنترل کنید. به عنوان شما تیم و بلوغ گردش کار، فارغ از یک سرور تک، راه اندازی یک خوشه فعال فعال با مرکز دیتای بیت‌باکستر.
                                </Typography>
                                <a href="#"className="TestimonialLink">
                                    بیشتر بدانید
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Grid container sm={12}>
                <Grid item sm={12}>
                    <div className="BgBottom">
                        <div class="mycontainer BgBottomText">
                            <Typography variant="h2">
                                یک راه بهتر برای ساخت نرم افزار
                            </Typography>
                            <Button variant="contained" color="primary" className="featureLink fully">
                                رایــگان شـروع کنید
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeTestimonial;