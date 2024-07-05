export function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <footer className="position-absolute bottom-0 start-50 translate-middle-x">
            <p className="text-center text-body-secondary mt-3">© { new Date().getUTCFullYear() } Todo List</p>
        </footer>
        </>
    )
}