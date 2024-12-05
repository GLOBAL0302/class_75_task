import {Button, Grid2, TextareaAutosize, Typography} from '@mui/material';
import {useState} from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {useAppDispatch,} from '../../app/hooks.ts';
import {getDecodedMessageThunk, getEncodeMessageThunk} from './messageThunk.ts';


const initialState={
  decodeMessage:"",
  passwordMessage:"",
  encodeMessage:"",
}

const Message = () => {
  const [messageForm, setMessageForm] = useState(initialState);
  const dispatch = useAppDispatch();



  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    setMessageForm((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  }

  const onClickDecode = async()=>{
    const newMessage = {
      password:messageForm.passwordMessage,
      message:messageForm.decodeMessage
    }
    await dispatch(getDecodedMessageThunk(newMessage));

  }

  const onClickEncode = async ()=>{
    const newMessage = {
      password:messageForm.passwordMessage,
      message:messageForm.encodeMessage
    }
    await dispatch(getEncodeMessageThunk(newMessage));

  }


  return (
    <>
      <Grid2 container direction="column" gap={5}>
        <Grid2 container alignItems="center" gap={2}>
          <Typography variant="h5" gutterBottom width={'20%'}>
            Decoded Message
          </Typography>
          <TextareaAutosize required disabled={messageForm.encodeMessage.length > 0} id="decodeMessage" name='decodeMessage' onChange={onChange} cols={50} minRows={10}/>
        </Grid2>
        <hr style={{width: '100%'}}/>
        <Grid2 container alignItems="center" gap={2}>
          <Typography variant="h5" gutterBottom width={'20%'}>
            <strong>
              Password
            </strong>
          </Typography>
          <TextareaAutosize  id="passwordMessage" name='passwordMessage' value={messageForm.passwordMessage}  onChange={onChange} cols={30} minRows={3}/>
          <Button variant="contained" color="primary" type="button"  onClick={onClickDecode}>
            <ArrowCircleDownIcon sx={{fontSize: '40px'}}/>
          </Button>
          <Button variant="contained" color="primary" type="button" onClick={onClickEncode}>
            <ArrowCircleUpIcon sx={{fontSize: '40px'}}/>
          </Button>
        </Grid2>
        <hr style={{width: '100%'}}/>
        <Grid2 container alignItems="center" gap={2}>
          <Typography variant="h5" gutterBottom width={'20%'}>
            Encoded Message
          </Typography>
          <TextareaAutosize  disabled={messageForm.decodeMessage.length > 0} id='encodeMessage' name='encodeMessage' value={messageForm.encodeMessage} onChange={onChange} cols={50} minRows={10}/>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Message;