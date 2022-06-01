import React,{useState} from 'react';
import { IonRow, IonLabel, IonInput, IonGrid, IonButton, IonText, IonItem, IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../assets/logo.png';
import "./Login.css";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "9242118421-1era8flgktpsseo4tuocaki93ci28jk3.apps.googleusercontent.com";


const Login: React.FC = () => {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res:any) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res:any) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };


    const [text, setText] = useState<string>();
    
  return (
    <IonPage>
      <IonContent className="body" class="ion-padding">
          <img className="logoLogin" src={logo} />
        <IonItem lines="none" className="backgroundItem"> 
            <IonText className='text1'>
                Pandawa Craft Store 
            </IonText>
        </IonItem>
        <IonItem lines="none" className='textItem'> 
            <IonText className='text2'>
               Login
            </IonText>
        </IonItem>
        <IonGrid className="gridinput1">
        <IonRow>
            <IonInput className="inputEmail" value={text} placeholder="Email" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>

        <IonGrid className="gridinput2">
        <IonRow>
            <IonInput className="inputEmail" value={text} placeholder="Password" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>
        <IonGrid className="gridinput1">
        <IonRow>
            <IonButton className="buttonLogin" expand="block" size="default" color="new" href="/home">
                Login
            </IonButton>
        </IonRow>
        </IonGrid>
        
        <IonGrid>
            <p className="textDetail">Or Continue with </p>
        </IonGrid>
        
      
        <IonLabel className="g-signin">
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </IonLabel>
            <p className="textSignup"><a href="/registercustomer">New in pandawaCS ? Sign Up Now</a></p>
    </IonContent>   
    </IonPage>
  );
};

export default Login;