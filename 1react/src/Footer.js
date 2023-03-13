import React from 'react'

const Footer = () => {
  const today = new Date();

  return (
    <Footer>
      <p>Copyright &copy;{today.getFullYear()}</p>
    </Footer>
  )
}

export default Footer