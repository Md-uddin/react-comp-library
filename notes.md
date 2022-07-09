//settup package.json (npm init)
install react and react dom
// settup story book
npx storybook init
or
npx sb init

//settup the folder structure

//install module bundler
-rollup

# main module bundler

-rollup-plugin-peer-deps-external

# used to externalize peer deps(like react,react dom)

-rollup-plugin-postcss

# for compiling postcss and creating a minify bundle

-rollup-plugin-typescript2

# for typescript compiling

-@babel/core @rollup/plugin-babel

# for babel and interaction of babel with rollup plugin

-@rollup/plugin-node-resolve

# for using third party dependencies

-rollup-plugin-uglify

# for generating a minified version of js (reduces size)

//updt package.json
-change the main
-set the name
-set description etc

//push to npm
-login
-npm publish
or
-npm publish --access=public (if name set with scope(@name/library))

////////////////////////////////////////////////////////////////////////////////////////////////

# do not forget to import styled-components or (dependency of that comp) before using comp
