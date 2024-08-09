export function PaletteSlot({slot}) {
    console.log('slot: ', slot) //slot: Object { color: "red" }
    console.log('slot.color: ', slot.color) // undefined
    return(
        <article className="palette-slot  ">
            <p>{slot.color}</p>
        </article>
    )
}