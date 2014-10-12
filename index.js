var request = require('request')
var cheerio = require('cheerio')
var semver  = require('semver')
var slice   = require('sliced')
var source  = 'http://dl.node-webkit.org/'

module.exports          = versions
module.exports.versions = versions
module.exports.latest   = latest

function versions(done) {
  request.get(source, function(err, res, html) {
    var $ = cheerio.load(html)

    var links = slice($('a[href]'))
    var hrefs = links.map(function(version) {
      return $(version).attr('href').slice(0, -1)
    }).filter(function(version) {
      return semver.valid(version)
    })

    done(null, hrefs)
  })
}

function latest(done) {
  versions(function(err, versions) {
    if (err) return done(err)

    return done(null, versions
      .sort(semver.compare)
      .pop()
    )
  })
}
