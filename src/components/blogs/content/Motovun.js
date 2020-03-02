import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { CoverImgCenterText, JustifiedGallery } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img, BlogPreview } from '../components'
import { getBlogImages, getGalleryPreviewImages } from '../../../images'

const Blog = () => {
  const history = useHistory()
  const { cover, images } = getBlogImages('motovun')
  const galleryPreviewImages = getGalleryPreviewImages('motovun')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Magloviti Grad'} h2={'Fotovun i Veli Jože'} img={cover}/>
        <BlogContainer>
          <Header>Magloviti Grad</Header>
          <Intro>
            Kako smo i dali natuknuti u prošlom postu, ipak nismo stali s putovanjima i otišli u zimski san. Anina ljubav prema fotografiji spojila je prošli vikend ugodno s korisnim, a Mislavu ne treba puno (ni razloga, ni razmišljanja) za reći „Može“.
          </Intro>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Nisam nervozna prije radionice</ImgOverlay>
              <Img img={images[0]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            I tako smo mi završili na vikendu u Motovunu.
            Naš prvi posjet tom mističnom gradiću.
            Znamo samo priče o tome kako je kul, sladak i kako na jesen ima ta neka fora magla naokolo.
            E pa i kul je i sladak, a magla je stvarno nestvarna.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Stvarno nestvarna magla</ImgOverlay>
              <Img img={images[1]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Krenula sam sa svojim fotografskim usavršavanjima na radionici portretne fotografije koju je organizirala udruga Fotovun, a koju je vodio legendarni Igor Dugandžić – Cigo.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Kao kodiram ovo ono</ImgOverlay>
              <ImgPortraitHalf img={images[2]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Provjerava me u pauzi</ImgOverlay>
              <ImgPortraitHalf img={images[3]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <Text>
            Mislav je služio kao uho za slušanje kad sam se sva entuzijastična vraćala s radionica i prepričavala doživljaje.
            Kaže mi da je tijekom dana programirao i šetao se gradom pa pretpostavljam da je i njemu bilo lijepo.
            Čini mi se da nije loše programirati s ovakvim pogledom.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Konoba</ImgOverlay>
              <ImgLandscapeHalf img={images[4]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Šetnica</ImgOverlay>
              <ImgLandscapeHalf img={images[5]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Većinu vremena provela sam učeći i upijajući znanje ali uspjeli smo odvojiti dio nedjelje pred zalazak sunca za kratku šetnju gradom i opuštanje u krajoliku koji nas okružuje.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Beli zidići, črjeni krovići</ImgOverlay>
              <ImgPortraitHalf img={images[6]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Zidine</ImgOverlay>
              <ImgPortraitHalf img={images[7]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <Text>
            Kako smo išli van sezone, imali smo prostora za doživjeti grad bez gužve, i to za vrijeme najljepših boja.
            Ne znam da li sam ikad bila u gradu u kojem možeš napraviti krug od 360 stupnjeva i gdje je na svakom dijelu toliko predivan pogled.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Krug oko grada</ImgOverlay>
              <Img img={images[8]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Mislim da je to ono što ga čini toliko specifičnim.
            Stoji tako ponosno i moćno na tom brdašcu, ujutro se izdiže iznad magle, a navečer pozdravlja zrake sunca i stapa se s prirodom oko sebe.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Jedna od pet kula</ImgOverlay>
              <ImgLandscapeHalf img={images[9]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Pogled na dolinu</ImgOverlay>
              <ImgLandscapeHalf img={images[10]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Golden Hour</ImgOverlay>
              <Img img={images[11]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Zalazak</ImgOverlay>
              <Img img={images[12]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Lijepo je tebi Motovunu dragi.
            Mislim da ti mnogi gradovi zavide.
            A zavidimo ti malo i mi, stoga se vidimo uskoro opet...
          </Intro>
          <Header2>Za ostatak slika s putovanja, posjetite fotogaleriju!</Header2>
          <JustifiedGallery imgUrls={galleryPreviewImages} rowHeight={150} onImgClick={() => history.push('/gallery/motovun')}/>
          <BlogPreview />
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
