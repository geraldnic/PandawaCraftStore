import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonButton, IonTitle, IonLabel } from "@ionic/react"
import React from "react";
import "./Kategori.css";

export const KATEGORI_LIST = [
    {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas'},
    {photo: 'https://sc04.alicdn.com/kf/ULB8.GNHswnJXKJkSaelq6xUzXXaC.jpg', desc: 'Perhiasan'},
    {photo: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-10338192/no_brand_kapal_otok_otok_mainan_perahu_jadul_90an_full05_n6i5rfbr.jpg', desc: 'Mainan'},
    {photo: 'http://sc04.alicdn.com/kf/H4b5eb15bbca64f3e838a7471246936f8n.jpg', desc: 'Furniture'},
    {photo: 'https://blogpictures.99.co/Bambu-Merambat.jpg', desc: 'Dekorasi'},
    {photo: 'https://www.sinjaikab.go.id/v4/wp-content/uploads/2019/10/IMG-20191003-WA0074.jpg', desc: 'Lainnya'}
  ];

const Kategori: React.FC = () => {
    return(
        <IonGrid>
            <IonRow>
                {KATEGORI_LIST.map(data => (
                <IonCol size="6">
                    <IonCard className="categoryCard">
                        <IonCardContent>
                            <IonImg src={data.photo} className="categoryImage"></IonImg>
                            <IonTitle className="categoryDescription">{data.desc}</IonTitle>
                                <IonButton fill='clear' className='categoryMore' href="/productbycategory">Selengkapnya</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    )
}

export default Kategori;