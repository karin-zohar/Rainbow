export function PaletteSlot({slot}) {

    return(
        <article className="palette-slot h-full flex justify-center items-center p-1 text-white" style={{backgroundColor: slot.hexCode}}>
            <p className="h-max text-center p-1 rounded hover:bg-gray-300 hover:bg-opacity-50 cursor-pointer" >{slot.colorName}</p>
        </article>
    )
}