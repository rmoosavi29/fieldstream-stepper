import { useState } from 'react'
import BottomAction from '../BottomAction'
import Stepper from '../Stepper'
import steps from 'src/steps'
import './index.css'

export default function ContentPage() {
  const [currentStage, setCurrentStage] = useState(0)

  const onSetCurrentStage = (index: number) => {
    setCurrentStage(index)
  }

  return (
    <div className="page-content">
      <Stepper steps={steps} currentStage={currentStage} onSetCurrentStage={onSetCurrentStage} />
      <BottomAction
        steps={steps}
        onSetCurrentStage={onSetCurrentStage}
        currentStage={currentStage}
      />
    </div>
  )
}
