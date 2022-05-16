import React from 'react'
import { hashicon } from '@emeraldpay/hashicon'
import type { Params, HasherType } from '@emeraldpay/hashicon'
import type { ImgHTMLAttributes } from 'react'

export interface Props {
  value: string
  size?: number
  hasher?: HasherType
  options?: Params
  style?: React.CSSProperties
  className?: string
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

const Hashicon: React.FC<Props> = (props) => {
  const generate = () => {
    let options = {}

    if (typeof options !== 'undefined') {
      options = { ...options, ...props.options }
    }

    if (typeof props.size === 'number') {
      options = { ...options, ...{ size: props.size } }
    }

    if (typeof props.hasher === 'string') {
      options = { ...options, ...{ hasher: props.hasher } }
    }

    const attributes: ImgHTMLAttributes<HTMLImageElement> = {
      src: hashicon(props.value.toLowerCase(), options).toDataURL(),
      alt: props.value
    }

    if (typeof props.size === 'number') {
      attributes.width = props.size
    }

    return attributes
  }

  return <img {...generate()} onClick={props.onClick} className={props.className} style={props.style} />
}

export default Hashicon
