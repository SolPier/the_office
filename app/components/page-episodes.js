import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import SeasonsData from '../utils/seasons-data'

export default class PageEpisodesComponent extends Component {
  seasonsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  seasons = SeasonsData

  @tracked selectedSeason = 1
  @tracked selectedEpisodes = []

  get displayedEpisodes() {
    return this.seasons[this.selectedSeason - 1].episodes
  }

  get selectedEpisodesCount() {
    return this.selectedEpisodes.length
  }

  @action selectSeason(number) {
    this.selectedSeason = number
  }

  @action toggleEpisode(episode) {
    if (this.selectedEpisodes.indexOf(episode) >= 0) {
      this.selectedEpisodes = this.selectedEpisodes.filter(activeEpisode => {
        return activeEpisode !== episode
      })
      episode.declareEpisodeAsUnselected()
    } else {
      this.selectedEpisodes = this.selectedEpisodes
        .concat([episode])
        .sort((e1, e2) => {
          return (e1.id < e2.id ? -1 : 1)
        })
      episode.declareEpisodeAsSelected()
    }
  }
}
