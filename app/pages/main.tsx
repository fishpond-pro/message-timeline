import React, { useState } from 'react'

import Todos from '../../views/todos'

export default function Main () {

  const [s1, setS1] = useState(0)

  return (<div>
    <Todos val={s1 * 10} />
    <p>{s1}</p>
  </div>)
}