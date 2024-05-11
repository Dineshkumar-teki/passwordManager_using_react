import './index.css'

const PasswordItem = props => {
  const {eachPasswordItem, showPassword, deletePasswordItem} = props
  const {id, userName, websiteName, password} = eachPasswordItem
  const onClickDelete = () => {
    deletePasswordItem(id)
  }
  return (
    <li>
      <div className="userProfile">
        <p>{userName[0]}</p>
      </div>
      <div className="passwordContent">
        <p className="websiteName">{websiteName}</p>
        <p className="userName">{userName}</p>
        {!showPassword ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="passwordImg"
          />
        ) : (
          <p className="passwordText">{password}</p>
        )}
      </div>
      <button
        type="button"
        className="deleteBtn"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
