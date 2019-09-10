import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css";

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(newLevel) {
        console.log("newLevel", newLevel);
        this.setState( { level: newLevel } );
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                { /* NavBar goes here */ }
                <Navbar level={level} changeLevel={this.changeLevel}/>
                <div className="Palette-colors">
                    { /* bunch of color boxes */ colorBoxes}
                </div>
                { /* footer goes here */ }
            </div>
        )
    }
}
