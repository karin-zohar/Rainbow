import axios from 'axios'

const RANDOM_COLOR = 'https://www.thecolorapi.com/random'

export const paletteService = {
    getPalette
}

async function getPalette() {
    const slotsAmount = 5
    const palette = await Promise.all (
        Array.from({ length: slotsAmount }, (slot => getSlot()))
    )
    return palette
}

async function getSlot() {
    const slot = await getColorData()
    return slot
}

async function getColorData() {
    try {
        const response = await axios.get(RANDOM_COLOR)
        const data = {
            colorName: response.data.name.value,
            hexCode: response.data.hex.value
        }
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message)
        } else {
            console.error('Unexpected error:', error)
        }
        throw error
    }
}