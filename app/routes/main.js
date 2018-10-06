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
          { number: 11, name: "Booze Cruise",                   videoUrl: 'https://openload.co/embed/IhxUZ15-xN0/S02E11.mkv.mp4' },
          { number: 12, name: "The Injury",                     videoUrl: 'https://streamango.com/embed/lapnqmcdfptqnlka'        },
          { number: 13, name: "The Secret",                     videoUrl: 'https://streamango.com/embed/rsankkrdksfnqbrn'        },
          { number: 14, name: "The Carpet",                     videoUrl: 'https://streamango.com/embed/ebtrttreckppenqq'        },
          { number: 15, name: "Boys and Girls",                 videoUrl: 'https://streamango.com/embed/obkrsanlfncaplbo'        },
          { number: 16, name: "Valentine's Day",                videoUrl: 'https://openload.co/embed/8e99BLR3vPU/S02E16.mkv.mp4' },
          { number: 17, name: "Dwight's Speech",                videoUrl: 'https://streamango.com/embed/canpnbdokltlmpkl'        },
          { number: 18, name: "Take Your Daughter to Work Day", videoUrl: 'https://openload.co/embed/VG_9teQK2nY/S02E18.mkv.mp4' },
          { number: 19, name: "Michael's Birthday",             videoUrl: 'https://openload.co/embed/N0OOW8YJ9ik/S02E19.mkv.mp4' },
          { number: 20, name: "Drug Testing",                   videoUrl: 'https://streamango.com/embed/olosessbktefoonp'        },
          { number: 21, name: "Conflict Resolution",            videoUrl: 'https://streamango.com/embed/lmrplqmfdntlaaln'        },
          { number: 22, name: "Casino Night",                   videoUrl: 'https://openload.co/embed/bVwmPYDFadc/S02E22.mkv.mp4' }
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
