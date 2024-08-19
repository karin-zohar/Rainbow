export function PaletteSlot({slot}) {

    return(
        <article className="palette-slot h-full flex justify-center items-center" style={{backgroundColor: slot.hexCode}}>
            <p className="h-max">{slot.colorName}</p>
        </article>
    )
}