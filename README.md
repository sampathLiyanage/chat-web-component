# ArithmixChat

## Development server

npm install -g @angular/cli

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Change the values in `styles.scss` to change the theme

Run `npm run build:component` to build the project. A file named `arithmixchat.js` will be stored in the `output/` directory.

## Embedding in web pages

Include the file `arithmixchat.js` in the header section of the web page `<script type="text/javascript" src="path to arithmixchat.js" />`

Add the following html as an immediate child of the body tag. `<arithmix-chat></arithmix-chat>`

## Notes

This is an Angular application and the development can be done similar to any other angular implementation

Don't use UI libraries for components and use css from scratch. This is to avoid the component CSS conflicting with the host and to keep the component light weight (ie. to reduce the component size and to improve performance)
