import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700 , 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for ( var level of levels) {
        newPalette.colors[level] = [];
    }
    for ( var color of starterPalette.colors ) {
        let scale = getScale(color.color, 10).reverse();
        for ( var ii in scale ) {
            newPalette.colors[levels[ii]].push({
                name: `${color.name} ${levels[ii]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[ii],
                rgb: chroma(scale[ii]).css(),
                rgba: chroma(scale[ii]).css().replace("rgb", "rgba").replace(")", ",1.0)")

            });
        }
    }
    return newPalette;
}

function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

function getRange(hexColor) {
    const endColor = "#fff";
    return [ chroma(hexColor).darken(1.4).hex(), hexColor, endColor ];
}

export { generatePalette };