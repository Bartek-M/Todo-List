import { homeModals } from "/src/types"

export function Options({ setModal }: { setModal: (value: homeModals) => void }) {
    return (
        <div className="controls-wrapper justify-content-between mt-auto">
            <button className="btn border-0 text-body-secondary" onClick={() => setModal("newList")}>
                <i className="bi bi-plus-lg"></i>
                {"\u00A0"} New List
            </button>
            <button className="btn border-0" onClick={() => setModal("settings")}>
                <i className="bi bi-sliders"></i>
            </button>
        </div>
    )
} 