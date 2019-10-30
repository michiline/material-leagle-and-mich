import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { blogImageBundle } from '../../../images'

const Blog = () => {
  const { cover, images } = blogImageBundle('soca')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Smaragdna Rijeka'} h2={'Brzaci, Slapovi i Viseći Mostovi - Dolina Soče'} img={cover}/>
        <BlogContainer>
          <Header>Smaragdna Rijeka</Header>
          <Intro>
            Svaki produženi vikend idealna je prilika za putovanje.
            Tako smo mi za ovaj odlučili skočiti do susjedne nam Slovenije. Htjeli smo nešto, blizu, zanimljivo, u prirodi i odluka je pala na predivnu dolinu rijeke Soče.
          </Intro>
          <Intro>
            Ovo je bilo naše prvo kampiranje duže od vikenda i uzbuđenje je bilo na vrhuncu.
            Iako danas zbog slika predivnih lokacija koje su nam lako dostupne na internetu možemo dobro isplanirati put, isto tako možemo znati točno što nas čeka i smanjiti si iznenađenje.
            No, unatoč tome, ljepota ovog mjesta je neopisiva i nijedna slika ne može u potpunosti prenijeti osjećaj koji imaš kada si tamo.
          </Intro>
          <Header2>Četvrtak 20.6.2019.</Header2>
          <Text>
            Naš put započeo je u četvrtak u 8 (čitaj 9) ujutro, s pripremljenom kavom, smoothiejem, limunadom, sendvičima, prepunim autom (stvari, ali i dobre volje).
            Zvjezdice koje Ana pripremi na karti bile su tu, kao i okvirna ideja što sve želimo vidjeti, ali smo ostavili i dio spontanosti i planiranja u hodu.
            To se najčešće pokaže kao dobra odluka, ako zbog ničeg drugog onda zbog vremenskih (ne)prilika.
          </Text>
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
            Slučajno otkrivena lokacija taman na našem putu, 4km od Bleda  vodi mala cesta do korita dugih 1.6km. Parking je besplatan, no ulaz se plaća 10€ po osobi.
            Kiša će valjda stati.
            I je, nakon polusatnog spavanja u autu i nakon odluke da nam kiša možda ipak ne može ništa. Tako je naša šetnja u jednom smjeru bila popraćena kapljicama kiše, a u drugom smjeru zrakama sunca.
            Nije loše vidjeti obje perspektive. Predivno uređena šetnica vodi do slapa Šum i omogućuje divne prizore cijelim putem. Prve postaje su uspješno odrađene i spremni smo za dalje.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Kiša je stala!</ImgOverlay>
              <ImgPortraitHalf img={images[14]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Čekam fotografkinju...</ImgOverlay>
              <ImgPortraitHalf img={images[15]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Jezero Jasna</Header3>
          </BulletHeaderContainer>
          <Text>
            Sljedeća postaja bila je jezero Jasna kod Kranjske gore. Malo jezero sa šetnicom i pogledom na Julijske Alpe.
            Na jezeru je dovoljno zadržati se 30-ak minuta i upiti svu ljepotu prirode koja se nalazi pored.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ommmmmmm...</ImgOverlay>
              <Img img={images[19]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Jezero Zelenci</Header3>
          </BulletHeaderContainer>
          <Text>
            Prije odlaska u kamp u dolini Soče napravili smo 10 minutu vožnju do predivnog jezera Zelenci, koje je ujedno i izvor dobro nam poznate rijeke Save Dolinke.
            Izvor je čista suprotnost onoga što se u našim glavama javi kad čujemo riječ Sava.
            Čist je, bistar, u predivnom malo okruženju, a mjesto je kao stvoreno za kratki predah i divljenje prirodi.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mir i tišina...</ImgOverlay>
              <Img img={images[18]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Vršič Pass</Header3>
          </BulletHeaderContainer>
          <Text>
            Do doline Soče odlučili smo putovati Vršič cestom. Postoji kraći put međutim ovaj je prijelaz prepun predivnih prizora koje nismo htjeli propustiti.
            Cesta je duga 24km i ima 50 označenih velikih zavoja koji daju dodatnu čar cijelom putovanju.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Predah na vrhu</ImgOverlay>
              <Img img={images[16]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Složili smo svoj "cairn" i nastavili dalje</ImgOverlay>
              <Img img={images[17]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Kamp Vodenca</Header3>
          </BulletHeaderContainer>
          <Text>
            Kao smještaj nas je dočekala prostrana, zelena livada okružena planinama.
            Savršeno mjesto za naše prvo duže kampiranje.
            Uredan i pregledan kamp, idealan za bijeg u prirodu.
          </Text>
          <Header2>Petak 21.6.2019.</Header2>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Rafting na Soči</Header3>
          </BulletHeaderContainer>
          <Text>
            Naše prvo rafting iskustvo nije moglo imati ljepšu lokaciju.
            Odlična ekipa iz SportMix Boveca nam je pripremila odličnu turu i atmosferu.
            Moramo pohvaliti njihovu brigu i trud oko nas, a dodatni plus je što se na kraju dobiju i besplatne slike te cijela avantura ostane zabilježena.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ovo je bilo zabavno!</ImgOverlay>
              <Img img={images[0]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Slap Virje</Header3>
          </BulletHeaderContainer>
          <Text>
            Čekajući na naš termin za rafting, otišli smo u posjet obližnjem slapu Virje.
            Do njega je potrebno hodati cca 5min pješke i preporuka je stići malo ranije da se izbjegne veća gužva koja se stvori oko njega.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Vrlo osvježavajuće</ImgOverlay>
              <Img img={images[7]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Subota 22.6.2019.</Header2>
          <Text>
            U subotu nas je dočekala kiša te smo odlučili prepustiti se vremenskim prilikama i prvi dio dana provesti pod šatorom.
            Nismo očajavali. Dapače odmor na odmoru je dobro došao, a i sve je stvar perspektive.
            Tako smo pretvorili to u pozitivno iskustvu.
            Izguglali možemo li kuhati kavu u šatoru, jer kava je ipak najvažnija.
            Ostatak nam  je dana u šatoru bilo uživanje u trenutku.
          </Text>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Slap Kozjak</Header3>
          </BulletHeaderContainer>
          <Text>
            Popodne nam je ipak dozvolilo skitanje pa smo se odlučili za vožnju do Kobarida.
            Tamo smo otišli do slapa Kozjak koji se nalazi na rubu Triglavskog Nacionalnog Parka.
            Šetnja traje ukupno oko 1h i 15min.
            Kao i na ostalim dijelovima na kojima smo bili, šetnica je jako uređena, pogled na svakom koraku ostavlja bez daha, a slapu se možeš samo diviti.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ekspozicija</ImgOverlay>
              <Img img={images[6]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Napolenov most</Header3>
          </BulletHeaderContainer>
          <Text>
            Kratka stanice između centra Kobarida i parkinga za početak šetnje prema slapu Kozjak. Pruža jedan od ljepših pogleda na rijeku Soču.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Pogled s mosta</ImgOverlay>
              <ImgPortraitHalf img={images[20]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Jedva čekam probat!</ImgOverlay>
              <ImgPortraitHalf img={images[21]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Slap Boka</Header3>
          </BulletHeaderContainer>
          <Text>
            Na povratku u kamp izdvojili smo još 30 minuta za kratko stajanje na vidikovcu za slap Boka. Slika s naslovnice ovog bloga prikazuje svu moć i ljepotu tog slapa.
            Svakako vrijedno mjesto za pogledati, a najhrabriji i oni željni avanture mogu se odlučiti i na dužu rutu hodanja do samog slapa. Mi smo ga ovaj put posjetili samo s udaljenosti.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Njegovo veličanstvo, 106m visok slap Boka</ImgOverlay>
              <Img img={images[24]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Nedjelja 23.6.2019.</Header2>
          <Text>
            Nedjelja je bila dan za jedno zanimljivo iskustvo. Odlučili smo se upisati u jednodnevnu školu kajaka i  isprobati ga, ali na rijeci, divljoj rijeci. Ana i dalje nije sigurna što misli o tom iskustvu, osim što joj je drago da je preživjela.
          </Text>
          <Text>
            Kada se nakon 3 sekunde u kajaku prevrneš, zaboraviš sve upute o tome kako da se izvučeš pa pomahnitalo uzimaš zrak i čekaš da netko dođe do tebe, nije ti baš svejedno i nisi siguran želiš li to iskustvo ponoviti. Tj. želiš, ali možda u nekim sigurnijim i mirnijim uvjetima.
          </Text>
          <Text>
            Ipak, odustajanja nije bilo, staza je uspješno prijeđena, a rijeka Soča i ovaj put, baš kao i na raftingu ostavlja bez daha. Dobro je sve.
            Samo, nakon ovoga, jedino što smo bili sposobni jest zaspati u kampu i prepustiti se slatkom osjećaju umora i uspjeha.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Ćorkica u hammocku</ImgOverlay>
              <ImgLandscapeHalf img={images[22]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>I pod je sasvim ok...</ImgOverlay>
              <ImgLandscapeHalf img={images[23]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Šunikov vodni gaj</Header3>
          </BulletHeaderContainer>
          <Text>
            Ova zvjezdica se nalazi kod Lepene i možda je najmanje turistička od svih, a podjednako zanimljiva.
            Ima nekoliko stajališta-vidikovaca poput brdašaca koji prelaze bazene i slapove, ostatke starog mlina te moćna i velika stabla, kao i mostić preko kojeg se prelazi tijekom šetnje.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Viče da pazim jer je sklisko</ImgOverlay>
              <ImgPortraitHalf img={images[25]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Behind the scenes</ImgOverlay>
              <ImgPortraitHalf img={images[26]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Most i ć (i šuma)</ImgOverlay>
              <Img img={images[27]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Napokon neka ravna podloga da se slikamo</ImgOverlay>
              <Img img={images[28]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Ponedjeljak 24.6.2019.</Header2>
          <Text>
            Ponedjeljak je bio još jedan putni dan, gdje smo odlučili isprobati kako je to SUP-ati. Rezervirali smo 2 SUP-a za 15h u Soča SUP-u kod Mosta na Soči (rezervacija se obavlja telefonski), a u međuvremenu smo obišli obližnje pripremljene zvjezdice.
          </Text>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Tolminska korita</Header3>
          </BulletHeaderContainer>
          <Text>
            Tolminska korita su još jedna posebna priča, još jedna slična, a posebna šetnica i još jedan pogled u ljepotu oko sebe. Uz korita je besplatan parking, iako dosta popunjen, ulaznica je 5 eura, a šetnja od otprilike sat vremena puna prizora za prepričavanje.
          </Text>
          <Text>
            Čak je moguće piti vodu izravno iz stijena. Ne sjećamo se kada smo zadnji put to napravili. Osjećaj je super, a voda osvježavajuća.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay> Đavolji most (popularno ime za most)</ImgOverlay>
              <ImgPortraitHalf img={images[29]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Pogled sa Đavoljeg mosta</ImgOverlay>
              <ImgPortraitHalf img={images[30]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet /><Header3>Ušče Tolminke</Header3>
          </BulletHeaderContainer>
          <Text>
            Prije SUP-a čekalo nas je Sotočje, mjesto za kupanje, plažu, još jedan ručak od tjestenine i kukuruza i radikalne odluke o kupanju u hladnoj vodi. Ali kada je okoliš toliko privlačan nema druge! Mjesto bez puno ljudi, s dosta mjesta za osamu i mir i s lijepim prilazima vodi. A oko nas 2 rijeke, neobičnih boja…
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Bistra i hladna</ImgOverlay>
              <Img img={images[31]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet /><Header3>SUP na Soči</Header3>
          </BulletHeaderContainer>
          <Text>
            Anino prvo stajanje na SUP je prošlo puno bolje od prvog kajaka na divljim vodama. Mir cijele okoline daje mir i duši. SUP je, bilo zbog okoline, bilo zbog osjećaja dok stojiš na njemu ušao u naša srca.
          </Text>
          <Text>
            Vozili smo se mirnim dijelom rijeke Soče, ali i dalje nizvodno gdje se Soča spaja s rijekom Idrijcom. Na tom mjestu nalazi se i Most na Soči, koji smo obišli iz ove perspektive, kao i predivan zeleni dio rijeke, nalik jezeru. Potpuno drukčije od Soče koju smo do sada gledali – bez velikih brzaca, na jugu Triglavskog nacionalnog parka.
          </Text>
          <Text>
            I ekipa iz Soča SUP-a je za samu pohvalu, dragi par koji je svoju ljubav pretvorio u posao i to se osjeti u komunikaciji s njima.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Upijanje sunca</ImgOverlay>
              <ImgLandscapeHalf img={images[35]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Prizori uz rijeku</ImgOverlay>
              <ImgLandscapeHalf img={images[34]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Boja rijeke sa slike je stvarna</ImgOverlay>
              <Img img={images[32]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Utorak 25.6.2019.</Header2>
          <Text>
            Iako smo za zadnji dan planirali Bohinj i slap Savicu, odlučili smo to zbog dužine puta ostaviti za neku drugu priliku. Stoga smo se za kraj našeg uspješnog 6-dnevnog kampiranja odlučili počastiti kupanjem u ledenoj vodi velikih korita rijeke Soče. Iako smo znali da je hladno, kristalno čista voda i njena predivna smaragdna boja, bile su previše primamljive te smo odlučili dopustiti nogama da nam utrnu i prijeći vlastite granice.
          </Text>
          <Text>
            Nekoliko skokova, puno zaveslaja uzvodno, tek koji nizvodno i malo grijanja na suncu bilo je savršen kraj naše male avanture. Koja, kako se priča ima puni potencijal pretvoriti u tradiciju. Put smo nastavili kroz Ljubljanu, i kratko stajanje, tek toliko da nas postepeno vrati u civilizaciju.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Ah ta boja</ImgOverlay>
              <ImgPortraitHalf img={images[38]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Idealno za kupanac</ImgOverlay>
              <ImgPortraitHalf img={images[39]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Sjedni tu da te slikam, dobra je pozadina</ImgOverlay>
              <Img img={images[36]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Jedna za kraj...</ImgOverlay>
              <Img img={images[37]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Često poželimo ići u daleke i neobične krajeve, a zapravo nas baš tu, iza ugla, čekaju neke od najljepših prirodnih ljepota ovoga planeta.
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
