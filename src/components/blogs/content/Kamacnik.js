import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { CoverImgCenterText, JustifiedGallery } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img, BlogPreview } from '../components'
import { getBlogImages, getGalleryPreviewImages } from '../../../images'

const Blog = () => {
  const history = useHistory()
  const { cover, images } = getBlogImages('kamacnik')
  const galleryPreviewImages = getGalleryPreviewImages('kamacnik')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Jesenski Kanjon'} h2={'Jesen u Gorskom Kotru - Šetnja kroz Kanjon Kamačnik'} img={cover}/>
        <BlogContainer>
          <Header>Jesenski Kanjon</Header>
          <Intro>
            Vakula kaže da nam stiže zima.
            Drugim riječima, stignemo posjetiti možda još jednu zvjezdicu prije nego zahladi.
            Nismo ljenčarili i odlučili smo iskoristiti zadnji topli vikend.
            Ovaj put imali smo i pojačanje.
          </Intro>
          <Text>
            Odredište: Kanjon Kamačnik.
            Udaljen 100 km od Zagreba, idealna destinacija za jednodnevni izlet i to baš u ovo jesensko doba.
            Nadamo se da će fotke dočarati barem malo boje kojoj smo se divili.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Kanjon u naponu jeseni</ImgOverlay>
              <Img img={images[0]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pogled s mosta</ImgOverlay>
              <ImgLandscapeHalf img={images[1]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Lišće u vodi</ImgOverlay>
              <ImgLandscapeHalf img={images[2]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Riječna ekspozicija</ImgOverlay>
              <ImgLandscapeHalf img={images[3]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Lišće u zraku</ImgOverlay>
              <ImgLandscapeHalf img={images[4]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Koliko volimo putovati, toliko volimo i spavati. Krenuli tek oko 10 sati, ali već u pola 12 nalazili smo se na šetnici pored rijeke. Staza je ukupno dugačka oko 7 km i nije zahtjevna (osim ako vas fotograf ne natjera da hodate po skliskom kamenju u cilju ostvarivanja dobrih fotki).
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Stavi lijevu nogu naprijed, stavi desnu...</ImgOverlay>
              <Img img={images[5]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Ne znam šta bi reko</ImgOverlay>
              <ImgLandscapeHalf img={images[6]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Svuda oko nas jesen</ImgOverlay>
              <ImgLandscapeHalf img={images[7]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Hi there :)</ImgOverlay>
              <Img img={images[8]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Na samom početku staze (gdje se rijeka Kamačnik ulijeva u Dobru) nalazi se i restoran. Na samom kraju staze naći ćete izvor rijeke Kamačnik.
            Izvor je dubok 120m i kristalno plave je boje.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mahovina</ImgOverlay>
              <Img img={images[9]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Stazu nazivaju i muzikalnom stazom jer su uz nju postavljeni šumski instrumenti koje možete zasvirati.
            Na početku se tako nalazi gong, malo dalje medina marimba, a pri kraju puhove orgulje.
          </Text>
          <Intro>
            Još jedan uspješan vikend iza nas.
            Često čujemo komentare da stalno putujemo.
            A kako ne bi kad imamo toliko toga za vidjeti i doživjeti a tako malo vremena.
          </Intro>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Aj ti preuzmi go pro ja ću zasvirat</ImgOverlay>
              <Img img={images[10]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Staza je prošarana mostićima i stepenicama.
            A svako malo možete pronaći i klupicu za odmor.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Mostića ko u priči</ImgOverlay>
              <ImgLandscapeHalf img={images[11]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Još jedan</ImgOverlay>
              <ImgLandscapeHalf img={images[12]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Klupica subvencionirana EU sredstvima</ImgOverlay>
              <Img img={images[13]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            U povratku smo poželjeli ručati u restoranu, međutim i ostali šetači su bili sličnog razmišljanja. Izletište je popularno među roditeljima s malom djecom i penzionerima tako da obratite pažnju na to, posebno nedjeljom.
          </Text>
          <Text>
            Za nas je red bio predugačak pa smo ovaj kratki izlet završili ručkom u obližnjem seoskom domaćinstvu Krizmanić. Zbog gladi nismo fotkali pa nemamo dokaze, ali vjerujte nam na riječ da su meso s roštilja i domaći sok od jabuke i cikle bili jaako fini.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ta daaa</ImgOverlay>
              <Img img={images[14]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Punog trbuha vraćamo se u Zagreb gdje nas već čeka mrak zbog sata koji je pomaknut noć prije. I to bi bilo to, šetnje po prirodi stavljamo na pauzu do nekih toplijih vremena. Ili možda ne?
          </Intro>
          <Header2>Za ostatak slika s putovanja, posjetite fotogaleriju!</Header2>
          <JustifiedGallery imgUrls={galleryPreviewImages} rowHeight={150} onImgClick={() => history.push('/gallery/kamacnik')}/>
          <BlogPreview />
        </BlogContainer>
      </Container>
    </>
  )
}





export default Blog
