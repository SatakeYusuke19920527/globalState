import React, {useContext, useEffect} from 'react'
import {Store} from '../store/index'
import { fetchGetData } from '../apis/index'
import {GET_DATA} from '../actions/index'

const PageA = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetData().then(res => {
      setGlobalState({
        type: GET_DATA,
        data: res.data
      })
    })
    // eslint-disable-next-line
  },[])
  console.log(globalState, 'globalState 確認')
  return (
    <h1>PageA</h1>
  )
}

export default PageA;