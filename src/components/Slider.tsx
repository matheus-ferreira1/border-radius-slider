type BorderProps = {
   border: number;
   setBorder: React.Dispatch<React.SetStateAction<number>>;
}

export const Slider = (props: BorderProps) => {
   const { border, setBorder } = props

   return (
      <div>
         <input
            type="range"
            name="slider"
            className='slider'
            min={0}
            max={50}
            value={border}
            onChange={(event) => setBorder(Number(event.target.value))}
         />
      </div>
   )
}
