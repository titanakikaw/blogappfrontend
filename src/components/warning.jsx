import React from 'react'
import { Alert } from 'antd'
const Warning = ({error}) => {
   return (
      <Alert message={error} type="warning" showIcon/>
   )
}

export default Warning