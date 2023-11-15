import Card from '../Card/Card'
import './Contact.css'
import address from '../assets/store 01.svg' 
import call from '../assets/call.svg' 
import mail from '../assets/mail.svg' 
import {useState} from 'react'
import {
    TextField,
  } from '@mui/material';
  import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Label } from '@mui/icons-material'
export default function Contact(){
    const blue = {
        100: '#DAECFF',
        200: '#8a5f49',
        400: '#8a5f49',
        500: '#007FFF',
        600: '#8a5f49',
        900: '#003A75',
      };
    
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#8a5f49',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#8a5f49',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        height:10px
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    
    return(
        <div id='contact' className="contact">
            <h1  data-cursor="-opaque" data-magnetic >Contact Us</h1>
            <div className='cards'>
                <div className='contact-card'>
                    <div className='card-logo'>
                        <img src={address}></img>
                    </div>
                    <div className='contact-card-content'>
                        <h5>ADDRESS</h5>
                        <p>N.M. Patel Estate at & post Raniya,Taluka Savli,Vadodara</p>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-logo'>
                        <img src={call}></img>
                    </div>
                    <div className='contact-card-content'>
                        <h5>CONTACT US</h5>
                        <p>+91 99256 27417 </p>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='card-logo'>
                        <img src={mail}></img>
                    </div>
                    <div className='contact-card-content'>
                        <h5>EMAIL</h5>
                        <p>dharmikpackaging@gmail.com</p>
                    </div>
                </div>
            </div>
           <div className='contact-form'>
            <form className='submit-form'>
                   <label>FULL NAME</label> 
                    <TextField label='Your name' variant='outlined'></TextField>
                   <label>EMAIL ADDRESS</label> 
                    <TextField label='Email' variant='outlined'></TextField>
                   <label>PHONE NO.</label> 
                    <TextField label='Phone' variant='outlined'></TextField>
                   <label>MESSAGE</label> 
                   <Textarea aria-label="minimum height" minRows={3} placeholder="Your Message" />
            </form>
           </div>
        </div>
)}