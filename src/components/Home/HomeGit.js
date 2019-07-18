import React from 'react';
import { Grid, Typography,Button } from '@material-ui/core';

const HomeGit = () => {
    return (
        <div className="gitSection" style={{ backgroundColor: '#f4f5f7' }}>
            <div className="mycontainer">
                <Typography variant="h1">
                    گیت؟
                </Typography>
                <Typography variant="subtitle1">
                    مشکلی نیست ما منابع برای سرعت بخشیدن به شما را داریم.
                </Typography>
                <Grid container spacing={2} sm={12}>
                    <Grid item sm={6} className="gitBox">
                        <img src={require('../img/Git.png')}/>
                        <Typography variant="h3">یادگیری گیت با آموزش های تعاملی</Typography>
                        <Typography variant="body1">بیت‌باکت خود را گودال ماسهبازی با آموزش است که شما را به سرعت با گیت و کمک به شما ایجاد جریان کار موثر است.</Typography>
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>

                    <Grid item sm={6} className="gitBox">
                        <img src={require('../img/Sourcetree-icon-blue.svg')}/>
                        <Typography variant="h3">یادگیری گیت با آموزش های تعاملی</Typography>
                        <Typography variant="body1">بیت‌باکت خود را گودال ماسهبازی با آموزش است که شما را به سرعت با گیت و کمک به شما ایجاد جریان کار موثر است.</Typography>
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h1" className="GitBottomHead">یکپارچگی: بیت‌باکت اما بهتر</Typography>
                <Typography variant="subtitle1" className="GitBottomSubHead">با بیت‌باکت شروع کنید، سپس ابزارهایی را که قبلا برای ساخت نرم افزار بهتر استفاده کرده اید، وارد کنید</Typography>

                <Grid container sm={12}>
                    <Grid item sm={4} className="GitBottom">
                        <img src={require('../img/integration.png')}/>
                        <Typography variant="h3">نرم‌افزار جیرا</Typography>
                        <Typography variant="body1">بهبود کارایی با اتصال شاخه ها، تعهدات و درخواست ها را به مسائل مربوط به نرم افزار جیرا.</Typography>
                    </Grid>
                    <Grid item sm={4} className="GitBottom">
                        <img src={require('../img/Integration-Puzzle.png')}/>
                        <Typography variant="h3">چارچوب اتصال</Typography>
                        <Typography variant="body1">بیت‌باکت را سفارشی کنید با برنامه هایی که به درستی در رابط کاربری بیت‌باکت جاسازی شده اند، با بیت‌باکت کانتکت ساخته شده اند.</Typography>
                    </Grid>
                    <Grid item sm={4} className="GitBottom">
                        <img src={require('../img/Webhooks.png')}/>
                        <Typography variant="h3">ردیابی وب‌هوک‌ها</Typography>
                        <Typography variant="body1">به راحتی با سیستم هایی که در حال استفاده از روزنامه ها با استفاده از وب سایت های بیت‌باکت استفاده می کنید، به راحتی ادغام شود.</Typography>
                    </Grid>

                    <Grid item sm={12} style={{ textAlign: 'right' }}>
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>
                </Grid>

            </div>
            <div className="homeSepDiv">
                <svg xmlns="http://www.w3.org/2000/svg" class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68">
                    <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#fff" transform="translate(0-1977)"></path>
                </svg>
            </div>
        </div>
    )
}

export default HomeGit;