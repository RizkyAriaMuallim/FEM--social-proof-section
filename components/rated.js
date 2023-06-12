const ReviewStar = ({title}) => {
  return (
    <div className="bg-Light-Grayish-Magenta rounded-md my-1">
      {title}
    </div>
  )
}

const Card = ({profile, name, paragraph}) => {
  return (
    <div className="text-neutral-white bg-p-Very-Dark-Magenta h-40 w-1/3 border border-red-500">
      {name}
      {paragraph}
    </div>
  )
}

export default function Rated() {
    return (
      <div className="border-2 border-sky-500 text-p-Very-Dark-Magenta h-container w-5/6">
        <div className="flex h-1/2">
          {/* Left box */}
          <div className="w-1/2">
            <div>10,000+ of our users love our products.</div>
            <div>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</div>
          </div>
          {/* Right box */}
          <div className="w-1/2">
            <ReviewStar title={"Rated 5 Stars in Reviews"}/>
            <ReviewStar title={"Rated 5 Stars in Report Guru"}/>
            <ReviewStar title={"Rated 5 Stars in BestTech"}/>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <Card profile={""} name={"Colton Smith"} paragraph={"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"}/>
          <Card profile={""} name={"Irene Roberts"} paragraph={"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."}/>
          <Card profile={""} name={"Anne Wallace"} paragraph={"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"}/>
        </div>
      </div>
    )
  }
  