export function NavBase({ children }: any) {
    return (
        <div className="d-flex flex-column align-items-center h-100 p-2">
            {children}
            <footer className="mt-auto">
                <p className="text-center text-body-secondary m-2">© { new Date().getUTCFullYear() } Todo List</p>
            </footer>
        </div>
    )
}