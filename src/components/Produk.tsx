import React, {useState, useRef} from 'react';
import { IonButton, IonIcon, IonCol, IonInput, IonGrid, IonRow, IonItem, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../assets/logo.png';
import iconAyam from '../assets/iconAyam.png';
import addImage from '../assets/addImage.png';
import "./Produk.css";
import { chevronDownSharp } from 'ionicons/icons';

const Produk: React.FC = () => {
    const [text, setText] = useState<string>();

  return (
      <IonContent>
          <IonCard className="wrapper">
            <IonCardContent>
                <IonCard className="cardImage">
                    <img src={addImage} />
                    <IonText className="textImage">
                    Change Product Image
                    </IonText>
                </IonCard>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Nama Produk
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Deskripsi
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                           Stok
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                           Harga
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Kategori
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}>
                    <IonIcon  className="iconDown" icon={chevronDownSharp} />
                    </IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>
            <IonButton className="buttonUpdate" expand="block" color="new">
                Update Produk
            </IonButton>
            </IonCardContent>
            </IonCard>
    </IonContent>
  );
};

export default Produk;