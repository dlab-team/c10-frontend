"use client"
import React, { useState } from "react"
import "./stepper.css"
import { TiTick } from "react-icons/ti"
import FormWorkProfile from "../FormWorkProfile/FormWorkProfile"
import FormWorkExperience from "../FormWorkExperience/FormWorkExperience"
import TypeWork from "../TypeWork/TypeWork"
const Stepper = () => {
  const steps = ["step1", "step2", "step3"]
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setComplete(true)
    }
  }
  return (
    <div className="stepper">
      <div className="steps">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
            {i + 1 === 3 && <FormWorkProfile />}
            {i + 1 === 4 && <FormWorkExperience />}
            {i + 1 === 5 && <TypeWork />}
          </div>
        ))}
      </div>
      {!complete && (
        <button className="btn" onClick={handleNextStep}>
          Siguiente
        </button>
      )}
    </div>
  )
}

export default Stepper
