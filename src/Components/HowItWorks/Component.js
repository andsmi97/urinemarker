import React from 'react';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { useStyles } from './styles';
import StepConnector from '@material-ui/core/StepConnector';
import image1 from '../../assets/images/HowItWorks/1.png';
import image2 from '../../assets/images/HowItWorks/2.png';
import image3 from '../../assets/images/HowItWorks/3.png';
import image4 from '../../assets/images/HowItWorks/4.png';

const getSteps = () => {
  return [
    'Откройте приложение',
    'Сфотографируйте палитру с тест-полоской',
    'Подождите несколько секнуд',
    'Смотрите результат анализа',
  ];
};

const getStepContent = step => {
  switch (step) {
    case 0:
      return { src: image1, alt: 'Описание' };
    case 1:
      return { src: image2, alt: 'Описание' };
    case 2:
      return { src: image3, alt: 'Описание' };
    case 3:
      return { src: image4, alt: 'Описание' };
    default:
      return 'Unknown step';
  }
};

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleStep = step => () => {
    setActiveStep(step);
  };
  const currentContent = getStepContent(activeStep);
  return (
    <div className={classes.root}>
      <div className={classes.leftImage}></div>
      <h3 className={classes.header}>Как Это Работает</h3>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          margin: 0,
          width: '100%',
          padding: 32,
        }}
      >
        <Grid item xs={12} md={6} sm={6}>
          <div className={classes.paper}>
            <img
              src={currentContent.src}
              alt={currentContent.alt}
              width="100%"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            classes={{ root: classes.stepperRoot }}
            connector={
              <StepConnector classes={{ lineVertical: classes.lineVertical }} />
            }
          >
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepButton
                    onClick={handleStep(index)}
                    className={classes.step}
                    classes={{ vertical: classes.vertical }}
                  >
                    {label}
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
      </Grid>
    </div>
  );
}
