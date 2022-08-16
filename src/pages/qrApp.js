import React, { Component } from 'react'
import QRScan from 'qrscan'
import { Fragment } from 'react'
import { QrCodeRounded } from '@mui/icons-material'


const { requestAnimationFrame } = global
class QRApp extends Component {

  constructor (props) {
    super(props)
    this.state = { value: '', watching: false }
    this.onFind = this.onFind.bind(this)
  }

  onFind (value) {
    this.setState({ value, watching: false })
  }


  render () {
    let message
    if (this.state.notEnabled) {
      message = <div><span role='img' aria-label='camera'>🎥</span> Unable to access video stream (please make sure you have a webcam enabled)</div>
    } else if (this.state.loading) {
      message = <div><span role='img' aria-label='time'>⌛</span> Loading video...</div>
    }

    return (
      <Fragment>
        <h2>Push the QR code to scan with your phone</h2>
        {this.state.watching
          ? (
            <QRScan onFind={this.onFind} />
          )
          : (
            <Fragment>
              <QrCodeRounded onClick={() => this.setState({ watching: true })}>

              </QrCodeRounded>
              <div id="qr-reader"></div>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
              <h4>value: {this.state.value}</h4>

            </Fragment>
          )
        }
      </Fragment>
    )
  }
}

export default QRApp