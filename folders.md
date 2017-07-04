# Angular Reference Folder Structure

```
/dist 								# build output
/scripts							# build scripts
/node_modules
/.vscode							# VSCode workspace settings
/src
	/app
		/+admin						# lazy loaded module
			admin.module.ts
			admin.routes.ts
			index.ts
		/home						# app home
			/containers				# other pages/views within home/main feature
				...
			/components				# dumb (presentation only) components
				...
			home.component.html
			home.component.ts
			home.component.spec.ts
			index.ts				 
		/featureX					# featureX
			...
		/featureY					# featureY
			...
		/shared						# app shared components/services
			/components     # reusable dumb components
			/directives
			/services       # angular services
			/pipes          # angular pipes
			shared.module.ts
			index.ts
		/core						  # core & framework services (reusable for other apps)
			/services				# angular services
				...
			/utils					# pure JS classes/functions
				...
			core.module.ts
			index.ts				# 1 entry point (aka @angular/core)
		/store						# redux (or ngrx) app store
			index.ts
			...
		app.routes.ts
		app.module.ts
		app.component.ts
		app.component.html

	/environment
	/styles
	/assets
	index.html
	main.ts
	polyfill.ts
	styles.css
	declarations.d.ts

package.json          # root config files
tsconfig.json
tslint.json
.gitignore
.editorconfig
.angular-cli.json
README.md
yarn.lock
```
