import React from 'react'
import * as cal from './Calculator'
function Calist() {
  return (
    <div>
        <ul>
            <li>+ {cal.add(20,5)}</li>
            <li>- {cal.sub(20,5)}</li>
            <li>* {cal.mul(20,5)}</li>
            <li>/ {cal.div(20,5)}</li>
        </ul>
    </div>
  )
}

export default Calist