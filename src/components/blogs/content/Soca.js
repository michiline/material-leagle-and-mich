import React from 'react'
import styled from 'styled-components'
import { FlexColumnCenterContainer, CoverImg, H3, H5, H6, Body1, Body2, Overline } from '../../general'
import { socaCover, soca, star } from '../../../images'
import { padding, margin } from '../../../style'
const Soca = () => {
  return (
    <>
      <Container>
        <CoverImg img={socaCover}/>
        <BlogContainer>
          <Header>Kampiranje na Soči</Header>
          <Intro>
            Svaki produženi vikend idealna je prilika za putovanje.
            Tako smo mi za ovaj odlučili skočiti do susjedne nam Slovenije. Htjeli smo nešto, blizu, zanimljivo, u prirodi i odluka je pala na predivnu dolinu rijeke Soče.
          </Intro>
          <Intro>
            Ovo je bilo naše prvo kampiranje duže od vikenda i uzbuđenje je bilo na vrhuncu.
            Iako danas zbog slika predivnih lokacija koje su nam lako dostupne na internetu možemo dobro isplanirati put, isto tako možemo znati točno što nas čeka i smanjiti si iznenađenje.
            No, unatoč tome, ljepota ovog mjesta je neopisiva i nijedna slika ne može u potpunosti prenijeti osjećaj koji imaš kada si tamo.
          </Intro>
          <Text>
            Naš put započeo je u četvrtak u 8 (čitaj 9) ujutro, s pripremljenom kavom, smoothijem, limunadom, sendvičima, prepunim autom (stvari, ali i dobre volje).
            Zvjezdice koje Ana pripremi na karti bile su tu, kao i okvirna ideja što sve želimo vidjeti, ali smo ostavili i dio spontanosti i planiranja u hodu.
            To se najčešće pokaže kao dobra odluka, ako zbog ničeg drugog onda zbog vremenskih (ne)prilika.
          </Text>
          <Header2>Četvrtak 20.6.2019.</Header2>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Jezero Bled</Header3>
          </BulletHeaderContainer>
          <Text>
            Kratka pauza za šetnju, sladoled, odmor na klupici i uživanje u pogledu. Iako nam se jezero svidjelo, mjesto je za nas preturističko i stoga smo htjeli što brže doći do nekih samotnijih zvjezdica. U tom nastojanju požurila nas je i kiša.
          </Text>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Vintgar Gorges</Header3>
          </BulletHeaderContainer>
          <Text>
            Slučajno otkrivena lokacija taman na našem putu, 4km od Bleda  vodi mala cesta do korita dugih 1.6km. Parking je besplatan, no ulaz se plaća 10€ po osobi. Kiša će valjda stati. I je, nakon polusatnog spavanja u autu i nakon odluke da nam kiša možda ipak ne može ništa. Tako je naša šetnja u jednom smjeru bila popraćena kapljicama kiše, a u drugom smjeru zrakama sunca. Nije loše vidjeti obje perspektive. Predivno uređena šetnica vodi do slapa Šum i omogućuje divne prizore cijelim putem. Prve postaje su uspješno odrađene i spremni smo za dalje.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Kiša je stala!</ImgOverlay>
              <ImgPortraitHalf img={soca[13]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Čekam fotografkinju...</ImgOverlay>
              <ImgPortraitHalf img={soca[14]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Jezero Jasna</Header3>
          </BulletHeaderContainer>
          <Text>
            Sljedeća postaja bila je jezero Jasna kod Kranjske gore. Malo jezero sa šetnicom i pogledom na Julijske Alpe. Na jezeru je dovoljno zadržati se 30-ak minuta i upiti svu ljepotu prirode koja se nalazi pored.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ommmmmmm...</ImgOverlay>
              <Img img={soca[18]}/>
            </ImgWrap>
          </ImgRow>
        </BlogContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 750px) {
    padding-top: 7rem;
  }
`

const Header = styled(H3)`
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  text-align: center;
`

const BlogContainer = styled(FlexColumnCenterContainer)`
  padding: ${padding.medium};
`

const Intro = styled(Body2)`
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Montserrat';
  text-align: justify;
  font-style: italic;
  padding-top: ${padding.small};
  padding-bottom: ${padding.small};
`

const Text = styled(Body1)`
  font-family: 'Montserrat';
  text-align: justify;
  padding-top: ${padding.medium};
  padding-bottom: ${padding.medium};
`

const Header2 = styled(H5)`
  font-family: 'Montserrat';
  font-style: italic;
  align-self: start;
  padding-top: ${padding.medium};
  padding-bottom: ${padding.medium};
`

export const Header3 = styled(H6)`
  align-self: center;
  font-family: 'Montserrat';
`

export const BulletHeaderContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: max-content;
  padding-top: ${padding.medium};
`

export const StarBullet = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${star});
  width: 3rem;
  height: 3rem;
  align-self: center;
  margin-right: ${padding.medium};
`

export const ImgRow = styled.div`
  display: flex;
  padding-bottom: ${padding.small};
`

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ImgWrapPortrait = styled.div`
  width: 50%;
  height: auto;
  position: relative;
`

export const ImgWrapPortraitLeft = styled(ImgWrapPortrait)`
  margin-right: ${padding.smallest};
`

export const ImgPortraitHalf = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const ImgOverlay = styled(Overline)`
  position: absolute;
  bottom: 0;
  background-color: #0000007D;
  width: 100%;
  color: #B09978;
  display: flex;
  justify-content: flex-end;
  padding: ${padding.smallest};
`

export default Soca
