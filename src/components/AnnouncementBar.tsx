import ticketPercentLogo from "../assets/img/ticket-percent.svg";

const AnnouncementBar = () => {
  return (
    <div className="flex items-center justify-center gap-3 bg-neutral-2 py-2 text-neutral-5">
      <img src={ticketPercentLogo} alt="" />
      <span className="text-[14px] font-medium">
        <p>30% off storewide - Limited time!{""}</p>
      </span>
      <span className="border-b-2 border-secondary-blue text-[14px] font-medium text-secondary-blue">
        <a href="./">Shop Now &#10141;</a>
      </span>
    </div>
  );
};

export default AnnouncementBar;
