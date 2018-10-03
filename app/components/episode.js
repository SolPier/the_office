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

  deselectAll() {
    var element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ('selectionStart' in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur();
    }

    if (window.getSelection) { // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) { // IE <=8
      document.selection.empty();
    }
  }

  copySubtitleLinkToClipboard() {
    document.getElementById(this.subtitleInputId).select()
    document.execCommand("copy")
    this.deselectAll()

    this.hasCopiedLink = true
    later(this, function() {
      this.hasCopiedLink = false
    }, 1000)
  }
}
