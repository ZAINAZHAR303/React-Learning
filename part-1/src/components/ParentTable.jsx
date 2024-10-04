import React from 'react'
import ChildTable from './ChildTable'
import ChildData from './ChildData'

function ParentTable() {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <ChildTable />
            </tr>
        </thead>
        <tr>
            <ChildData />
        </tr>
      </table>
    </div>
  )
}

export default ParentTable
