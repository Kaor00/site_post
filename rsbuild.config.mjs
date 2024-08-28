import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
		port: 5050,
	},
	output: {
		distPath: {
			root: 'build',
		},
	},
	html: {
		title: 'Blog',
		// 	template: './static/index.html',
		// favicon: './static/icon.png',
		// appIcon: './src/assets/icon.png',
		meta: {
			description: 'Веб интерфейс ',
		},
	},
	tools: {
		rspack: (config, { env }) => {
			if (process.env.NODE_ENV === 'development') {
				config.devtool = 'cheap-module-eval-source-map';
			}
			return config;
		},
	},
});
