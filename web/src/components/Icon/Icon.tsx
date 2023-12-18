import { iconName } from 'types/icon'

interface IconProps {
  size?: number
  id: iconName
  color?: string
}

const Icon = ({ size = 24, id, color = 'black' }: IconProps) => (
  <svg width={size} height={size} fill={color}>
    <use href={`/icons/sprite.svg#${id}`} />
  </svg>
)

export default Icon
