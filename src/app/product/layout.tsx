import { ReactNode } from 'react'

type ProductLayoutProps = {
  children: ReactNode
  modal: ReactNode
}

const ProductLayout = ({children, modal}: ProductLayoutProps) => {
  return (
    <>
    {children}
    {modal}
    </>
  )
}

export default ProductLayout
