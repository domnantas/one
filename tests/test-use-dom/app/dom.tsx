'use dom'

import { DomComponent } from '~/src/DomComponent'

export default function DomPage() {
  return (
    <div
      style={{
        background: 'red',
      }}
    >
      hello world
      <DomComponent />
    </div>
  )
}
