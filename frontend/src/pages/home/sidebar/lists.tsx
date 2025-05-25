export function Lists() {
    return (
        <div className="list-group py-4 px-4 gap-1">
            <button className="btn list-group-item-action mb-3 fw-medium">
                <i className="bi bi-inboxes-fill" style={{ color: "#469ffc" }}></i>
                {"\u00A0"} Inbox
            </button>
            <button className="btn list-group-item-action fw-medium">
                <i className="bi bi-star-fill" style={{ color: "#fdd314" }}></i>
                {"\u00A0"} Today
            </button>
            <button className="btn list-group-item-action fw-medium">
                <i className="bi bi-calendar3" style={{ color: "#f94876" }}></i>
                {"\u00A0"} Upcoming
            </button>
            <button className="btn list-group-item-action fw-medium">
                <i className="bi bi-stack" style={{ color: "#3aa08b" }}></i>
                {"\u00A0"} Anytime
            </button>
            <button className="btn list-group-item-action mb-3 fw-medium">
                <i className="bi bi-archive-fill" style={{ color: "#c9c090" }}></i>
                {"\u00A0"} Someday
            </button>
            <button className="btn list-group-item-action fw-medium">
                <i className="bi bi-journal-check" style={{ color: "#47b378" }}></i>
                {"\u00A0"} Logbook
            </button>
        </div>
    )
}