import Component, { tracked } from '@glimmer/component'

export default class EpisodeBlock extends Component {
  @tracked helpIsDisplayed = false

  toggleHelpPanel() {
    this.helpIsDisplayed = !this.helpIsDisplayed
  }
}
