import { FC } from 'react'
import Button from 'src/components/Button'
import NextIcon from 'src/statics/icons/next.svg'
import PrevIcon from 'src/statics/icons/prev.svg'
import CloseIcon from 'src/statics/icons/close.svg'
import './index.css'

export interface Props {
  currentStage?: number
  onSetCurrentStage: (index: number) => void
  steps: Array<string>
}

const BottomAction: FC<Props> = ({ currentStage = 0, onSetCurrentStage, steps }) => {
  const onBack = () => {
    currentStage > 0 && onSetCurrentStage(currentStage - 1)
  }
  const onCancel = () => {
    onSetCurrentStage(0)
  }
  const onNext = () => {
    steps.length > currentStage + 1 && onSetCurrentStage(currentStage + 1)
  }

  return (
    <div className="bottom-action">
      <div className="bottom-action__left">
        <Button variant="primary" onClick={onBack} disabled={currentStage === 0}>
          <img src={PrevIcon} className="bottom-action__icon" />
          <span>Back</span>
        </Button>
        <Button onClick={onCancel}>
          <img src={CloseIcon} className="bottom-action__icon" />
          <span>Cancel</span>
        </Button>
      </div>
      <Button variant="secondary" onClick={onNext} disabled={steps.length === currentStage + 1}>
        <img src={NextIcon} className="bottom-action__icon" />
        <span>Next</span>
      </Button>
    </div>
  )
}

export default BottomAction
