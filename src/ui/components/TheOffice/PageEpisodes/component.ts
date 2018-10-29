import SeasonsData from './seasonsData.js'
import Component, { tracked } from '@glimmer/component'

export default class PageEpisodes extends Component {
  seasons = SeasonsData
  seasonsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  @tracked selectedSeason = 1
  @tracked selectedEpisodes = []

  @tracked
  get episodes() {
    return this.seasons[this.selectedSeason - 1].episodes
  }

  @tracked
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
        .concat([episode]) // check spread operator
        .sort((e1, e2) => {
          return (e1.id < e2.id ? -1 : 1)
        })
    }
  }
}
