import RawSeasonsData from './raw-seasons-data';
import Episode from './episode';

let id = 0

export default RawSeasonsData.map((s) => {
  return {
    season: s.number,
    episodes: s.episodes.map((e) => {
      return Episode.create({
        season: s.number,
        number: e.number,
        id: (id++),
        name: e.name,
        videoUrl: e.videoUrl,
        subtitlesVersion: e.subtitlesVersion,
      })
    })
  }
})
