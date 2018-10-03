import Component, { tracked } from "sparkles-component"
import { guidFor } from '@ember/object/internals'
import { later } from '@ember/runloop'

export default class Episode extends Component {
  @tracked isExpanded = false
  @tracked hasCopiedLink = false
  subtitleInputId = `subtitle-s${this.args.seasonNumber}e${this.args.episode.number}`

  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded
  }

  copySubtitleLinkToClipboard() {
    let input = document.getElementById(this.subtitleInputId)
    input.select()
    document.execCommand("copy")
    this.hasCopiedLink = true
    later(this, function() {
      this.hasCopiedLink = false
    }, 1500)
  }
}
