import React from 'react'
import Katagoriy from "./components/MainSection/Katagoriy"
import Kabinetov from "./components/MainSection/Kabinetov"
import Vibirayut from './components/MainSection/Vibirayut'
import Tovar from './components/MainSection/Tovar'

const Katalog = () => {
  return (
    <>
    <Katagoriy/>
    <Kabinetov/>
    <Vibirayut/>
    <Tovar/>
    </>
  )
}

export default Katalog