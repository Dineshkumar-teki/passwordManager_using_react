import {Component} from 'react'

import {v4 as UUIDV4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

const initialPasswordsList = []

class PasswordManager extends Component {
  state = {
    userName: '',
    websiteName: '',
    password: '',
    passwordsList: initialPasswordsList,
    showPassword: false,
    searchInput: '',
  }

  getwebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  getUsername = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  bottomSectionChoose = () => {
    const {passwordsList, showPassword, searchInput} = this.state
    const userSearchedList = passwordsList.filter(eachItem =>
      eachItem.websiteName
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    if (userSearchedList.length > 0) {
      return (
        <ul>
          {userSearchedList.map(eachItem => (
            <PasswordItem
              key={eachItem.id}
              eachPasswordItem={eachItem}
              showPassword={showPassword}
              deletePasswordItem={this.deletePasswordItem}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bottomSection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="nopasswords bottomSection"
        />
        <p>No Passwords</p>
      </div>
    )
  }

  addPasswordToList = event => {
    event.preventDefault()
    const {userName, websiteName, password} = this.state
    const passwordObj = {
      id: UUIDV4(),
      userName,
      websiteName,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordObj],
      userName: '',
      websiteName: '',
      password: '',
    }))
  }

  showPasswordFunc = event => {
    this.setState({showPassword: event.target.checked})
  }

  deletePasswordItem = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(eachItem => {
      if (eachItem.id !== id) {
        return eachItem
      }
    })
    this.setState({passwordsList: [...filteredList]})
  }

  render() {
    const {passwordsList, websiteName, password, userName} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <div className="headerSection">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="applogo"
            />
          </div>
          <div className="passwordGeneratedContainer">
            <div className="formContainer">
              <h1 className="formTitle">Add New Password</h1>
              <form onSubmit={this.addPasswordToList}>
                <div className="inputEle">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.getwebsiteName}
                    value={websiteName}
                  />
                </div>
                <div className="inputEle">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.getUsername}
                    value={userName}
                  />
                </div>
                <div className="inputEle">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.getPassword}
                    value={password}
                  />
                </div>
                <button type="submit" className="AddBtn">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordmanagerImg"
            />
          </div>
          <div className="passwordsDisplayContainer">
            <div className="topSection">
              <div className="passwordCount">
                <h1>Your Passwords</h1>
                <div className="counterContainer">
                  <p className="counter">{passwordsList.length}</p>
                </div>
              </div>
              <div className="inputEle searchContainer">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.getSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="middleSection">
              <input
                id="checkBox"
                type="checkbox"
                className="checkbox"
                onClick={this.showPasswordFunc}
              />
              <label htmlFor="checkBox">Show Passwords</label>
            </div>
            {this.bottomSectionChoose()}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
