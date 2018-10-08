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
          { number: 1,  name: "The Dundies",                    videoUrl: 'https://openload.co/embed/qAdOk03kJNI/S02E01.mkv.mp4' },
          { number: 2,  name: "Sexual Harassment",              videoUrl: 'https://openload.co/embed/ACbw_0mObzo/S02E02.mkv.mp4' },
          { number: 3,  name: "Office Olympics",                videoUrl: 'https://openload.co/embed/wA_jgjGOejA/S02E03.mkv.mp4' },
          { number: 4,  name: "The Fire",                       videoUrl: 'https://streamango.com/embed/oqbkkoeedmtfcssq'        },
          { number: 5,  name: "Halloween",                      videoUrl: 'https://streamango.com/embed/rdaactqdanksecsm'        },
          { number: 6,  name: "The Fight",                      videoUrl: 'https://streamango.com/embed/abnmlrspsoasffst'        },
          { number: 7,  name: "The Client",                     videoUrl: 'https://streamango.com/embed/abpqarkokbfdcpco'        },
          { number: 8,  name: "Performance Review",             videoUrl: 'https://openload.co/embed/aj6PNiYSnJw/S02E08.mkv.mp4' },
          { number: 9,  name: "E-mail Surveillance",            videoUrl: 'https://streamango.com/embed/bbkqtsfqprksldef'        },
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
      {
        number: 3,
        episodes: [
          { number: 1,       name: "Gay Witch Hunt",        videoUrl: 'https://streamango.com/embed/fdftetalpdkpbmso'           },
          { number: 2,       name: "The Convention",        videoUrl: 'https://streamango.com/embed/aldntelpksbctklb'           },
          { number: 3,       name: "The Coup",              videoUrl: 'https://streamango.com/embed/ftmssspetkmbsmsf'           },
          { number: 4,       name: "Grief Counseling",      videoUrl: 'https://streamango.com/embed/mertopscbcasapob'           },
          { number: 5,       name: "Initiation",            videoUrl: 'https://streamango.com/embed/matcksfmtollpqne'           },
          { number: 6,       name: "Diwali",                videoUrl: 'https://streamango.com/embed/aermqnfmotcqsala'           },
          { number: 7,       name: "Branch Closing",        videoUrl: 'https://streamango.com/embed/aqnrppqpranobatt'           },
          { number: 8,       name: "The Merger",            videoUrl: 'https://streamango.com/embed/kfmpktaafetlpdqn'           },
          { number: 9,       name: "The Convict",           videoUrl: 'https://streamango.com/embed/dopasbkqrkmncrfc'           },
          { number: '10-11', name: "A Benihana Christmas",  videoUrl: 'https://streamango.com/embed/bdalttanepalfnpk'           },
          { number: 12,      name: "Back from Vacation",    videoUrl: 'https://streamango.com/embed/lrpsebnlbeetmnsm'           },
          { number: 13,      name: "Traveling Salesmen",    videoUrl: 'https://openload.co/embed/a50dTka0dPw/S03E13.mkv.mp4'    },
          { number: 14,      name: "The Return",            videoUrl: 'https://openload.co/embed/NTc6uJxM-3U/S03E14.mkv.mp4'    },
          { number: 15,      name: "Ben Franklin",          videoUrl: 'https://streamango.com/embed/cflknbtdfrsnlctn'           },
          { number: 16,      name: "Phyllis' Wedding",      videoUrl: 'https://streamango.com/embed/mfendrktoebakbnp'           },
          { number: 17,      name: "Business School",       videoUrl: 'https://streamango.com/embed/nkmfnmqnecblqqdp'           },
          { number: 18,      name: "Cocktails",             videoUrl: 'https://streamango.com/embed/bosfcqlkmomfbson'           },
          { number: 19,      name: "The Negotiation",       videoUrl: 'https://streamango.com/embed/ncdmkeknkdrmsoen'           },
          { number: 20,      name: "Safety Training",       videoUrl: 'https://streamango.com/embed/nlecqpacnpmerorc'           },
          { number: 21,      name: "Product Recall",        videoUrl: 'https://openload.co/embed/cfd1WITbv6g/S03E21.mkv.mp4'    },
          { number: 22,      name: "Women's Appreciation",  videoUrl: 'https://openload.co/embed/BkDcke_35xg/S03E22.mkv.mp4'    },
          { number: 23,      name: "Beach Games",           videoUrl: 'https://openload.co/embed/ajK4F33luGI/S03E23.mkv.mp4'    },
          { number: '24-25', name: "The Job",               videoUrl: 'https://openload.co/embed/Hin2n2oP4D0/S03E24-25.mkv.mp4' }
        ]
      },
      {
        number: 4,
        episodes: [
          { number: '1-2',   name: "Fun Run",                 videoUrl: 'https://openload.co/embed/IqP9bi39EyE/S04E01-02.mkv.mp4' },
          { number: '3-4',   name: "Dunder Mifflin Infinity", videoUrl: 'https://openload.co/embed/t2nh9Vn9LaM/S04E03-04.mkv.mp4' },
          { number: '5-6',   name: "Launch Party",            videoUrl: 'https://openload.co/embed/9cZWAOCBfMw/S04E05-06.mkv.mp4' },
          { number: '7-8',   name: "Money",                   videoUrl: 'https://openload.co/embed/9PBiS1y8TkY/S04E07-08.mkv.mp4' },
          { number: 9,       name: "Local Ad",                videoUrl: 'https://openload.co/embed/2PO_IPBujEU/S04E09.mkv.mp4'    },
          { number: 10,      name: "Branch Wars",             videoUrl: 'https://openload.co/embed/DuzxsiVEGkU/S04E10.mkv.mp4'    },
          { number: 11,      name: "Survivor Man",            videoUrl: 'https://openload.co/embed/35ipStThoCg/S04E11.mkv.mp4'    },
          { number: 12,      name: "Deposition",              videoUrl: 'https://openload.co/embed/AF6hfZRJRjw/S04E12.mkv.mp4'    },
          { number: 13,      name: "Dinner Party",            videoUrl: 'https://openload.co/embed/OmdptWARKWI/S04E13.mkv.mp4'    },
          { number: 14,      name: "Chair Model",             videoUrl: 'https://openload.co/embed/y8HEyMYe3wE/S04E14.mkv.mp4'    },
          { number: 15,      name: "Night Out",               videoUrl: 'https://openload.co/embed/t2ER0tfEbf4/S04E15.mkv.mp4'    },
          { number: 16,      name: "Did I Stutter?",          videoUrl: 'https://openload.co/embed/ROXhq662to4/S04E16.mkv.mp4'    },
          { number: 17,      name: "Job Fair",                videoUrl: 'https://openload.co/embed/cadcPYKOKCU/S04E17.mkv.mp4'    },
          { number: '18-19', name: "Goodbye Toby",            videoUrl: 'https://openload.co/embed/nFzqNrwR_2M/S04E18-19.mkv.mp4' }
        ]
      },
      // {
      //   number: 5,
      //   episodes: [
      //     { number: '1-2',   name: "Weight Loss",                     videoUrl: 'https://openload.co/embed/r8j67tz7yPE/S05E01.mkv.mp4' },
      //     // { number: 3,       name: "Business Ethics",                 videoUrl: '' },
      //     // { number: 4,       name: "Baby Shower",                     videoUrl: '' },
      //     // { number: 5,       name: "Crime Aid",                       videoUrl: '' },
      //     // { number: 6,       name: "Employee Transfer",               videoUrl: '' },
      //     // { number: 7,       name: "Customer Survey",                 videoUrl: '' },
      //     // { number: 8,       name: "Business Trip",                   videoUrl: '' },
      //     // { number: 9,       name: "Frame Toby",                      videoUrl: '' },
      //     // { number: 10,      name: "The Surplus",                     videoUrl: '' },
      //     // { number: 11,      name: "Moroccan Christmas",              videoUrl: '' },
      //     // { number: 12,      name: "The Duel",                        videoUrl: '' },
      //     // { number: 13,      name: "Prince Family Paper",             videoUrl: '' },
      //     // { number: '14-15', name: "Stress Relief",                   videoUrl: '' },
      //     // { number: 16,      name: "Lecture Circuit (1)",             videoUrl: '' },
      //     // { number: 17,      name: "Lecture Circuit (2)",             videoUrl: '' },
      //     // { number: 18,      name: "Blood Drive",                     videoUrl: '' },
      //     // { number: 19,      name: "Golden Ticket",                   videoUrl: '' },
      //     // { number: 20,      name: "New Boss",                        videoUrl: '' },
      //     // { number: 21,      name: "Two Weeks",                       videoUrl: '' },
      //     // { number: 22,      name: "Dream Team",                      videoUrl: '' },
      //     // { number: 23,      name: "The Michael Scott Paper Company", videoUrl: '' },
      //     // { number: 24,      name: "Heavy Competition",               videoUrl: '' },
      //     // { number: 25,      name: "Broke",                           videoUrl: '' },
      //     // { number: 26,      name: "Casual FridaY",                   videoUrl: '' },
      //     // { number: 27,      name: "Cafe Disco",                      videoUrl: '' },
      //     // { number: 28,      name: "Company Picnic",                  videoUrl: '' }
      //   ]
      // },
      // {
      //   number: 6,
      //   episodes: [
      //     { number: , name: "", videoUrl: '' },
      //   ]
      // },
    ]
  }
});
