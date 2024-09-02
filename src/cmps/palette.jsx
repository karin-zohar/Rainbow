import { useState, useEffect } from "react"
import { PaletteSlot } from "./palette-slot"
import { paletteService } from "../services/palette.service"

export function Palette() {
    const [currPalette, setCurrPalette] = useState([])
   
    useEffect(() => {
        fetchPalette()
    }, [])

    const fetchPalette = async () => {
        const newPalette = await paletteService.getPalette()
        setCurrPalette(newPalette)
    }

    return (
        <div className="palette h-2/3 w-1/2 self-center">
            <ul className="h-full flex flex-col md:flex-row">
                {currPalette.map((slot, idx) => {
                    return (

                        <li className="slot-container h-full md:w-1/5 border-solid m-1" key={idx}>
                            <PaletteSlot slot={slot} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}