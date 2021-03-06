import React from 'react'
import PropTypes from 'prop-types'

class MailChimp extends React.Component {
  state = {}

  handleSubmit(evt) {
    evt.preventDefault()
    const regex = /^([\w_.\-+])+@([\w-]+\.)+([\w]{2,10})+$/
    const email = this.state.EMAIL
    if (!regex.test(email)) {
      this.setState({ status: 'empty' })
      return
    }
    const { fields, action } = this.props
    const values = {}
    fields.forEach(field => {
      values[field.name] = this.state[field.name]
    })
    const url = `${action}`
    this.sendData(url, values)
  }

  sendData(url, values) {
    this.setState({ status: 'sending' })
    window
      .fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
      })
      .then(res => res.json())
      .then(
        data => {
          if (data.msg.includes('subscribed')) {
            this.setState({ status: 'success' })
          } else {
            this.setState({ status: 'error' })
          }
        },
        err => {
          this.setState({ status: 'error' })
          console.error('sendData error: ', err)
        },
      )
  }

  render() {
    const { fields, styles, className, buttonClassName } = this.props
    const messages = {
      ...MailChimp.defaultProps.messages,
      ...this.props.messages,
    }
    const { status } = this.state
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={className}>
        {fields.map(input =>
          React.createElement(inputTag(input), {
            ...input,
            key: input.name,
            onChange: ({ target }) => this.setState({ [input.name]: target.value }),
            defaultValue: this.state[input.name],
          }),
        )}
        <button
          disabled={status === 'sending' || status === 'success'}
          type="submit"
          className={buttonClassName}
        >
          {messages.button}
        </button>
        <div className="msg-alert">
          {status === 'sending' && <p style={styles.sendingMsg}>{messages.sending}</p>}
          {status === 'success' && <p style={styles.successMsg}>{messages.success}</p>}
          {status === 'duplicate' && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
          {status === 'empty' && <p style={styles.errorMsg}>{messages.empty}</p>}
          {status === 'error' && <p style={styles.errorMsg}>{messages.error}</p>}
        </div>
      </form>
    )
  }
}

const inputTag = input => {
  const type = input.type
  if (type === 'textarea') {
    return type
  }

  return 'input'
}

MailChimp.defaultProps = {
  messages: {
    sending: 'Sending...',
    success: 'Thank you for subscribing!',
    error: 'An unexpected internal error has occurred.',
    empty: 'You must write an e-mail.',
    duplicate: 'Too many subscribe attempts for this email address',
    button: 'Subscribe!',
  },
  buttonClassName: '',
  styles: {
    sendingMsg: {
      color: '#0652DD',
    },
    successMsg: {
      color: 'var(--green)',
    },
    duplicateMsg: {
      color: '#EE5A24',
    },
    errorMsg: {
      color: '#ED4C67',
    },
  },
}

MailChimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
}

export default MailChimp
