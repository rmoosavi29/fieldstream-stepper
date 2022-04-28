import { useState } from 'react'
import BottomAction from '../BottomAction'
import Stepper from '../Stepper'
import './index.css'

const steps = ['Source', 'Columns Mapping', 'Values Mapping', 'Details']
// const steps = ['Source', 'Columns Mapping', 'Values Mapping']

export default function ContentPage() {
  const [currentStage, setCurrentStage] = useState(2)

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
