import { useState, useEffect } from "react"
import { PaletteSlot } from "./palette-slot"
import { paletteService } from "../services/palette.service"

export function Palette() {
    // const [currPalette, setCurrPalette] = useState(paletteService.getPalette())
    const currPalette = paletteService.getPalette()

    return (
        <div className="palette h-2/3 w-1/2 self-center">
            <ul className="h-full flex">
                {currPalette.map((slot, idx) => {
                    return (

                        <li className="slot-container h-full w-1/5 border-solid mx-1" key={idx}>
                            <PaletteSlot slot={slot} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}