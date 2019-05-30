import Component from '@glimmer/component'

export default class SeasonButton extends Component {
  get isSelected() {
    return this.args.number == this.args.selectedSeason
  }
}
