---
index: true
---
# mortar web components

A web components library to support mortar that is built on stenciljs to be used within any apartments solution, whatever the js framework is (Angular, Knockout, Jquery, etc.).

## Install

The components are packaged in a npm package that be consumed by a solution. 

```node
npm i @costar/apts-web-components
```

#### Dependency

The web components do not include any styling. To include styling, you must include the apts-storybook-lite package.

```node
npm i @costar/apts-storybook-lite
```

This dependency is managed by the front end team in the solution. But it is required then to import the styles into your solutions.

```html
<link rel="stylesheet" href="@costar/apts-storybook-lite/dist/style.min.css">
```

### Apartments

The apartments solution uses a bundle system to include js dependencies. For this, the web components include a bundle.js in the dist. Apartments has a gulp command to copy the include bundle file over the package. Once the package is bumped, run the following command in the command prompt to update. Once the bundle is included, there is no other setup. You can use components throughout the solution where needed.

```js
gulp copy-components
```

### Angular Solution

Documentation coming.

### Other

If you have solution that is not either of these, please see the stencil documentation for [framework integrations](https://stenciljs.com/docs/overview) about how to use the web components.

## Git

The git is located at the following location. To contribute, please create a feature branch and submit a pull request.

[https://tfs.prd.costargroup.com/CoStarCollection/Apartments/_git/apts-web-components](https://tfs.prd.costargroup.com/CoStarCollection/Apartments/_git/apts-web-components)

## Questions

For any issues, questions or feature request, please reach out on the [Infrastucture - Front End](https://teams.microsoft.com/l/channel/19%3a895410c6eb414eccb274d45805a4e166%40thread.tacv2/Infrastructure%2520-%2520Front%2520End?groupId=a118aff9-3113-4dd7-867c-6e9de8e8fe63&tenantId=9a64e7ca-363f-441c-9aa7-4f85977c09f1) teams channel. 