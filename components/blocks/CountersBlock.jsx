import { Block } from '@/ui'
import CountUp from 'react-countup'

const CountersBlock = ({ counters }) => {
  return (
    <Block>
      <div className="flex flex-col items-center justify-center gap-0 md:flex-row">
        {counters.map(({ label, count }, i) => (
          <Counter key={i} label={label} count={count} />
        ))}
      </div>
    </Block>
  )
}

export default CountersBlock

const Counter = ({ count, label }) => (
  <div className="py-8 text-center border-b border-white w-60 md:border-r md:border-b-0 last:border-none md:py-0">
    <CountUp
      start={count > 100 ? count - 100 : 0}
      end={count}
      duration={5}
      enableScrollSpy={true}
      scrollSpyDelay={100}
      suffix=" +"
    >
      {({ countUpRef }) => (
        <span className="text-5xl font-semibold" ref={countUpRef} />
      )}
    </CountUp>
    <div className="text-lg font-semibold">{label}</div>
  </div>
)
