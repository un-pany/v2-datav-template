import defaultSettings from '@/settings'

const title = defaultSettings.title || 'v2-datav-template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
