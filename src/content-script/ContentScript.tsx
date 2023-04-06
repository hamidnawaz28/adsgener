import { Box } from '@mui/material'
import { useState } from 'react'
import { DialogContainer } from './components'

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
      <Box>AdsGener</Box>
    </DialogContainer>
  )
}
export default ContentScript
