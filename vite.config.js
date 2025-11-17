import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// Custom plugin wrapper to only process v2 Tailwind files
function tailwindPlugin() {
  const plugin = tailwindcss();

  return {
    ...plugin,
    name: 'tailwind-filtered',
    transform(code, id) {
      // Only process files in v2/styles directory or that contain tailwind imports
      if (id.includes('versions/v2/styles') || code.includes('@import "tailwindcss"')) {
        return plugin.transform?.call(this, code, id);
      }
      return null;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindPlugin()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Allow SCSS files to import other SCSS files
        additionalData: ""
      }
    }
  },
  build: {
    outDir: "build",
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          react: ["react", "react-dom", "react-router-dom"],
          animations: ["react-lottie", "react-reveal"]
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  }
});
