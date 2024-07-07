import React from 'react'
import Katagoriy from "../components/MainSection/Katagoriy/Katagoriy"
import Kabinet from "../components/MainSection/Kabinet/Kabinet"
import Vibirayut from '../components/MainSection/Vibirayut/Vibirayut'
import Tovar from '../components/MainSection/Tovar/Tovar'

const Katalog = () => {
  return (
    <>
    <Katagoriy/>
    <Kabinet/>
    <Vibirayut/>
    <Tovar/>
    </>
  )
}

export default Katalog