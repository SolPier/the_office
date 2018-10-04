import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        number: 1,
        episodes: [
          { number: 1, name: 'Pilot',         videoUrl: 'https://openload.co/embed/T408kM6sBXI/S01E01.mkv.mp4' },
          { number: 2, name: 'Diversity Day', videoUrl: 'https://openload.co/embed/ISL0gtAPQ1M/S01E02.mkv.mp4' },
          { number: 3, name: 'Health Care',   videoUrl: 'https://openload.co/embed/Ydt4Qg5H3UU/S01E03.mkv.mp4' },
          { number: 4, name: 'The Alliance',  videoUrl: 'https://openload.co/embed/kwkIv8YUjdQ/S01E04.mkv.mp4' },
          { number: 5, name: 'Basketball',    videoUrl: 'https://openload.co/embed/8lywYS6XRz0/S01E05.mkv.mp4' },
          { number: 6, name: 'Hot Girl',      videoUrl: 'https://openload.co/embed/_bBcX35_23A/S01E06.mkv.mp4' }
        ]
      },
      {
        number: 2,
        episodes: [
          { number: 1, name: 'The Dundies',        videoUrl: 'https://openload.co/embed/qAdOk03kJNI/S02E01.mkv.mp4' },
          { number: 2, name: 'Sexual Harassment ', videoUrl: 'https://openload.co/embed/ACbw_0mObzo/S02E02.mkv.mp4' },
          { number: 3, name: 'Office Olympics ',   videoUrl: 'https://openload.co/embed/wA_jgjGOejA/S02E03.mkv.mp4' }
        ]
      },
      // {
      //   number: 3,
      //   episodes: [
      //     { number: 1, name: 'Gay Witch Hunt ', videoUrl: 'https://openload.co/embed/BFvO5w7oSG8/S03E01.mkv.mp4' },
      //     { number: 2, name: 'The Convention ', videoUrl: 'https://openload.co/embed/KDRq_8Pcsl4/S03E02.mkv.mp4' }
      //   ]
      // }
    ]
  }
});
