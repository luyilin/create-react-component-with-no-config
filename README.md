# create-react-component-with-no-config

[![NPM version](https://img.shields.io/npm/v/create-react-component-with-no-config.svg?style=flat)](https://npmjs.com/package/create-react-component-with-no-config) 
[![NPM downloads](https://img.shields.io/npm/dm/create-react-component-with-no-config.svg?style=flat)](https://npmjs.com/package/create-react-component-with-no-config) 
[![CircleCI](https://circleci.com/gh/luyilin/create-react-component-with-no-config/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/create-react-component-with-no-config/tree/master) 

Create React component with no configurations.

Inspired by the awesome [create-vue-component](https://github.com/vue-land/create-vue-component), now you can create a react component just like it!

## Install

```bash
yarn global add create-react-component-with-no-config
```

## Usage

```bash
create-react-component-with-no-config react-xxx
# or
create-react-component react-xxx
# or type less
crc react-xxx

# you can also create component in place
mkdir react-xxx && cd react-xxx
crc
```
The folder struture of generated project (no config files!):

![structure](https://wx3.sinaimg.cn/mw690/a2117cdbly1fnxfc4mh6mj20jq0cddgw.jpg)

## Documentation

### folder structure

- `src/index.js`: Your fancy component
- `example/index.js`: Entry file of your demo

### npm scripts

- `yarn example`: Run the demo for your component (with [Poi](https://poi.js.org))
- `yarn example:build`: Build the demo for your component (with [Poi](https://poi.js.org))
- `yarn build`: Build your component (with [Bili](https://github.com/egoist/bili))
- `yarn test`: Lint and test your component (with [Jest](https://github.com/facebook/jest))
- `yarn lint`: Lint only.

### badges

The generated `README.md` in your project contains the badges of `npm version`, `npm downloads` and `circleci status`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

[MIT](./LICENSE) License <br>

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
