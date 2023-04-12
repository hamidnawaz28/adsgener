import { ContentCopy as ContentCopyIcon } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const TextArea = ({ label, text }: any) => {
  const copyHandle = () => {
    navigator.clipboard.writeText(text)
  }
  return (
    <Box>
      <Typography variant="subtitle2">{label}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography color="text.secondary" variant="body2" gutterBottom>
          {text}
        </Typography>

        <ContentCopyIcon
          onClick={copyHandle}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
      </Box>
    </Box>
  )
}
export default TextArea
