import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f4f5f7' }}>
            <div className="mycontainer footer">
                
                <Grid container sm={12} xs={12}>
                    <Grid item sm={3} xs={12} className="footerItem">
                        <Typography variant="h3">
                            دسترسی سریع
                        </Typography>
                        <ul>
                            <li>چرا بیت‌باکت</li>
                            <li>قوانین و مقررات</li>
                            <li>درباره‌ی ما</li>
                            <li>سیستم امتیاز و پاداش</li>
                        </ul>
                    </Grid>
                    <Grid item sm={3} xs={12} className="footerItem">
                        <Typography variant="h3">
                            بیشتر بدانید
                        </Typography>
                        <ul>
                            <li>پرسش های متداول</li>
                            <li>مجوزهای بیشتر</li>
                            <li>راهنمای سایت</li>
                            <li>استخدام در درمان کالا</li>
                        </ul>
                    </Grid>
                    <Grid item sm={6} xs={12} className="footerItem">
                        <Typography variant="h3">
                            اولین نفر باشید!
                        </Typography>
                        <Typography variant="subtitle1">
                            در خبرنامه‌ی بیت‌باکت ثبت‌نام کنید، تا از تخفیف‌ها و بروزرسانی‌ها خبردار شوید..
                        </Typography>
                        
                        <form noValidate autoComplete="off">
                            <TextField
                                id="standard-name"
                                label="خبـــرنامـه"
                                className="newsletterBox"
                                margin="normal"
                                variant="outlined"
                            />
                            <Button variant="outlined" color="primary" className="newsletterSend">
                                بفرست
                            </Button>
                        </form>
                    </Grid>
                    <Grid item sm={12} xs={12} style={{ textAlign: 'left', marginBottom: '.8rem' }}>
                        <Typography variant="h4" className="socialTitle">
                            با ما در ارتبـــاط باشید.
                        </Typography>
                        <div className="socialIcon">
                            <img src={require('./img/social/twitter.svg')}/>
                            <img src={require('./img/social/facebook-badge.svg')}/>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sm={12} xs={12} style={{ borderTop: 'solid 1px #999' }}>
                    <Grid item sm={2} xs={12}>
                        <img src={require('./img/logo.png')} style={{ height: '40px', marginTop: '10px' }} />
                    </Grid>
                    <Grid item sm={7} xs={12}>
                            <Typography className="footerMenuItem" variant="caption">قوانین مقررات</Typography>
                            <Typography className="footerMenuItem" variant="caption">شرایط استفاده</Typography>
                            <Typography className="footerMenuItem" variant="caption">اعتماد و امنیت</Typography>
                    </Grid>
                    <Grid item sm={3} xs={12} style={{ textAlign: 'left' }}>
                        <a className="seeMoreLink">مشاهده همه محصولات</a>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer;