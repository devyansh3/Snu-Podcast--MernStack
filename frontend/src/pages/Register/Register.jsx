import React, { useState } from 'react';
import styles from './Register.module.css';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUsername from '../Steps/StepUsername/StepUsername';


//steps for registration process
// we will make use of HashMaps to make this register flow work - key value pairs
// means if step 1(key) then render component stepphoneemail(value) 
const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
};

const Register = () => {
    const [step, setStep] = useState(1);
    // step number is stored in Step 
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <div>
            {/* Step component will initially load 1st key in steps that is stepphoneemail */}
            <Step onNext={onNext} />
        </div>
    );
};

export default Register;