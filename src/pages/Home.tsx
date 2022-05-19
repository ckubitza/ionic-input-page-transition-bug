import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';

interface PageProps {
	num?: string;
}

const Home: React.FC = () => {
  const params = useParams<PageProps>();
  const num = (params.num !== undefined && !isNaN(parseInt(params.num, 10))) ? parseInt(params.num, 10) : 0;
  const nextNum = num + 1;

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired', num);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p>Number: { num }</p>
        <IonInput value="abc" />
        <IonButton routerLink={"/home/" + nextNum}>Go to { nextNum }</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
