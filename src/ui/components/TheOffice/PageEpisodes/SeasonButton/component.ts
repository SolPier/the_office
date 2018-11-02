import Component, { tracked } from '@glimmer/component'

export default class SeasonButton extends Component {
  @tracked
  get isSelected() {
    return this.args.number == this.args.selectedSeason
  }
}
