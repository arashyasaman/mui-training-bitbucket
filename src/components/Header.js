import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { AppBar, Grid, Typography, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            $(".Header").addClass("boxshadowHeader");
        } else {
            $(".Header").removeClass("boxshadowHeader");
        }
    });
});

const Header = () => {
    return (
        <div>
            <AppBar position="fixed" className="Header" color="default">
                <div className="mycontainer">
                    <Grid container sm={12}>
                        <Grid item sm={3}>
                            <Link to="/">
                                <img src={require('./img/logo.png')} />
                            </Link>
                        </Grid>

                        <Grid className="menu" item sm={6}>
                            <Typography className="menuItem" variant="caption">
                                <Link to="/">
                                    <a>خانه</a>
                                </Link>
                            </Typography>
                            <Typography className="menuItem" variant="caption">
                                <Link to="/about">
                                    <a>درباره</a>
                                </Link>
                            </Typography>
                            <Typography className="menuItem" variant="caption">
                                <Link to="/about">
                                    <a>امکانات</a>
                                </Link>
                            </Typography>
                            <Typography className="menuItem" variant="caption">
                                <Link to="/about">
                                    <a>تماس</a>
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid item sm={3} style={{textAlign: 'left'}}>
                            <Typography className="menuItem single" variant="caption">ورود</Typography>
                            <Button variant="outlined" color="primary" className="menuStart">
                                شروع
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </AppBar>
        </div>
    )
}

export default Header;