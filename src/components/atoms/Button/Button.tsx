import { colors } from '@/styles/colors'
import { Button as MButton } from '@mui/material'

type ButtonProps = {
  onClick?: () => void
  variant?: 'contained' | 'outlined'
  children?: string
  width?: string
  containedTextColor?: string
  color?: string
  fontSize?: number
  fontWeight?: number
  startIcon?: React.ReactElement
  disabled?: boolean
  type?: 'button' | 'submit'
}

export const Button = ({
  children,
  width = '100%',
  color = colors.background.add,
  containedTextColor = colors.primary.contrast,
  fontSize,
  fontWeight,
  onClick,
  startIcon,
  disabled,
  type = 'button',
  variant = 'outlined',
}: ButtonProps) => {
  return (
    <MButton
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      disabled={disabled}
      type={type}
      sx={{
        width: width,
        fontWeight: fontWeight,
        borderColor: color,
        WebkitTextFillColor:
          variant === 'outlined' ? color : containedTextColor,
        fontSize: fontSize,
        textTransform: 'none',
        borderStyle: startIcon ? 'dashed' : 'solid',
        backgroundColor: variant === 'outlined' ? 'none' : color,
        '&:hover': {
          backgroundColor: variant === 'outlined' ? 'none' : color,
          opacity: '0.8',
        },
      }}
    >
      {children}
    </MButton>
  )
}
