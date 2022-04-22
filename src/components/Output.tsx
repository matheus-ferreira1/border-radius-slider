import React from 'react'

type BorderProps = {
   border: number;
}

export default function Output(props: BorderProps) {
   const { border } = props;
   let text = border + '%'

   return (
      <div className='output' style={{ borderRadius: text }}>
         Output
      </div>
   )
}
