"use client"
import React, { useState } from "react"
import "./stepper.css"
import { TiTick } from "react-icons/ti"
import FormWorkProfile from "../FormWorkProfile/FormWorkProfile"
import FormWorkExperience from "../FormWorkExperience/FormWorkExperience"
import TypeWork from "../TypeWork/TypeWork"
import PersonalProfile from "../PersonlProfile/PersonalProfile"
import EducationInformation from "../EducationInformation/EducationInformation"
const Stepper = () => {
  const steps = ["step1", "step2", "step3", "step4", "step5"]
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setComplete(true)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1 && !complete) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepCompoent = (step) => {
    switch (step) {
      case 1:
        return <PersonalProfile />
      case 2:
        return <EducationInformation />
      case 3:
        return <FormWorkProfile />
      case 4:
        return <FormWorkExperience />
      case 5:
        return <TypeWork />
      default:
        return null
    }
  }

  return (
    <div className="stepper">
      {renderStepCompoent(currentStep)}
      <div className="steps">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <TiTick size={24} />
              ) : (
                currentStep === i + 1 && currentStep
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        {!complete && currentStep > 1 && (
          <button className="btn" onClick={handlePreviousStep}>
            Atrás
          </button>
        )}
        {!complete && (
          <button className="btn" onClick={handleNextStep}>
            {currentStep === steps.length ? "Finalizar" : "Siguiente"}
          </button>
        )}
      </div>
    </div>
  )
}

export default Stepper
