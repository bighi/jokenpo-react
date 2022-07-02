import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPaper, faHandRock, faHandScissors } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/HandButton.module.css"

function HandButton(props) {
  let icon;

  switch(props.type) {
    case 'rock':
      icon = faHandRock
      break
    case 'paper':
      icon = faHandPaper
      break
    case 'scissors':
      icon = faHandScissors
      break
    default:
      throw('Invalid hand type')
  }

  return (
    <button className={`${styles.button} p-2 ${props.active ? styles.active : ''}`} onClick={props.onClick}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </button>
  )
}

export default HandButton;