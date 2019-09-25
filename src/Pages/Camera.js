import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from "@material-ui/icons/Camera";
import { Link } from "react-router-dom";
import agent from "../agent";
const useStyles = makeStyles(theme => ({
  camera: {
    width: "100%",
    top: 0,
    left: 0,
    height: "100vh",
    position: "absolute",
    objectFit: "cover"
  },
  rectangle: {
    position: "absolute",
    left: "10vw",
    top: "10vh",
    right: "10vw",
    bottom: "10vh",
    width: "80vw",
    height: "80vh",
    boxShadow: "0 0 0 99999px rgba(0, 0, 0, .8)"
  },
  returnButton: {
    color: "white",
    alignSelf: "flex-start"
  },
  captureButton: {
    color: "white"
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: 8
  }
}));
const videoConstraints = {
  facingMode: "environment"
};

const Camera = () => {
  const classes = useStyles();
  const webcamRef = useRef(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    //actions with image here
    const res = await fetch(imageSrc);
    const blob = await res.blob();
    const formData = new FormData();
    formData.append("error", blob);
    const predicted = await fetch("https://35.240.32.160:5000/api/v1/predict", {
      method: "POST",
      headers:{
      "Content-Type":"multipart/form-data"},
      body: formData
    });
    // const predicted = await agent.ColorDetector.predict(formData);

    console.log(predicted);
    // console.log(blob);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        className={classes.camera}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div className={classes.rectangle}></div>
      <div className={classes.buttons}>
        <IconButton
          aria-label="Назад"
          className={classes.returnButton}
          component={Link}
          to={"/"}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          aria-label="Cнимок"
          onClick={capture}
          className={classes.captureButton}
          // component={Link}
          // to={"/result"}
        >
          <CameraIcon />
        </IconButton>
      </div>
    </>
  );
};
export default Camera;
