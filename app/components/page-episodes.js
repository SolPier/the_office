import Component, { tracked } from 'sparkles-component'
import SeasonsData from '../utils/seasons-data'

export default class TextPage extends Component {
  seasons = SeasonsData
  seasonsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  @tracked selectedSeason = 1
  @tracked selectedEpisodes = []

  @tracked('selectedSeason')
  get episodes() {
    return this.seasons[this.selectedSeason - 1].episodes
  }

  @tracked('selectedEpisodes')
  get selectedEpisodesCount() {
    return this.selectedEpisodes.length
  }

  selectSeason(number) {
    this.selectedSeason = number
  }

  toggleEpisode(episode) {
    if (this.selectedEpisodes.indexOf(episode) >= 0) {
      this.selectedEpisodes = this.selectedEpisodes.filter(activeEpisode => {
        return activeEpisode !== episode
      })
    } else {
      this.selectedEpisodes = this.selectedEpisodes
        .concat([episode])
        .sort((e1, e2) => {
          return (e1.id < e2.id ? -1 : 1)
        })
    }
  }
}
