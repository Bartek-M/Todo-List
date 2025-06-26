import { AccountTab, GeneralTab, ThemeTab, AboutTab } from "./tabs"


export function Settings() {
    return (
        <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header pb-0">
                    <nav className="nav nav-tabs flex-nowrap border-0" role="tablist">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#setting-account-tab">Account</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-general-tab">General</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-theme-tab">Theme</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-about-tab">About</button>
                    </nav>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body tab-content text-body-secondary" style={{padding: "1rem 2rem"}}>
                    <div className="tab-pane show active" id="setting-account-tab"><AccountTab /></div>
                    <div className="tab-pane" id="setting-general-tab"><GeneralTab /></div>
                    <div className="tab-pane" id="setting-theme-tab"><ThemeTab /></div>
                    <div className="tab-pane" id="setting-about-tab"><AboutTab /></div>
                </div>
            </div>
        </div>
    )
}