import React from 'react';
import nookies from 'nookies'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';


export default function LogoutPage() {
  const router = useRouter()

  React.useEffect(() => {
    let flag = true
    if (flag) {
      nookies.destroy(null, 'USER_TOKEN')
      router.push('/')
    }
    return () => {
      flag = false
    }
  }, [])

  return (
    <>
      <div style={{ margin: "auto" }}>
        <CircularProgress/>
      </div>
    </>
  )
}