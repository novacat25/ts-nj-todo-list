import React from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  size: number
  axis?: 'vertical' | 'horizontal'
}

export const Spacer = ({
  size,
  axis = 'vertical',
  style = {},
  ...others
}: Props) => {
  const width = axis === 'vertical' ? 1 : size
  const height = axis === 'horizontal' ? 1 : size

  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...others}
    />
  )
}
