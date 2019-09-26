import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from "@material-ui/icons/Camera";
import { Link, Redirect } from "react-router-dom";
import agent from "../agent";
import { stringify } from "querystring";
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
  },
  errorText: {
    textAlign: "center",
    color: "white",
    position: "absolute",
    left: "50%"
  }
}));
const videoConstraints = {
  facingMode: "environment"
};

const Camera = () => {
  const classes = useStyles();
  const webcamRef = useRef(null);
  const [result, setResult] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const capture = useCallback(async () => {
    setError(false);
    const imageSrc = webcamRef.current.getScreenshot();
    //actions with image here
    // const dataURItoBlob = dataURI => {
    //   // convert base64/URLEncoded data component to raw binary data held in a string
    //   let byteString;
    //   if (dataURI.split(",")[0].indexOf("base64") >= 0)
    //     byteString = atob(dataURI.split(",")[1]);
    //   else byteString = unescape(dataURI.split(",")[1]);

    //   // separate out the mime component
    //   const mimeString = dataURI
    //     .split(",")[0]
    //     .split(":")[1]
    //     .split(";")[0];

    //   // write the bytes of the string to a typed array
    //   const ia = new Uint8Array(byteString.length);
    //   for (let i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }

    //   return new Blob([ia], { type: mimeString });
    // };
    // const blob = dataURItoBlob(imageSrc);
    fetch(imageSrc)
      .then(res => res.blob())
      .then(async blob => {
        const formData = new FormData();
        console.log(imageSrc.slice(23))
        // formData.append("image", '123');
        // formData.append("image", imageSrc.slice(23));
        formData.append("image", blob);
        const data = await fetch(
          "https://urinemark-service-m6gmo7ik7q-ew.a.run.app/api/v1/predict",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({image:imageSrc.slice(23)})
          }
        );
        // const savedImage = await fetch("https://urinemark.ru/api/image", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   },
        //   body: formData
        // });
        console.log("saved")
        const predicted = await data.json();
        const savedImage = await agent.Image.predict(formData);
        const logBinary = await agent.Image.logBinary(imageSrc);

        console.log(predicted);
        if (!predicted.error) {
          const response = await agent.Analyzes.create(predicted);
          // const response = await agent.Analyzes.create({
          //   LEU: 0,
          //   BIL: 0,
          //   BLD: 0,
          //   GLU: 0,
          //   KET: 0,
          //   NIT: 0,
          //   PRO: 0,
          //   SG: 0,
          //   URO: 0,
          //   pH: 0
          // });
          setResult(response);
          setRedirect(true);
        } else {
          setError(true);
          setErrorMessage(predicted.error);
          //show error message
        }
      });
    // const blob = await res.blob();

    // console.log(blob);
  }, [webcamRef]);

  if (redirect) {
    return <Redirect to={`/result/${result._id}`} />;
  }
  return (
    <>
      <Webcam
        className={classes.camera}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        screenshotQuality={1}
        minScreenshotHeight={1600}
      />
      <div className={classes.rectangle}></div>
      {error && <div className={classes.errorText}>{errorMessage}</div>}
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
