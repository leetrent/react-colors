import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",
        "& h1": {
            color: "white"
        }
    },
    secondary: {
        backgroundColor: "pink",
        "& h1": {
            color: "orangered",
            "& span": {
                backgroundColor: "yellow",
                marginLeft: "100px"
            }
        }
        
    }
};

function MiniPalette(props) {
    const {classes} = props;
    console.log("[MiniPalette] =>", classes);
    return (
        <div className={classes.main}>
            <h1>Mini-Palette</h1>
            <section className={classes.secondary}>
                <h1>Casey and Pooh<span>(Don't forget the kitty!)</span></h1>
            </section>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);