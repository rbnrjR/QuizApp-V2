import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

export default class StepperHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Segment style={{backgroundColor:'#37474F'}} >
        <Stepper activeStep={this.props.stepIndex}>
         <Step>
             <StepLabel style={{color:'white'}}>Choose / Create your Topic</StepLabel>
         </Step>
         <Step>
             <StepLabel style={{color:'white'}}>Choose / Create your Sub Topic</StepLabel>

         </Step>
         <Step>
             <StepLabel style={{color:'white'}}>Add Questions</StepLabel>

         </Step>
         <Step>
         <StepLabel style={{color:'white'}}>Launch Quiz</StepLabel>
         </Step>
        </Stepper>
      </Segment>
    );
  }
}
