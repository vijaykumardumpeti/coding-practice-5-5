// Write your code here

import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {
    isLogin: true,
  }

  loginFunction = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    let loginText
    let loginButtonText

    if (isLogin === true) {
      loginText = 'Please Login'
      loginButtonText = 'Login'
    } else {
      loginText = ' Welcome User'
      loginButtonText = 'Logout'
    }

    return (
      <div className="bg-container">
        <div className="login-container">
          <h1 className="heading"> {loginText}</h1>
          <div>
            <button
              onClick={this.loginFunction}
              className="btn-style"
              type="button"
            >
              {loginButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
