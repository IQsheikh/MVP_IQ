const cities = [
    {
      id: 1,
      name: "Antwerp",
      province: "Antwerpen",
      trainAccess: "Antwerpen Central Railway Station",
      language: "Dutch",
      population: 530504,
      images: {
        winter: [ 
                  "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ifad4f47a24d12760/version/1626274500/best-christmas-markets-in-poland.jpg",
                  "https://images0.persgroep.net/rcs/FJ_9qD5o60yvzVkZiCIKgV70YN4/diocontent/203033868/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
                  "https://upload.wikimedia.org/wikipedia/commons/5/54/MAS_Antwerpen_2016-05_--1.jpg",
                ],
        
        summer: [
                  "https://images0.persgroep.net/rcs/FJ_9qD5o60yvzVkZiCIKgV70YN4/diocontent/203033868/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
                  "https://www.eventonline.be/wp-content/uploads/2012/04/01-ZOO_8aug2016_JonasVerhulst-13.jpg",
                  "https://visit.antwerpen.be/assets-proxy/f27123c9-972d-484f-9f0e-a1db323be842",
                  
                 ],

        spring: [
                 "https://media-cdn.tripadvisor.com/media/photo-s/05/c5/03/7c/the-entrance-to-the-meir.jpg",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83W4ECdLlHib3DDxzECZbqlYY64Yxt_LqnWHpX0LvzMox-PkkqEIsfj5t7ubR2LeNKzg&usqp=CAU",
                 "https://visit.antwerpen.be/assets-proxy/f27123c9-972d-484f-9f0e-a1db323be842",
                ],
        
        autumn: [
                  "https://riginov.com/uploads/images/content/riginov-education-and-guidance-city-of-antwerp-rubens-house.jpg",
                  "https://visit.antwerpen.be/assets-proxy/53b1a3c6-d83f-4984-b302-e9ad729e2b82",
                  "https://www.steden.net/wp-content/uploads/2013/08/stadsfeestzaal.jpg,",
        ],
      },

      winter: "Enjoy at Christmas Market, See the Antwerpen Central Station, Explore in the MAS",
      summer: "See the Antwerpen Central Station, visit Antwerpen Zoo, Stroll to Het Steen",
      spring: "Shop at De Meir, See the historic St Anna's Tunnel, Walk at Het Steen",
      autumn: "Visit Reubens Huis, See Red Star Line Museum, Relax at Stadsfeestzaal",
      url: "https://visit.antwerpen.be/assets-proxy/560b2938-bdd8-4d27-b1c3-a6a5654b7230"
    },

    {
      id: 2,
      name: "Brussels",
      province: "Region of Brussels",
      trainAccess: "There are 3 train stations; Brussels Central, Nord & Zuid",
      language: "French & Dutch",
      population: 1212352,
      images: {
       winter: [
                  "https://api.brusselstimes.com/wp-content/uploads/2022/09/cc2dd6e7-plaisirsdhiver-2021-14-2-1024x682.jpg",
                  "https://images0.persgroep.net/rcs/bkpXbcpSPN6MYhBcmxJzH2_Lbng/diocontent/212521689/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
                  "https://img.static-kl.com/images/media/00E09804-868B-4A70-A8A0F13116E62B2C?aspect_ratio=1:1&min_width=912",
                 ], 
        
        summer:
                [
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/3e/52/7d/solo-por-el-recibo-merece.jpg?w=500&h=-1&s=1",
                  "https://www.monarchie.be/sites/default/files/public/content/la_salle_du_trone1-2.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bruselas%2C_Manneken_Pis_3.jpg/220px-Bruselas%2C_Manneken_Pis_3.jpg",
                  "https://www.thebulletin.be/sites/default/files/mini-europe_f873953ed7042dd04f18bcf7210474b1e42c1b80_sq_640.jpg",
                ],
        spring:
                [
                  "https://i0.wp.com/travelcollective.co/wp-content/uploads/2021/10/photo-1556797928-9f0595a0715d.jpeg?resize=768%2C1024&ssl=1",
                  "https://api.brusselstimes.com/wp-content/uploads/2023/03/3709c5da-halonim03223.jpg",
                  "https://assets.architecturaldigest.in/photos/60004ad98811094f67bec3a0/master/pass/Brussels_Flower-carper_feature-image-1366x768.jpg",
                ],
        autumn:
                [
                  "https://www.astro.oma.be/wp-content/uploads/2014/09/102-4.jpg",
                  "https://planetofhotels.com/guide/sites/default/files/styles/max_1280/public/hero_banner/Brussels_Cathedral.jpg",
                  "https://d3w13n53foase7.cloudfront.net/medium_Sonian_Forest_activity1_Vincent_Brassinne_Flickr_5420041187.jpg",
                ],
              },

      winter: "See the Christmas Market, Visit Bright Brussels, Go to The Atomium",
      summer: "Visit Art & History Museum, Go inside the Royal Palace, See Manekken Pis, Visit Mini Europe",
      spring: "See Royal Greenhouses of Laeken, Visit Hallerbos, Photograph the Flower cartpet at Grand Place",
      autumn: "Go to Planetarium, Visit Cathedral of St. Michael & st. Gudula, Visit the Sonian Forest",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Grand_Place_Brussels_Belgium_Travel_Europe.jpg"
    },

    {
      id: 3,
      name: "Brugge",
      province: "West Flanders",
      trainAccess: "There is one train station.",
      language: "Dutch",
      population: 118509,

      images: {
        winter: [
                  "https://media.istockphoto.com/id/466718920/photo/christmas-old-market-square-in-the-center-of-bruges-belgium.jpg?s=612x612&w=0&k=20&c=9L4K-vkySm3AafICOI1zCp2-o4E7VMRKHM0gMrldRZU=",
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/83/d4/1e/enjoy-our-fine-chocolates.jpg?w=500&h=400&s=1",
                  "https://www.museabrugge.be/volumes/general/_1200x630_crop_center-center_82_none/Bezoek-het-Gruuthusemuseum_Musea-Brugge.f1646229310.jpg?mtime=1646229310",
                  "https://fullsuitcase.com/wp-content/uploads/2021/12/Bruges-Winter-Glow-light-show-at-Christmas.jpg.webp",
                ], 
         
         summer:
                 [
                  "https://thetravelhack.com/wp-content/uploads/2014/06/Boat-ride-in-Bruges.jpg",
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2e/80/a1/horse-drawn-carriage.jpg?w=1200&h=-1&s=1",
                  "https://www.bruggevoorbeginners.nl/wp-content/uploads/sites/14/2019/04/brugge2-1000x667.jpg",
                 ],
         spring:
                 [
                  "https://live.staticflickr.com/65535/52059712241_0bb182eabb_o.jpg",
                  "https://media.istockphoto.com/id/1176742448/photo/canals-traditional-buildings-and-tower-of-church-of-our-lady-in-brugge-belgium.jpg?s=612x612&w=0&k=20&c=L1D1DSEEU-czpO8twhG3FWLEDEgj3TBPllPHsTTxIus=",
                  "https://i.pinimg.com/originals/2a/92/89/2a9289cbf2b4760d9bd826f6424851d9.jpg",
                 
                   
                 ],
         autumn:
                 [
                  "https://pbs.twimg.com/media/CRxNPuxXIAINUgq.jpg",
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9d/f7/f1/inside-the-basilica.jpg?w=1200&h=-1&s=1",
                  "https://www.treehugger.com/thmb/fXs3CJva3z0eO9VCdTGZZZC0840=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-932177142-5026ceb9309e47498e024f3ffcfed646.jpg",

                 ],
               },
      

      winter: "Visit the Christmas Market, Buy Chocoates at shopping street, Go to the Gruuthuse Museum, See Brugge light show",
      summer: "Take a boat Tour, Try Horse and Carriage tours, See the Historic Center",
      spring: "See the Tulips, Take Boat tours, visit the Belfry of Bruges",
      autumn: "See autumn in Brugge, Go to Basilica of the Holy Blood, See the Bruges canals in Autumn",
      url: "https://img.itinari.com/pages/images/original/4dcc61ee-da31-49d6-8b3d-bf86d024a75b-istock-535490789.jpg?ch=DPR&dpr=1.25&w=1600&s=417afb129b48d5131acce5094df23736"
    },
    {
      id: 4,
      name: "Dinant",
      province: "Namur",
      trainAccess: "There is one train station",
      language: "French",
      population: 13544,

      images: {
        winter: [
                  "https://www.travelingness.com/wp-content/uploads/2020/10/IMG_4099-1024x657.jpg",
                  "https://www.bierpassie.com/articleicon/2001/medium/1376317465.jpg",
                  "https://www.visitardenne.com/sites/default/files/styles/small_650x650/public/upload/Sites%20embl%C3%A9matiques/citadelle%20de%20Namur/toutes%20les%20citadelles/Dinant_00_2012_t%C3%A9l%C3%A9ph%C3%A9riqueetvuededinant_Laetis.jpg?itok=KgB_0AK2",             
                ], 
         
         summer:
                 [
                  "https://pivotweb.tourismewallonie.be/PivotWeb-3.1/img/OTH-A0-0069-20A5;w=825",
                  "https://cf.bstatic.com/images/hotel/max1024x768/374/374160646.jpg",
                  "https://www.wayfaringwithwagner.com/wp-content/uploads/2017/07/dinant-belgium-wayfaring-with-wagner-32.jpg",
                  "https://chateau-veves.be/wp-content/uploads/2020/07/chaeau_veves.jpg"
                 ],
         spring:
                 [
                   "https://www.the4willows.be/media/k2/galleries/117/01%20201806%20Dinant%20aan%20de%20Maas%20shutterstock_1127634152.jpg",
                   "https://pivotweb.tourismewallonie.be/PivotWeb-3.1/img/ALD-01-00099M;w=;h=",
                   "https://cdn.wbtourisme.be/sites/default/files/Furfooz1.JPG",
                 ],
         autumn:
                 [
                   "https://live.staticflickr.com/7898/33248389928_f99e8bc440_b.jpg",
                   "https://images.r.cruisecritic.com/features/2016/05/meuse-tips.jpg",
                   "https://www.annevoie.be/wp-content/uploads/2019/09/HD-Fichter.jpg",
                 ],
               },

      winter: " Visit the Christmas Market, See Maison Leffe, Tour the Citadel of Dinant",
      summer: "Try the Boat Tours, Take the Water Taxi, Stroll along the Charles De Gaulle Bridge, Visit Castle Veves",
      spring: "Citadel of Dinant, Dinant Adventure, Parc de Furfooz",
      autumn: "Explore Notre Dame de Dinant, Take a drive along river Meuse, Day trip to Les Jardins d'Annevoie",
      url: "https://live.staticflickr.com/3682/9316877516_19d337932b_b.jpg"
    }
  ];
  
  export default cities;