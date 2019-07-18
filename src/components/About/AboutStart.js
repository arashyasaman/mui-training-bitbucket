import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';

const HomeStart = () => {
    return (
        <div style={{backgroundColor: '#fff'}}>
            <div className="mycontainer aboutStart">
                <Grid container sm={12} style={{ direction: 'rtl' }}>
                    <Grid item sm={6} className="aboutStartTitle">
                        <Typography variant="h1">گیت که با شما رشد می کند</Typography>
                        <Typography variant="body1">
                            کنترل کامل کد منبع خود را با سرور و مرکز داده بیت باکت کنترل کنید
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <img src={require('../img/about.svg')}/>
                    </Grid>
                </Grid>
            </div>
            <div className="homeSepDiv">
                <svg xmlns="http://www.w3.org/2000/svg" class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68">
                    <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#f4f5f7" transform="translate(0-1977)"></path>
                </svg>
            </div>

            <div style={{backgroundColor: '#f4f5f7'}}>
                <div className="mycontainer BitbucketServer">                
                    <Grid container sm={12}>
                        <Grid container sm={6}>
                            <Grid item sm={3}>
                                <img src={require('../img/server.svg')} style={{height: '120px'}} />
                            </Grid>
                            <Grid item sm={9}>
                                <Typography variant="h4">سرور بیت باکت</Typography>
                                <div>
                                    <ul>
                                        <li>میزبانی وب و همکاری برای تیم های مبتنی بر گیت</li>
                                        <li>استقرار یک سرور تک</li>
                                        <li>بومی جیرا و بامبو ادغام شده است</li>
                                        <li>مجوز دائمی + سال رایگان نگهداری</li>
                                    </ul>
                                </div>
                                <Button variant="outlined" color="primary" className="menuStart">
                                    شروع
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container sm={6}>
                            <Grid item sm={3}>
                                <img src={require('../img/server.svg')} style={{height: '120px'}} />
                            </Grid>
                            <Grid item sm={9}>
                                <Typography variant="h4">دیتا سنتر بیت باکت</Typography>
                                <div>
                                    <ul>
                                        <li>میزبانی وب و همکاری برای تیم های مبتنی بر گیت</li>
                                        <li>نمایشگر هوشمند برای عملکرد در سراسر جغرافیایی</li>
                                        <li>بومی جیرا و بامبو ادغام شده است</li>
                                        <li>پشتیبانی از SAML 2.0</li>
                                        <li>خوشه فعال فعال برای دسترسی بالا</li>
                                        <li>مجوز سالانه + تعمیر و نگهداری</li>
                                    </ul>
                                </div>
                                <Button variant="outlined" color="primary" className="menuStart">
                                    شروع
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div style={{backgroundColor: '#fff'}}>
                <div className="mycontainer ServerFeature">                
                    <Grid container sm={12}>
                        <Grid item sm={6} className="ServerFeatureText">
                            <Typography variant="h1">پروژه آماده</Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                            </Typography>
                        </Grid>
                        <Grid item sm={6} className="ServerFeatureImg">
                            <img src={require('../img/server-feature/scale-to-meet-your-needs.svg')}/>
                        </Grid>
                    </Grid>

                    <Grid container sm={12}>
                        <Grid item sm={6} className="ServerFeatureImg">
                            <img src={require('../img/server-feature/bitbucket-security.svg')}/>
                        </Grid>
                        <Grid item sm={6} className="ServerFeatureText">
                            <Typography variant="h1">امنیت</Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sm={12}>
                        <Grid item sm={6} className="ServerFeatureText">
                            <Typography variant="h1">ساخته شده برای تیم</Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                            </Typography>
                        </Grid>
                        <Grid item sm={6} className="ServerFeatureImg">
                            <img src={require('../img/server-feature/better-code-review.svg')}/>
                        </Grid>
                    </Grid>

                    <Grid container sm={12}>
                        <Grid item sm={6} className="ServerFeatureImg">
                            <img src={require('../img/server-feature/objects-integrations.svg')}/>
                        </Grid>
                        <Grid item sm={6} className="ServerFeatureText">
                            <Typography variant="h1">یکپارچه ادغام می شود</Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div style={{backgroundColor: '#f4f5f7'}}>
                <div className="mycontainer gitThatGrows ">                
                    <Typography variant="h4">گیت با شما رشد می کند</Typography>
                    <Typography variant="body1">
                        مرکز داده بیت باکت یک همکاری منبع برای تیم های حرفه ای هر اندازه ای را در هر فاصله ای فراهم می کند
                    </Typography>

                    <Grid container sm={12}>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/1.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/6.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/2.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/3.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/4.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="gitIconLeft">
                                <img src={require('../img/icon/5.svg')}/>
                            </div>
                            <div className="gitTextRight">
                                <h4>در دسترس بودن بالا</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div style={{backgroundColor: '#fff'}}>
                <div className="mycontainer AboutBottom">                
                    <Typography variant="h1">
                        یکپارچه تمام گردش کار توسعه خود را ادغام کنید
                    </Typography>
                    <Typography variant="body1">
                        یکپارچه سازی بیت باکت با جیرا و بامبو را برای دید کامل و به پایان رساندن کامل در تمام فرایند توسعه خود را.
                    </Typography>
                    
                    <Grid container sm={12} className="AboutBottomMother">
                        <Grid item sm={2}></Grid>
                        <Grid item sm={4} className="AboutBottomChild">
                            <img src={require('../img/icon/jira.svg')}/>
                            <Typography variant="h1">
                                کار خود را پیگیری کنید
                            </Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className="AboutBottomChild">
                            <img src={require('../img/icon/bamboo.svg')}/>
                            <Typography variant="h1">
                                پیوسته ادغام کنید
                            </Typography>
                            <Typography variant="body1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                            </Typography>
                        </Grid>
                        <Grid item sm={2}></Grid>
                    </Grid>
                </div>
            </div>
            
            <div className="bannerSection">
                <div className="mycontainer">
                    <div className="bannerText">
                        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت "                    </div>
                    <div className="bannerTextPerson">
                        کورت چیس، مدیر دپارتمان فناوری اطلاعات بیت باکت
                    </div>
                    <div className="bannerTextPerson">
                        <img src={require('../img/splunk-white.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStart;