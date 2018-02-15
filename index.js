var request = require('request');

class Olisto {

  constructor(connectURL) {
    this.connectURL = connectURL

    if (this.connectURL.startsWith("https://connect.olisto.com/c/")) {
      // Because "connect.olisto.com" doesn't seem to work with https, we need to replace it with http
      this.connectURL = this.connectURL.replace("https://", "http://")
    }

    if (!this.connectURL.startsWith("http://connect.olisto.com/c/") && !this.connectURL.startsWith("http://connect.triggi.com/c/") && !this.connectURL.startsWith("https://connect.triggi.com/c/")) {
      throw new Error('Invalid connect URL!')
    }
  }

  // Turn on the connector
  setOn() {
    request(this.connectURL, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.error('Something went wrong with the request.')
      }
    });
  }

  setValue(val) {
    if (typeof val != 'string') {
      throw new Error('Invalid value type, please use "string" as type.')
    }

    request(this.connectURL + '?value=' + val, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.error('Something went wrong with the request.')
      }
    });
  }

  getValue() {
    console.error('Receiving a value from an connector is not supported by Olisto, stay tuned for updates!');

    return undefined
  }
}

module.exports = Olisto;
