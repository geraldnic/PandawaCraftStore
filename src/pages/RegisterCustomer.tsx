import React,{useState} from 'react';
import { IonRow, IonInput, IonHeader, IonToolbar, IonButton, IonAvatar, IonTitle, IonPage, IonContent, IonItem, IonText, IonGrid } from '@ionic/react';
import Register from '../components/Register';
import logo from "../assets/logo.png";
import "./RegisterCustomer.css";


const RegisterCustomer: React.FC = () => {
    const [text, setText] = useState<string>();
  return (
   <IonPage>
        <Register />
        <IonContent className="body">
        <IonGrid className="gridinput1">
        <IonRow>
            <IonInput className="inputEmail" value={text} placeholder="Username" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>

        <IonGrid className="gridinput2">
        <IonRow>
            <IonInput className="inputEmail" value={text} placeholder="Email" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>
        <IonGrid className="gridinput3">
        <IonRow>
            <IonInput className="inputEmail" value={text} placeholder="Password" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>
        <IonGrid className="gridinput1">
        <IonRow>
            <IonButton className="buttonLogin" expand="block" size="default" color="new">
                Register Now
            </IonButton>
        </IonRow>
        </IonGrid>   
            <p className="loginSeller"><a href="https://www.w3schools.com/">Are you a seller? Login as Seller</a></p>
    </IonContent>
    </IonPage>
  );
};

export default RegisterCustomer;