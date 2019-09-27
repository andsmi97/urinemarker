import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase/utils";
import agent from '../agent';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

const BottomMenu = (e) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [file, setFile] = useState("");
  const [base64, setBase64] = useState("");
  const fileInput = useRef(null)
  const handleFile = async (event) => {
    setFile(event.target.files[0]);
    setError(false);
    setErrorMessage("")
    const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onloadend = async () => {
      setBase64(reader.result);  
      const data = await fetch(
        "https://urinemark-service-m6gmo7ik7q-ew.a.run.app/api/v1/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({image:reader.result.slice(23)})
        } 
      );
      const predicted = await data.json();
      if (!predicted.error) {
        const response = await agent.Analyzes.create(predicted);
        setResult(response);
        setRedirect(true);
      } else {
        setError(true);
        setErrorMessage(predicted.error);
      }
    }
  }

  const sendRequest = async (event) => {
    
 
      setError(false);
      // console.log(file);
      // console.log(base64)
      
      
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.current.files[0]); 
      reader.onloadend = async () => {
      const data = await fetch(
        "https://urinemark-service-m6gmo7ik7q-ew.a.run.app/api/v1/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({image:reader.result.slice(23)})
        }
      );
      const predicted = await data.json();
      const formData = new FormData();
      formData.append("image", fileInput.current.files[0]);
      const savedImage = await agent.Image.predict(formData);

     
        // setBase64(reader.result);  
        const logBinary = await agent.Image.logBinary(reader.result);
        if (!predicted.error) {
          const response = await agent.Analyzes.create(predicted);
          setResult(response);
          setRedirect(true);
        } else {
          setError(true);
          setErrorMessage(predicted.error);
        }
      }
      // const logBinary = await agent.Image.logBinary(base64);

      // console.log(predicted);
    // }
  };
  if(redirect){
    return <Redirect to={`/result/${result._id}`} />
  }
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="открыть меню"
            onClick={() => auth.signOut()}
          >
            <MenuIcon />
          </IconButton>
          <input type="file" accept="image/*" onChange={handleFile} style={{display:"none"}} id="itworks"/>
          <label htmlFor="itworks">
            <Fab
              color="secondary"
              aria-label="add"
              component="span"
              className={classes.fabButton}
              // onClick={sendRequest}
              // component="input"
              // type="file" 
              // accept="image/*"
              // component={Link}
              // to={"/camera"}
            >
              <AddIcon />
            </Fab>
          </label>
          {/* <input type="file" accept="image/*"  ref={fileInput} /> */}
          {errorMessage}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomMenu;
