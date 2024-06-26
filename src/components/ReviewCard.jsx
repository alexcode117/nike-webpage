import Proptypes from "prop-types";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
            src={imgURL}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px] ease-in-out duration-500 cursor-pointer hover:scale-110"    
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img
                src={star}
                alt="star"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <div className="text-xl font-montserrat text-slate-gray">{rating}</div>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
};

export default ReviewCard;

ReviewCard.propTypes = {
    imgURL: Proptypes.string,
    customerName: Proptypes.string,
    rating: Proptypes.string,
    feedback: Proptypes.string,
};