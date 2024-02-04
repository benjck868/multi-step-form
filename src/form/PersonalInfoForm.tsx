import { ReactNode } from "react"
import FormWrapper from "./FormWrapper"

type FormWrapperProps = {
    children : ReactNode
}
function FormElementWrapper({children}: FormWrapperProps){
    return(
        <div className="flex flex-col gap-2 mb-3">
            {children}
        </div>
    )
}

function TextLabelWrapper({children}: FormWrapperProps){
    return<label className="text-MSF-Marine-blue">{children}</label>
}
export default function PersonalInfoForm() {
  return (
    <FormWrapper title="Personal Information" discription="Please provide your name, email address and phone number.">
        <div>
            <FormElementWrapper>
                <TextLabelWrapper>
                    Name:
                </TextLabelWrapper>
                <input type="text" name="name" placeholder="e.g. Stephen King" className="border border-MSF-Light-gray p-2"/>
            </FormElementWrapper>
            
            <FormElementWrapper>
                <TextLabelWrapper>
                    Email address:
                </TextLabelWrapper>
                <input type="email" name="email-address" placeholder="e.g. stephenking@lorem.com" className="border border-MSF-Light-gray p-2"/>
            </FormElementWrapper>
            
            <FormElementWrapper>
                <TextLabelWrapper>
                    Phone number: 
                </TextLabelWrapper>
                <input type="tel" name="phone-number" placeholder="e.g. +1 234 567 890" className="border border-MSF-Light-gray p-2"/>
            </FormElementWrapper>
        </div>
    </FormWrapper>
  )
}
