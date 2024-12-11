import { Block } from '@/ui'
import CountUp from 'react-countup'

const CountersBlock = ({ counters }) => {
  return (
    <Block>
      <div className="flex justify-center gap-0 column md:flex-row">
        {counters.map(({ label, count }, i) => (
          <Counter key={i} label={label} count={count} />
        ))}
      </div>
    </Block>
  )
}

export default CountersBlock

const Counter = ({ count, label }) => (
  <div className="w-60 text-center md:border-r md:border-t-0 border-t border-white last:border-none">
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
