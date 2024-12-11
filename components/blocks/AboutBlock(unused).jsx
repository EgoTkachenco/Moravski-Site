import { Block, BlockColumn, BlockTitle } from '@/ui'

const AboutBlock = () => {
  return (
    <Block>
      <video
        src="/video.mov"
        autoPlay
        loop
        muted
        className="w-full absolute top-0 left-0 h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <BlockColumn className="relative p-8 bg-[rgba(0,0,0,0.5)]">
        <BlockTitle>Про нас</BlockTitle>
        <div>
          Камерний хор «Moravski» названо на честь видатного українського
          хорового диригента та педагога Павла Муравського (1914-2014). <br />
          <br /> Щоб відновити історичну справедливість, колектив обрав назву
          «Moravski», адже справжнє прізвище Павла Івановича – Моравський.
          Камерний хор «Moravski» названо на честь видатного українського
          хорового диригента та педагога Павла Муравського (1914-2014). <br />
          <br />
          Щоб відновити історичну справедливість, колектив обрав назву
          «Moravski», адже справжнє прізвище Павла Івановича – Моравський.
        </div>
      </BlockColumn>
    </Block>
  )
}

export default AboutBlock
