import AddOnsForm from "./form/AddOnsForm"
import FinishingUpForm from "./form/FinishingUpForm"
import PersonalInfoForm from "./form/PersonalInfoForm"
import PlanForm from "./form/PlanForm"
import useMultiStep from "./useMultiStep"

type StepIndicatorProps = {
  isCurrentStep: boolean
  currentStep: number
}

function StepIndicator({isCurrentStep, currentStep}: StepIndicatorProps){
  const steps = ['YOUR INFO','SELECT PLAN','ADD ONS','SUMMARY']
  return(
    <div className={isCurrentStep?"text-MSF-Marine-blue font-ubuntu font-semibold":"text-white"}>
      <div className={isCurrentStep?"bg-MSF-Pastel-blue ml-7 border-2 border-white h-10 w-10 rounded-full flex justify-center items-center":"ml-7 border-2 border-white h-10 w-10 rounded-full flex justify-center items-center"}>{currentStep}</div>
      <div className="hidden">
        <span>
          {'STEP '+currentStep}
        </span>
        <span>
          {steps[currentStep-1]}
        </span>
      </div>
    </div>
  )
}

function App() {
  const {form, step, next, back, stepForm} = useMultiStep([<PersonalInfoForm />, <PlanForm />, <AddOnsForm />, <FinishingUpForm />])
  return (
    <>
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-24 bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
        {
          stepForm.map((e,i)=>{
            if(step === i+1){
              return <StepIndicator isCurrentStep={true} currentStep={e} />
            }
            return <StepIndicator isCurrentStep={false} currentStep={e} />
          })
        }
      </div>
      <div className="-mt-10 mx-10 bg-white p-5 rounded-t-lg">
        <form onSubmit={e=>e.preventDefault()}>
          {form}
          {step}
          <button onClick={next}>Next</button>
          <button onClick={back}>Back</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
