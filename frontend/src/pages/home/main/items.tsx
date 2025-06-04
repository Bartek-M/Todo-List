export function Items() {
    return (
        <div>
            Hello World!
            <button onClick={() => { document.getElementById("sidebar")?.classList.toggle("hidden") }}>Back</button>
        </div>
    )
}