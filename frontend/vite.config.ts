import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: "esnext",
        minify: "esbuild",
        cssCodeSplit: true,
        sourcemap: false
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                secure: false
            }
        }
    },
    publicDir: "assets"
})
