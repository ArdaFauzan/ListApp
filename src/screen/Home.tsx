import React, { Component } from "react";
import { FlatList, Image, StatusBar, Text, View, TouchableOpacity } from "react-native";


class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      dataPlant: [
        {
          plantImage: require('../assets/jahe.jpg'),
          plantName: 'Jahe',
          latinName: '(Zingiber officinale)',
          plantDesc:
          `   Jahe (Zingiber officinale) adalah tanaman dengan rimpang yang digunakan sebagai rempah dan obat tradisional. Rasa pedas pada jahe berasal dari senyawa keton zingeron. Jahe termasuk dalam famili Zingiberaceae (temu-temuan) dan merupakan tumbuhan pribumi Asia Tenggara. William Roxburgh memberikan nama ilmiah untuk jahe, dan penyebarannya diyakini mengikuti migrasi Suku Bangsa Austronesia pada abad ke-4 SM.
    Jahe, bersama dengan lengkuas, temu putih, dan lempuyang, menjadi tumbuhan khas di wilayah tersebut. Meskipun tumbuhan jahe tidak lagi tumbuh liar di alam, tetapi telah menjadi tumbuhan kultigen. Hal ini disebabkan oleh kehilangan kemampuannya untuk tumbuh melalui biji dan hanya dapat berkembang biak melalui reproduksi vegetatif menggunakan akarnya. Proses domestikasi jahe telah berlangsung lama di India dan Tiongkok.`
          },

        {
          plantImage: require('../assets/cabaimerah.jpg'),
          plantName: 'Cabai Merah',
          latinName: '(Capsicum annuum)',
          plantDesc: 
          `   Cabai merah (Capsicum annuum) adalah tanaman hortikultura yang mendapat perhatian komersial yang besar dalam budidaya. Sebagai anggota famili Solanaceae, cabai merah tidak hanya dikenal sebagai bumbu masak yang umum tetapi juga digunakan sebagai bahan ramuan obat-obatan. Keberagaman manfaat dari tanaman ini menjadikannya sangat dihargai dalam berbagai aspek kehidupan sehari-hari.   
          
    Buah cabai merah memiliki ciri khas berupa kecil, pedas, dan berbentuk bulat hingga bulat panjang. Struktur buahnya terdiri dari 2-3 ruang yang berisi banyak biji. Pada tahap kematangan, buah ini berubah warna dari hijau menjadi kuning dan akhirnya merah, mengeluarkan aroma yang khas sesuai dengan varietasnya. Selain menjadi elemen penting dalam memberikan rasa pedas pada masakan, cabai merah juga memikat petani karena tingginya permintaan di pasar, baik untuk kebutuhan rumah tangga maupun sebagai bagian dari beragam manfaat kesehatan.`  
        },

        {
          plantImage: require('../assets/paprika.jpg'),
          plantName: 'Paprika',
          latinName: '(Capsicum annuum L.)',
          plantDesc: 
          `   Paprika (Capsicum annuum L.) merupakan tanaman sayuran yang termasuk dalam keluarga terong-terongan atau Solanaceae. Buah paprika yang hadir dalam berbagai warna seperti hijau, kuning, merah, atau ungu sering menjadi pilihan utama sebagai campuran dalam sajian salad. Uniknya, paprika bukan hanya sekadar pelengkap, melainkan juga menjadi salah satu jenis buah yang kerap digunakan untuk melengkapi berbagai hidangan. Meskipun cita ras paprika menyerupai cabai, namun paprika memiliki tingkat kepedasan yang lebih rendah.
          
    Paprika bukan hanya memiliki nilai kuliner yang tinggi, namun juga menjadi komoditas hortikultura yang menjanjikan untuk dibudidayakan. Meski tingginya permintaan paprika, terdapat tantangan dalam pengembangan budidaya, dengan sebagian besar daerah belum sepenuhnya mengoptimalkan potensi tanaman ini. Asal usul paprika sebagai spesies dari genus tanaman Capsicum (cabai atau paprika) berasal dari Amerika Utara bagian selatan dan Amerika Selatan bagian utara. Dalam kelompok lima capsicum peliharaan, paprika menjadi spesies yang paling umum dan dijadikan objek budidaya secara luas.`  
        },

        {
          plantImage: require('../assets/lengkuas.jpg'),
          plantName: 'Lengkuas',
          latinName: '(Alpinia galanga)',
          plantDesc: 
          `   Lengkuas (Alpinia galanga) merupakan tanaman umbi-umbian yang secara luas ditanam di berbagai wilayah Asia, termasuk India, Arab, Cina, Sri Lanka, dan Indonesia. Sebagai bagian dari famili Zingiberaceae, lengkuas memiliki peran penting dalam dunia herbal dan pengobatan tradisional. Keberadaannya tidak hanya sebagai sumber bumbu masakan, tetapi juga sebagai tanaman herbal yang memiliki nilai kesehatan yang tinggi.
          
    Lengkuas terkenal karena kandungan antimikrobialnya, terutama diterpene dan eugenol yang memiliki aktivitas antifungi. Rimpang lengkuas, yang mudah ditemukan di Indonesia, sering digunakan sebagai obat gosok untuk mengatasi penyakit jamur kulit, seperti panu. Selain itu, lengkuas juga sering diaplikasikan dalam terapi kanker. Dengan ciri-ciri tanaman yang tegak dan tinggi, batang lengkuas mencapai 2 – 2,5 meter, dengan rimpang berwarna merah muda dan daun yang memanjang serta meruncing, panjangnya mencapai 23−40 cm.`  
        },

        {
          plantImage: require('../assets/ladahitam.jpg'),
          plantName: 'Lada Hitam',
          latinName: '(Piper nigrum)',
          plantDesc: 
          `   Lada hitam (Piper nigrum) tumbuh subur di daerah tropis yang memiliki kelembapan yang cukup. Tanaman ini termasuk dalam keluarga Piperaceae dan memiliki ciri khas tumbuh sebagai semak atau perdu yang sering memanjat dengan menggunakan akar-akar pelekat. Selain memberikan cita rasa pedas dan aroma khas yang kuat, lada hitam mengandung berbagai senyawa metabolit, seperti asam askorbat, asam palmitat, serta mineral seperti kalium, kalsium, seng, mangan, besi, dan magnesium, serta vitamin.

          
    Kandungan utama yang membuat lada hitam memiliki potensi manfaat kesehatan adalah piperine. Piperine adalah senyawa aktif yang memberikan rasa pedas pada lada hitam dan memiliki sifat antioksidan. Selain itu, piperine diduga memiliki kemampuan untuk meningkatkan hormon testosteron secara tidak langsung. Oleh karena itu, lada hitam dapat digunakan sebagai bagian dari diet yang mendukung kesehatan hormon. Tak hanya itu, lada hitam juga memiliki potensi sebagai antidepresan, karena mengandung senyawa metabolit sekunder yang dapat memengaruhi mekanisme terhadap reseptor 5-HT1B, yang terkait dengan regulasi mood dan suasana hati.`  
        },

        {
          plantImage: require('../assets/kayumanis.jpg'),
          plantName: 'Kayu manis',
          latinName: '(Cinnamomum verum)',
          plantDesc: 
          `   Kayu manis (Cinnamomum verum) bukan hanya sekadar rempah-rempah yang memberikan cita rasa unik pada masakan, tetapi juga telah diakui selama berabad-abad karena manfaat kesehatannya yang signifikan. Tumbuhan ini memiliki perawakan pohon yang mengesankan, dengan tinggi mencapai lebih dari 10 m dan diameter batang setinggi dada mencapai lebih dari 50 cm. Batangnya tegak dengan cabang yang padat dan halus, menciptakan struktur pohon yang indah.
          
    Kayu manis mengandung beragam komponen bioaktif seperti aldehida, alkohol sinamat, asam sinamat, dan sinamat. Kombinasi ini memberikan kayu manis sifat-sifat penting, seperti kemampuan mengatur gula darah, sifat antioksidan, antiinflamasi, dan antibakteri. Tidak hanya itu, kayu manis juga memiliki sifat antiviral yang dapat membantu melawan infeksi influenza dan menjaga kekebalan tubuh tetap kuat. Khususnya, flavonoid yang terdapat dalam kayu manis telah terbukti memberikan efek menguntungkan dalam melawan penyakit diabetes mellitus dengan mengontrol kadar gula darah dan mengoptimalkan kerja organ pankreas. Dengan kombinasi berbagai manfaat kesehatan ini, kayu manis menjadi lebih dari sekadar bumbu dapur, tetapi juga bahan alami yang mendukung kesehatan tubuh secara holistik.`  
        },

        {
          plantImage: require('../assets/kecombrang.jpg'),
          plantName: 'Kecombrang',
          latinName: '(Etlingera hemisphaerica)',
          plantDesc:
          `   Kecombrang (Etlingera hemisphaerica), yang termasuk dalam suku jahe-jahean (Zingiberaceae), memiliki bunga dan buah dengan rasa masam dan aroma harum yang khas. Tanaman ini bukan hanya menjadi bahan campuran dan penyedap masakan di berbagai hidangan Nusantara, tetapi juga memiliki potensi manfaat kesehatan yang signifikan. Kecombrang mengandung senyawa metabolit sekunder seperti flavonoid, saponin, dan tanin, yang memberikan potensi sebagai larvasida alami.
          
    Selain itu, kecombrang juga menunjukkan beragam aktivitas farmakologi yang mengesankan. Kandungan senyawa-senyawa tersebut memberikan sifat antidiabetes, antibakteri, dan bahkan efektif dalam mengobati sakit telinga. Dengan kombinasi karakteristik uniknya, kecombrang tidak hanya memperkaya cita rasa masakan tradisional, tetapi juga menawarkan manfaat kesehatan yang dapat diakses melalui berbagai pemanfaatan di bidang farmasi dan kesehatan.`  
        },

        {
          plantImage: require('../assets/asamjawa.jpg'),
          plantName: 'Asam Jawa',
          latinName: '(Tamarindus indica)',
          plantDesc: 
          `   Asam jawa (Tamarindus indica) adalah pohon yang menghasilkan buah dengan rasa asam, berasal dari wilayah tropis Asia, termasuk Indonesia. Pohon asam jawa memiliki karakteristik sebagai pohon besar yang tetap hijau sepanjang tahun, tumbuh subur terutama di dataran rendah dengan musim panas yang panjang.
          
    Buah asam jawa memiliki peran penting dalam dunia kuliner dan pengobatan tradisional. Selain buahnya, daun, batang, dan biji asam jawa juga memberikan sejumlah manfaat. Biji asam jawa, misalnya, digunakan sebagai obat alami untuk mengatasi gangguan pencernaan dan meningkatkan produksi empedu. Kandungan serat tinggi dalam biji tersebut juga bermanfaat untuk mengobati stomatitis dan meredakan masalah sembelit. Jus dari biji asam jawa juga dapat digunakan sebagai obat kumur yang efektif. Dengan demikian, asam jawa bukan hanya memberikan citarasa asam yang khas dalam masakan, tetapi juga menjadi sumber manfaat kesehatan yang beragam.`  
        },

        {
          plantImage: require('../assets/asamgelugur.jpg'),
          plantName: 'Asam Gelugur',
          latinName: '(Garcinia atroviridis)',
          plantDesc: 
          `   Asam gelugur (Garcinia atroviridis) adalah pohon yang menghasilkan asam potong atau asam keping, sebuah bahan yang diperoleh dari irisan buah asam gelugur yang dikeringkan di bawah sinar matahari. Terlebih lagi, asam gelugur merupakan tanaman serbaguna yang tergolong dalam suku Guttiferae dan marga Garcinia, asalnya berasal dari wilayah Asia Selatan dan Asia Tenggara, dan banyak ditemukan tumbuh subur di Pulau Sumatera.
          
    Dengan preferensi pertumbuhan di daerah dengan ketinggian 5-800 meter di atas permukaan laut, asam gelugur dapat tumbuh baik di berbagai jenis tanah, termasuk tanah berpasir, tanah liat, tanah berbatu, tanah basah tepi sungai, tanah kapur, hingga tanah kritis di tepian pegunungan. Daya adaptasinya yang luas membuatnya dapat ditemui di berbagai kondisi lingkungan. Selain menjadi bagian integral dalam ekosistem alam, asam gelugur juga memiliki nilai ekonomis dan medis yang signifikan. Masyarakat luas menggunakan tanaman ini sebagai penyedap masakan, rempah-rempah, dan bahan obat herbal, mengakui keberagaman manfaatnya dalam konteks kuliner dan kesehatan.`  
        },

        {
          plantImage: require('../assets/kencur.jpg'),
          plantName: 'Kencur',
          latinName: '(Kaempferia galanga)',
          plantDesc:
          `   Kencur (Kaempferia galanga) adalah tanaman tropis yang sering digunakan sebagai bumbu penyedap masakan dan sebagai bahan ramuan obat tradisional. Selain dikenal sebagai kencur, tanaman ini juga memiliki sejumlah nama lokal seperti cikur, ceku, cekor, tekur, bataka, dan suha. Kencur merupakan jenis tanaman temu-temuan atau umbi-umbian yang mengandung minyak atsiri, cinnamal, aldehide, asam motil p-cumarik, asam cinnamal, etil ester, dan pentadekan.
          
    Tumbuh subur di berbagai daerah di Indonesia, kencur dapat ditemui baik sebagai tanaman yang tumbuh secara alami maupun dalam kegiatan budidaya. Tanaman ini memiliki sejumlah manfaat kesehatan, di antaranya sebagai ekspektoran, diuretika, dan stimulan. Oleh karena itu, kencur sering diolah menjadi pasta karena dipercaya dapat mengatasi kelelahan dan memberikan efek positif bagi kesehatan. Keberagaman pemanfaatan kencur mencerminkan peran pentingnya dalam konteks kuliner dan tradisi pengobatan di masyarakat.`  
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar 
          barStyle='light-content' 
          backgroundColor='#44bd32'
        />
        <View
          style={{
            backgroundColor: '#388e3c', 
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: 25
            }}
          >10 REMPAH - REMPAH</Text>
        </View>

        <FlatList 
          data={this.state.dataPlant}
          renderItem={({item}) => 
            <TouchableOpacity 
              style={{
                backgroundColor: '#B5C4B3',
                marginHorizontal: 12,
                marginVertical: 15,
                borderRadius: 53,
                padding: 10,
                position: 'relative',
                bottom: 1,
                borderColor: '#28B405',
                borderWidth: 2.5,
              }}
              onPress={() => this.props.navigation.navigate('Detail', {
                image: item.plantImage,
                plantName: item.plantName,
                latinName: item.latinName,
                plantDesc: item.plantDesc,

              })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Image 
                  source={item.plantImage}
                  style={{
                    height: 100,
                    width: 110,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 100,
                  }}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 30,
                      paddingTop: 18,
                    }}
                  >{item.plantName}</Text>
                  <Text
                    style={{
                      paddingBottom: 22,
                      color: '#000000',
                      fontWeight: '600',
                      fontSize: 14
                    }}
                  >{item.latinName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.plantName}
        />

        <View style={{backgroundColor: 'green'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center'}}>
              <Image 
                source={require('../assets/home.png')} 
                style={{
                  marginTop: 9, 
                  height: 55, 
                  width: 50}}/>
              <Text style={{
                color: '#ffffff',
                fontSize: 18, 
                fontWeight: 'bold',
                }}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Profile')}
              >
              <Image 
                source={require('../assets/profile.png')} 
                style={{
                  height: 55, 
                  width: 55, 
                  marginTop: 10,
                  }}/>
              <Text style={{
                color: '#ffffff', 
                fontSize: 18, 
                fontWeight: 'bold',
                }}>PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default Home;
