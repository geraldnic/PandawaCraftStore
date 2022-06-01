import { IonButton, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText } from '@ionic/react';
import './Card.css';

export const CARD_DATA = [
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas Anyaman Sedotan'},
  {photo: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-10338192/no_brand_kapal_otok_otok_mainan_perahu_jadul_90an_full05_n6i5rfbr.jpg', desc: 'Kapal TokTok Minyak'},
  {photo: 'http://sc04.alicdn.com/kf/H4b5eb15bbca64f3e838a7471246936f8n.jpg', desc: 'Kursi Rotan Single'},
  {photo: 'http://3.bp.blogspot.com/-XqUAtFoPzQc/VhNBcQYw6NI/AAAAAAAAABU/1OVi9gCTugA/s1600/anyam%2Bbambu.JPG', desc: 'Tas Anyaman Kupu-Kupu'},
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 5'},
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 6'},
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 7'},
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 8'},
];

interface ContainerProps { }
const Card: React.FC<ContainerProps> = () => {
  return (
    
    <IonRow>
      {CARD_DATA.map(data => (
      <IonCol size-xs="6">
        <IonCard className='cards'>
            <IonCardContent>
              <IonImg src={data.photo} className="categoryImage"/>
              <IonText className='deskH'>{data.desc}</IonText>
              <IonButton fill='clear' className='btnSel' href='/product'>Selengkapnya</IonButton>
          </IonCardContent>
        </IonCard>
      </IonCol>
      ))}
  </IonRow>
  
  );
};

export default Card;
