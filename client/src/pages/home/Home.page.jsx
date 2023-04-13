import React from "react"

import Styles from "./Home.module.scss"

const HomePage = () => {
  return (
    <div className={`center grow-full`}>
      <h1 className={`${Styles.home__title}`}>Hello World</h1>
    </div>
  )
}

export default HomePage
