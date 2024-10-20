// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        staff: "staff.html",
        gallery: "gallery.html",
        contact: "contact.html",
      },
    },
  },
});
