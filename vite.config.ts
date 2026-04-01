import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // مهم جدًا للنشر على Netlify من الجذر
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false, // يمنع ظهور overlay الأخطاء في المتصفح أثناء التطوير
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // اختصار للمجلد src
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"], // منع تضارب النسخ
  },
  build: {
    outDir: "dist", // المجلد النهائي للبناء، Netlify يقرأه تلقائيًا
    sourcemap: false, // اختياري، لتقليل حجم الملفات
  },
}));