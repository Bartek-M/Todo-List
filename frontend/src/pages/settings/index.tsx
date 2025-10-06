import { AccountTab, GeneralTab, ThemeTab, AboutTab } from "./tabs";
import { useDynamicStyles } from "@/utils";

export function Settings() {
    if (!useDynamicStyles("/css/home.css")) return;

    return (
        <div className="d-flex w-100">
            <nav className="nav nav-tabs flex-column flex-nowrap border-0" role="tablist">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#setting-account-tab">Account</button>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-general-tab">General</button>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-theme-tab">Theme</button>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#setting-about-tab">About</button>
            </nav>
            <div className="tab-content text-body-secondary" style={{ padding: "1rem 2rem" }}>
                <div className="tab-pane show active" id="setting-account-tab"><AccountTab /></div>
                <div className="tab-pane" id="setting-general-tab"><GeneralTab /></div>
                <div className="tab-pane" id="setting-theme-tab"><ThemeTab /></div>
                <div className="tab-pane" id="setting-about-tab"><AboutTab /></div>
            </div>
        </div>
    );
}