import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        number: 1,
        episodes: [
          { number: 1, name: "Pilot",         videoUrl: 'https://openload.co/embed/T408kM6sBXI/S01E01.mkv.mp4' },
          { number: 2, name: "Diversity Day", videoUrl: 'https://openload.co/embed/ISL0gtAPQ1M/S01E02.mkv.mp4' },
          { number: 3, name: "Health Care",   videoUrl: 'https://openload.co/embed/Ydt4Qg5H3UU/S01E03.mkv.mp4' },
          { number: 4, name: "The Alliance",  videoUrl: 'https://openload.co/embed/kwkIv8YUjdQ/S01E04.mkv.mp4' },
          { number: 5, name: "Basketball",    videoUrl: 'https://openload.co/embed/8lywYS6XRz0/S01E05.mkv.mp4' },
          { number: 6, name: "Hot Girl",      videoUrl: 'https://streamango.com/embed/bfbplkammmbdleof'        }
        ]
      },
      {
        number: 2,
        episodes: [
          { number: 1, name: "The Dundies",                     videoUrl: 'https://openload.co/embed/qAdOk03kJNI/S02E01.mkv.mp4' },
          { number: 2, name: "Sexual Harassment",               videoUrl: 'https://openload.co/embed/ACbw_0mObzo/S02E02.mkv.mp4' },
          { number: 3, name: "Office Olympics",                 videoUrl: 'https://openload.co/embed/wA_jgjGOejA/S02E03.mkv.mp4' },
          { number: 4, name: "The Fire",                        videoUrl: 'https://streamango.com/embed/oqbkkoeedmtfcssq'        },
          { number: 5, name: "Halloween",                       videoUrl: 'https://streamango.com/embed/rdaactqdanksecsm'        },
          { number: 6, name: "The Fight",                       videoUrl: 'https://streamango.com/embed/abnmlrspsoasffst'        },
          { number: 7, name: "The Client",                      videoUrl: 'https://streamango.com/embed/abpqarkokbfdcpco'        },
          { number: 8, name: "Performance Review",              videoUrl: 'https://openload.co/embed/aj6PNiYSnJw/S02E08.mkv.mp4' },
          { number: 9, name: "E-mail Surveillance",             videoUrl: 'https://streamango.com/embed/bbkqtsfqprksldef'        },
          { number: 10, name: "Christmas Party",                videoUrl: 'https://streamango.com/embed/netmmfbrkbqlmldt'        },
          // { number: 11, name: "Booze Cruise",                   videoUrl: '' },
          // { number: 12, name: "The Injury",                     videoUrl: '' },
          // { number: 13, name: "The Secret",                     videoUrl: '' },
          // { number: 14, name: "The Carpet",                     videoUrl: '' },
          // { number: 15, name: "Boys and Girls",                 videoUrl: '' },
          // { number: 16, name: "Valentine's Day",                videoUrl: '' },
          // { number: 17, name: "Dwight's Speech",                videoUrl: '' },
          // { number: 18, name: "Take Your Daughter to Work Day", videoUrl: '' },
          // { number: 19, name: "Michael's Birthday",             videoUrl: '' },
          // { number: 20, name: "Drug Testing",                   videoUrl: '' },
          // { number: 21, name: "Conflict Resolution",            videoUrl: '' },
          // { number: 22, name: "Casino Night",                   videoUrl: '' }
        ]
      },
      // {
      //   number: 3,
      //   episodes: [
      //     { number: 1, name: 'Gay Witch Hunt ', videoUrl: 'https://openload.co/embed/BFvO5w7oSG8/S03E01.mkv.mp4' },
      //     { number: 2, name: 'The Convention ', videoUrl: 'https://openload.co/embed/KDRq_8Pcsl4/S03E02.mkv.mp4' },
      //     { number: , name: '', videoUrl: '' },
      //   ]
      // }
    ]
  }
});
