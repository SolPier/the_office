import SeasonsData from './seasonsData.js'
import Component, { tracked } from '@glimmer/component'

export default class PageEpisodes extends Component {
  seasons = SeasonsData
  @tracked selectedSeason = 1

  @tracked
  get episodes() {
    return this.seasons[this.selectedSeason - 1].episodes
  }

  selectEpisode(number) {
    this.selectedSeason = number
  }
}
