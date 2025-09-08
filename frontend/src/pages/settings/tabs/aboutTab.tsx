export function AboutTab() {
    return (
        <>
            <p className="fs-4 fw-bold">Todo List</p>
            <p><b>Version:</b> <a className="link-dark fst-italic" href="https://github.com/Bartek-M/Todo-List">beta-1.0.0</a><br />
                © {new Date().getUTCFullYear()} Todo List</p>
        </>
    );
}