import {IonText, IonItem, IonIcon, IonRow, IonLabel, IonCol, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAvatar } from "@ionic/react";
import React from "react";
import { star,home, search, list, cart, map, calendar, personCircle, informationCircle} from 'ionicons/icons';
import "./ProductDeskripsi.css";

export const LIST_GAMBAR = [
    {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas'},
  ];

const ProductDesc: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar className="toolbar">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/productbycategory" />
                </IonButtons>
                <IonTitle className="title">PandawaCS</IonTitle>
                <IonButtons slot="end">
                    <IonAvatar className="avatar">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                    </IonAvatar>
                </IonButtons>
            </IonToolbar>
            </IonHeader>
      <IonContent>
      {LIST_GAMBAR.map(data => (
          <IonRow>
                <IonCol size="12">
                    <IonCard className="productDescCard">
                        <IonRow>
                        <IonCol size="6">
                        <IonCardContent>
                            <IonImg src={data.photo}></IonImg>                          
                        </IonCardContent>
                        </IonCol>
                        <IonCol size="6"> 
                            <div className="midV">
                            <IonLabel>
                            <IonText color="dark" className="itemName">
                            {data.desc}
                            </IonText>
                            <p className="itemDesc">Tas Anyaman Sedotan </p>  
                            <p className="itemStock">Stock : 14</p>
                            <IonText color="dark">
                            <IonText className="hargaProduk">Rp 215.000 </IonText> 
                            </IonText> 
                            </IonLabel>
                            <IonItem  lines="none" className="pbcItem">            
                            <IonButton color="dark" href="/review" className="btnBeli">Beli</IonButton>
                            <IonIcon size="large" icon={cart} />      
                            </IonItem> 
                            </div>                     
                        </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <IonText className="deskripsiProduk">Deskripsi</IonText>
                                    <IonText color="dark">
                                    <h5 className="detailProduk">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam lorem, eleifend et volutpat in, rhoncus sit amet massa. 
                                    Proin posuere magna nisl, in consequat leo imperdiet et. In hac habitasse platea dictumst. Fusce odio risus,
                                    blandit ut finibus et, bibendum ut dolor. Etiam sed auctor nisl, sed ullamcorper leo. Curabitur et eros sed sapien 
                                    egestas semper lacinia nec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nunc finibus feugiat dignissim. Phasellus ante libero, posuere eu lectus vitae, facilisis auctor felis. Nullam condimentum velit.
                                    </h5>
                                    </IonText>

                                    <IonText className="MnC">Material & care</IonText>
                                    <IonText color="dark">
                                    <h5 className="detailProduk">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam lorem, eleifend et volutpat in, rhoncus sit amet massa. 
                                    Proin posuere magna nisl, in consequat leo imperdiet et. In hac habitasse platea dictumst. Fusce odio risus,
                                    blandit ut finibus et, bibendum ut dolor. Etiam sed auctor nisl, sed ullamcorper leo. Curabitur et eros sed sapien. 
                                    </h5>
                                    </IonText>
                                </IonLabel>

                    
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
                
          </IonRow>
                ))}
        </IonContent>
        </IonPage>
    );
};

export default ProductDesc;