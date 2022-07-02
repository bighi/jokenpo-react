import { useState } from "react"
import HandButton from "./HandButton"

function HandOptions() {
  const [selectedHand, setSelectedHand] = useState()

  console.log("Mão selecionada é", selectedHand)

  const isActive = (type) => {
    if (selectedHand == type) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="w-100 d-flex justify-content-between">
      <HandButton type="rock" active={isActive("rock")} onClick={() => setSelectedHand('rock')} />
      <HandButton type="paper" active={isActive("paper")} onClick={() => setSelectedHand('paper')} />
      <HandButton type="scissors" active={isActive("scissors")} onClick={() => setSelectedHand('scissors')} />
    </div>
  )
}

export default HandOptions;