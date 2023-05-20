import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

export default function Input({ label, value, setValue, variant = 'outlined' }: any) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e: any) => setValue(e.target.value)}
        label={label}
        variant={variant}
        value={value}
      />
    </Box>
  )
}
