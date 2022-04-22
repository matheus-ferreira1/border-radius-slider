import React from 'react'

type BorderProps = {
   border: number;
}

export default function TextValue(props: BorderProps) {
   const { border } = props

   return (
      <>
         <h1>{border}%</h1>
      </>
   )
}
