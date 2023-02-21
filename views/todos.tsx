import { useTarat } from 'tarat/connect'
import React, { useState } from 'react'

const Todos: React.FC<{ val: number }> = (props) => {

  return (
    <div>
      todos: {props.val}
    </div>
  )
}

export default Todos