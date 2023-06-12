import IconStar from "@/images/components/icon-star"

const ReviewStar = ({review}) => {
  return (
    <div className="flex justify-around items-center bg-Light-Grayish-Magenta rounded-md my-3 w-3/4 h-14">
      {/* Star */}
      <div>
        <ul className="inline-flex pt-1">
          <li><IconStar /></li>
          <li><IconStar /></li>
          <li><IconStar /></li>
          <li><IconStar /></li>
          <li><IconStar /></li>
        </ul>
      </div>
      
      <div className="font-bold">{review}</div>
    </div>
  )
}

const Card = ({profile, name, paragraph}) => {
  return (
    <div className="flex-col p-5 text-neutral-white bg-p-Very-Dark-Magenta h-48 rounded-md">
      <div className="flex mb-4">
        {/* icon */}
        <div className="mr-14">
          Icons
        </div>
        {/* name and statust */}
        <div>
          <div>{name}</div>
          <div className="text-primary-SoftPink">Verified Buyer</div>
        </div>
      </div>
      <div>{paragraph}</div>
    </div>
  )
}

export default function Rated() {
    return (
      <div className="text-p-Very-Dark-Magenta h-container w-5/6">
        <div className="flex h-1/2">
          {/* Left box */}
          <div className="w-1/2">
            <div className="font-bold text-5xl mb-6">
              <p className="break-normal">10,000+ of our</p>
              users love our
              <p className="break-normal">products.</p>
            </div>
            <div className="text-Dark-Grayish-Magenta font-semibold">
              {/* <p className="break-normal"></p> */}
              <p className="break-normal ">We only provide great products combined with excellent</p>
              <p className="break-normal">customer service. See what our satisfied customers are</p>
              saying about our services.
            </div>
          </div>
          {/* Right box */}
          <div className="w-1/2 pt-8">
            <div className=""><ReviewStar review={"Rated 5 Stars in Reviews"}/></div>
            <div className="flex justify-center"><ReviewStar review={"Rated 5 Stars in Report Guru"}/></div>
            <div className="flex justify-end"><ReviewStar review={"Rated 5 Stars in BestTech"}/></div>
          </div>
        </div>

        <div className="flex w-full h-1/2 pt-8">
          <div className="self-start w-1/3 mr-4">
            <Card profile={""} name={"Colton Smith"} paragraph={'"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'}/>
          </div>
          <div className="self-center w-1/3 mx-4">
            <Card profile={""} name={"Irene Roberts"} paragraph={'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'}/>
          </div>
          <div className="self-end w-1/3 ml-4">
            <Card profile={""} name={"Anne Wallace"} paragraph={'"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'}/>
          </div>
        </div>

      </div>
    )
  }
  