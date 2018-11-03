import Component, { tracked } from 'sparkles-component'

export default class CopyBox extends Component {
  @tracked hasCopiedLink = false

  currentUrl = window.location.origin

  @tracked('args')
  get subtitlesPath() {
    const e = this.args.episode
    const version = e.subtitlesVersion ? `-v${e.subtitlesVersion}` : ''
    return `${this.currentUrl}/subtitles/s${e.season}/e${e.number}${version}.srt`
  }

  @tracked('args')
  get UId() {
    return `subtitles-s${this.args.seasonNumber}e${this.args.episodeNumber}`
  }

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

  copySubtitlesLinkToClipboard() {
    document.getElementById(this.UId).select()
    document.execCommand("copy")
    this.deselectAll()

    this.hasCopiedLink = true
    setTimeout(() => {
      this.hasCopiedLink = false
    }, 1000)
  }
}
