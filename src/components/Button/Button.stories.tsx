import { Button, IButtonType } from "./Button"

export default {
  title: 'Button',
  component: Button,
}

export const ButtonDefault = ({children, className, onClick}: IButtonType) => <Button className={className} onClick={onClick}>{children}</Button>