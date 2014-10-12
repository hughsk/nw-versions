# nw-versions
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/nw-versions.svg?style=flat)
![](http://img.shields.io/npm/dm/nw-versions.svg?style=flat)
![](http://img.shields.io/npm/l/nw-versions.svg?style=flat)

Get a list of [node-webkit](https://github.com/rogerwang/node-webkit)'s
available versions.

## Usage

[![NPM](https://nodei.co/npm/nw-versions.png)](https://nodei.co/npm/nw-versions/)

### `versions(cb)`

Calls `cb(err, list)` when complete, where `list` is an array of available
versions that you can download.

### `versions.latest(cb)`

Retrieves the latest version, calling `cb(err, version)` when complete.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/nw-versions/blob/master/LICENSE.md) for details.
