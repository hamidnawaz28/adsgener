import Browser from 'webextension-polyfill'
import { ADS } from '../common/messaging'
import { createNewCampaign } from '../common/utils'

Browser.runtime.onMessage.addListener(async (request, tabInfo) => {
  const { action, data } = request
  const { tab } = tabInfo
  const tabId = tab?.id || 0

  const responseObj = {
    [ADS.GENERATE]: async () => {
      const { title } = data
      const campaignId = await createNewCampaign(title)
      return campaignId
    },
  }

  const response = await responseObj[action]()

  return response
})
