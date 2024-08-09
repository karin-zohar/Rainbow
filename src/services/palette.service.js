import axios from 'axios'

export const paletteService = {
    getPalette
}

function getPalette() {
    const slotsAmount = 5
    const palette = Array.from({length: slotsAmount}, (slot => getSlot()) )
    console.log('palette: ', palette)
    return palette
}

function getSlot() {
    return {'color': getRandomColor()}
}

function getRandomColor() {
    //temp
    return 'red'
}

