import Component, { tracked } from "sparkles-component"
import { later } from '@ember/runloop'

export default class CopyBox extends Component {
  @tracked hasCopiedLink = false

  subtitleUId = `subtitles-s${this.args.seasonNumber}e${this.args.episodeNumber}`
  currentUrl = window.location.href

  deselectAll() {
    let element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ('selectionStart' in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur()
    }

    if (window.getSelection) { // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) { // IE <=8
      document.selection.empty()
    }
  }

  copySubtitleLinkToClipboard() {
    document.getElementById(this.subtitleUId).select()
    document.execCommand("copy")
    this.deselectAll()

    this.hasCopiedLink = true
    later(this, function() {
      this.hasCopiedLink = false
    }, 1000)
  }
}
