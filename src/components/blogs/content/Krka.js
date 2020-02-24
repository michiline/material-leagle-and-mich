import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { getBlogImages } from '../../../images'

const Blog = () => {
  const { cover, images } = getBlogImages('krka')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Sedam Velicanstvenih'} h2={'Krš, Sedra I Slapovi Krke - Mjesto Nestvarne Ljepote'} img={cover}/>
        <BlogContainer>
          <Header>Sedam Veličanstvenih</Header>
          <Intro>
            Želimo obići sve nacionalne parkove u Hrvatskoj.
            Sunčani rujanski vikend idealna je prilika da obiđemo još jedan, naš 6.
            Odluka je pala na Krku i okolni kraj.
          </Intro>
          <Text>
            Uz pomoć prijatelja koji radi kao turistički vodič u tom dijelu Hrvatske dobili smo ideju da posjetimo obližnji otočić Zlarin kod Šibenika te ne toliko popularnu, ali predivnu plažu u NP Krka.
            Tako je i bilo.
            S obzirom na to da smo ovaj put imali u potpunosti isplanirane dane nije nam bilo važno gdje ćemo biti smješteni pa smo se odlučili za kampiranje u obližnjem kampu.
          </Text>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Plaža na Visovačkom jezeru</Header3>
          </BulletHeaderContainer>
          <Text>
            Petak navečer i subotu ujutro iskoristili smo za lokaciju koju nam je preporučio prijatelj.
            Odmor na nepoznatoj plaži NP Krka.
            Mjesto je vrlo mirno i idealno za provesti sat ili dva opuštajući se u prirodi koja te okružuje.
            Preporučujemo dočekati izlazak sunca na ovoj lokaciji jer je taman orijentirana prema istoku i sunčeve zrake u rano jutro daju mu posebnu čar.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Dobro jutro</ImgOverlay>
              <Img img={images[6]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Patkice</ImgOverlay>
              <ImgLandscapeHalf img={images[8]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Plaža</ImgOverlay>
              <ImgLandscapeHalf img={images[9]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Otok Zlarin</Header3>
          </BulletHeaderContainer>
          <Text>
            Nakon jutarnjeg mira na plaži u NP ostatak subote odlučili smo provesti u nešto avanturističkijem duhu. Od ekipe iz agencije Raftrek rentali smo sit on top kajak za dvoje, preuzeli ga na plaži Zablaće i uputili se u našu prvu morsku kajak avanturu.
          </Text>
          <Text>
            Prvi dojmovi su odlični (Mislav još razmišlja o neudobnosti sjedalice, ali naviknut će se s vremenom). Naš pametni sat kaže da smo veslali 10ak kilometara (za usporedbu, krug oko Zlarina je 14km). Prilikom izvlačenja kayaka na kraju dana, shvatili smo da od samog jutra imamo odčepljen otvor za vodu tako da čitav dan veslamo s hendikepom (jeej).
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Tu jos ne znamo da imamo rupu u kayaku!</ImgOverlay>
              <Img img={images[0]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Prvo smo locirali uvalu preko puta do koje nam je trebalo 20ak min vožnje. Tamo se malo odmorili i nastavili vožnju oko otoka prema samom gradu Zlarinu. Htjeli smo vidjeti kakva je i druga strana otoka koja gleda prema moru.
          </Text>
          <Text>
            Već nakon prvih nekoliko zavoja shvatili smo da je druga strana vrlo stjenovita i neprilagođena odmoru pa smo se okrenuli i nasukali na jednu od već viđenih uvala. Smjestili smo se u hammock i ulovili još malo mira.  Divan li je taj naš Jadran u rujnu. Avantura s kayakom na moru bila je uspješna. Sigurno ćemo ponoviti!
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mmmmm... to je taj mir</ImgOverlay>
              <Img img={images[1]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>NP Krka</Header3>
          </BulletHeaderContainer>
          <Text>
            Nedjelja je bila dan za glavni cilj ovog vikenda. Čekali smo da glavna gužva prođe pa da posjetimo i ovaj NP. Međutim iznenadili smo se kolika je gužva ovdje čak i ako je datum 15.9. Moramo priznati da prisutnost toliko ljudi na jednom mjestu nije naš đir.
          </Text>
          <Text>
            Preferiramo osamu i divljinu, ali čini se da je ovo mjesto prepopularno da bismo to doživjeli i s tim smo se morali pomiriti. Jedino što za drugi put možemo popraviti je da se ne uspavamo toliko i da stignemo ranije. (veslali smo s rupom na kayaku!)
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Jedna klasična</ImgOverlay>
              <ImgLandscapeHalf img={images[3]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Šetamo polako pored rijeke</ImgOverlay>
              <ImgLandscapeHalf img={images[4]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Krka je svakako mjesto koje svojom ljepotom zaslužuje tu pažnju. No, nismo mogli a da se ne zapitamo u kojem smjeru vodi tolika količina ljudi na jednom mjestu i hoće li priroda ispaštati za to u budućnosti. Vrijeme će pokazati. Nama je ipak drago što živimo tu, nadomak ovih silnih prirodnih ljepota.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ana je digla drona</ImgOverlay>
              <Img img={images[5]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Još jedan uspješan vikend iza nas. Često čujemo komentare da stalno putujemo. A kako ne bi kad imamo toliko toga za vidjeti i doživjeti a tako malo vremena.
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
