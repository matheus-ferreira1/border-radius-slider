import { ChangeEvent } from 'react';

type BorderProps = {
   border: number;
   setBorder: React.Dispatch<React.SetStateAction<number>>;
   handleChange: any;
}

export const Slider = (props: BorderProps) => {
   const { border, setBorder, handleChange } = props

   return (
      <div>
         <input
            type="range"
            name="slider"
            className='slider'
            min={0}
            max={50}
            value={border}
            // onChange={(event) => setBorder(Number(event.target.value))}
            onChange={(event) => handleChange(event)}
         />
      </div>
   )
}
