export function Settings() {
    return (
        <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered">
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
                <div className="modal-body tab-content">
                    <div className="tab-pane fade show active" id="setting-account-tab">Account settings?</div>
                    <div className="tab-pane fade"  id="setting-general-tab">General settings?</div>
                    <div className="tab-pane fade" id="setting-theme-tab">Theme settings?</div>
                    <div className="tab-pane fade" id="setting-about-tab">About settings?</div>
                </div>
            </div>
        </div>
    )
}