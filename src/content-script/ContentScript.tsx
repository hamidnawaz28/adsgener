import { useState } from 'react'
import { CompanyCardContainer, DialogContainer } from './components'
const ContentScript = () => {
  const [expanded, setExpanded] = useState(true)
  const [loading, setLoading] = useState(false)

  return (
    <DialogContainer
      expanded={expanded}
      setExpanded={setExpanded}
      loading={loading}
      setLoading={setLoading}
    >
      {/* <Box>AdsGener</Box> */}
      <CompanyCardContainer />
    </DialogContainer>
  )
}
export default ContentScript
