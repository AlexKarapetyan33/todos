import { useRequest } from "../customHooks/useRequest"
import { useEffect } from "react"

export const App = () => {

  const {getRequest} = useRequest()

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <>
      
    </>
  )
}
