import Image from 'next/image'
import Img from '../images/mnimum1.png'
import { minimumLiving } from '@/data'

const LivingCost = () => {
  return (
    <section className="w-w80 mx-auto flex flex-col items-start gap-8 mt-24">
      <h3 className="text-2xl capitalize font-bold">
        minimum living cost takes care of everything
      </h3>
      {/*  */}
      <div className="">
        <div className="">
          <Image src={Img} />
        </div>
        <div className="">
          {minimumLiving.map((item, idx) => {
            const { icons, text } = item
            return (
              <article key={idx}>
                <span>{icons}</span>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LivingCost
