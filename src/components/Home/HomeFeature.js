import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const HomeFeature = () => {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <div className="mycontainer homeFeature">
                
                <Grid container sm={12} spacing={12}>
                    <Grid item sm={4} className="featureTopItem">
                        <img src={require('../img/integration.png')}/>
                        <Typography variant="h2">ساخته شده در تحویل مداوم</Typography>
                        <Typography variant="subtitle1">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                        </Typography>
                    </Grid>
                    <Grid item sm={4} className="featureTopItem">
                        <img src={require('../img/FileCabinet.png')}/>
                        <Typography variant="h2">بر اساس کلاس‌های جیرا و ترلو</Typography>
                        <Typography variant="subtitle1">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                        </Typography>
                    </Grid>
                    <Grid item sm={4} className="featureTopItem">
                        <img src={require('../img/continuous-delivery.png')}/>
                        <Typography variant="h2">مخازن ذخیره خصوصی نامحدود</Typography>
                        <Typography variant="subtitle1">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={12} className="featureBottom first">
                    <Grid item sm={8} className="featureImage">
                        <img src={require('../img/CodeCollaboration.png')}/>
                    </Grid>
                    <Grid item sm={4} className="featureName">
                        <Typography variant="subtitle2">تحویل مداوم</Typography>
                        <Typography variant="h3">اغلب با تحویل مداوم تحویل داده شده مستقر کنید</Typography>
                        <Typography variant="body1">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </Typography>
                    
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>
                </Grid>

                <Grid container sm={12} className="featureBottom">
                    <Grid item sm={4} className="featureName">
                        <Typography variant="subtitle2">تحویل مداوم</Typography>
                        <Typography variant="h3">اغلب با تحویل مداوم تحویل داده شده مستقر کنید</Typography>
                        <Typography variant="body1">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </Typography>
                    
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>
                    <Grid item sm={8} className="featureImage">
                        <img src={require('../img/ContinuousDelivery.png')}/>
                    </Grid>
                </Grid>

                <Grid container sm={12} className="featureBottom">
                    <Grid item sm={8} className="featureImage">
                        <img src={require('../img/Security.png')}/>
                    </Grid>
                    <Grid item sm={4} className="featureName">
                        <Typography variant="subtitle2">تحویل مداوم</Typography>
                        <Typography variant="h3">اغلب با تحویل مداوم تحویل داده شده مستقر کنید</Typography>
                        <Typography variant="body1">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </Typography>
                    
                        <Button variant="outlined" color="primary" className="featureLink">
                            بیشتر بدانید
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default HomeFeature;