import Component, { tracked } from 'sparkles-component'

export default class EpisodeBlock extends Component {
  @tracked helpIsDisplayed = false

  toggleHelpPanel() {
    this.helpIsDisplayed = !this.helpIsDisplayed
  }
}
