import { FC } from 'react'
import UploadIcon from 'src/statics/icons/upload.svg'
import './index.css'

export interface Props {
  currentStage?: number
  onSetCurrentStage: (index: number) => void
  steps: Array<string>
}

const Stepper: FC<Props> = ({ currentStage = 0, onSetCurrentStage, steps }) => {
  const onStageClick = (index: number) => {
    if (index < currentStage) {
      onSetCurrentStage(index)
    }
  }

  const NumberOfSteps = steps.length

  return (
    <div className="stepper">
      <div className="stepper__main">
        <div className="stepper__left">
          <div>
            <img src={UploadIcon} />
          </div>
          <div className="stepper__text">Import data into Fieldstream</div>
        </div>
        <div className="stepper__right">
          <div className="stepper__right-stepper">
            {steps.map((label, index) => (
              <div
                className={`stepper__right-step ${
                  currentStage >= index ? 'stepper__right-step--completed' : ''
                } ${currentStage > index ? 'stepper__right-step--completed-next' : ''}`}
                key={label}
              >
                <div className="stepper__right-indicator">
                  <span
                    className="stepper__right-indicator-info"
                    onClick={() => {
                      onStageClick(index)
                    }}
                  >
                    <span className="stepper__right-indicator-inner"></span>
                  </span>
                </div>
                <div className="stepper__right-label">{label}</div>
              </div>
            ))}
          </div>
          <div
            className="stepper__right-overview"
            style={{ right: `calc(50% - ${(NumberOfSteps * 24 + (NumberOfSteps - 1) * 3) / 2}px)` }}
          >
            {steps.map((label, index) => (
              <div
                key={label}
                className={`stepper__right-overview-item ${
                  currentStage >= index ? 'stepper__right-overview-item--completed' : ''
                }`}
                onClick={() => {
                  onStageClick(index)
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Stepper
