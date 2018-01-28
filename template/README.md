# <%= name %>

[![NPM version](https://img.shields.io/npm/v/<%= name %>.svg?style=flat)](https://npmjs.com/package/<%= name %>) [![NPM downloads](https://img.shields.io/npm/dm/<%= name %>.svg?style=flat)](https://npmjs.com/package/<%= name %>) [![CircleCI](https://circleci.com/gh/<%= gitUser %>/<%= name %>/tree/master.svg?style=shield)](https://circleci.com/gh/<%= gitUser %>/<%= name %>/tree/master)

<%- description %>

## Install

```bash
yarn add <%= name %> --save
```

CDN: [UNPKG](https://unpkg.com/<%= name %>/) | [jsDelivr](https://cdn.jsdelivr.net/npm/<%= name %>/) (available as `window.<%= pascalCasedComponentName %>`)

## Usage

```
import <%= pascalCasedComponentName %> from '<%= name %>'

ReactDOM.render(
  <<%= componentName %>></<%= componentName %>>
, mountNode)
```

## License

MIT &copy; [<%= author %>](<%= website %>)
