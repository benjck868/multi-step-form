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
    <div className={isCurrentStep?"font-ubuntu md:flex md:gap-2":"text-white md:flex md:gap-2"}>
      <div className={isCurrentStep?"bg-MSF-Pastel-blue ml-7 border-2 border-white h-10 w-10 rounded-full flex justify-center items-center":"ml-7 border-2 border-white h-10 w-10 rounded-full flex justify-center items-center"}>{currentStep}</div>
      <div className="hidden md:flex md:flex-col text-white">
        <span className="text-xs">
          {'STEP '+currentStep}
        </span>
        <span className="text-sm font-semibold">
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
    <div className="flex flex-col md:flex-row md:p-5 lg:p-20 md:justify-center md:h-screen md:w-screen md:content-center">
      <div className="flex justify-center md:justify-start md:flex-col md:gap-4 md:pt-5 md:w-96 lg:w-60 md:content-start py-24 md:py-0 bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] md:rounded-lg bg-no-repeat bg-cover">
        {
          stepForm.map((e,i)=>{
            if(step === i+1){
              return <StepIndicator key={i} isCurrentStep={true} currentStep={e} />
            }
            return <StepIndicator key={i} isCurrentStep={false} currentStep={e} />
          })
        }
      </div>
      <div className="-mt-10 mx-10 md:mt-0 bg-white p-5 rounded-t-lg md:w-screen lg:w-2/5">
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
