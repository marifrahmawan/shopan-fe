interface IArticles {
  id: number;
  imageArticle: string;
  titleArticle: string;
}

const CardArticle = ({ id, imageArticle, titleArticle }: IArticles) => {
  return (
    <div className="col-auto h-[420px] w-full">
      <div className="h-[325px] w-full">
        <img
          src={imageArticle}
          alt="article 1"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mb-3 mt-6 text-[20px] font-medium">{titleArticle}</p>
      <a href={`./${id}`} className="border-b border-neutral-7 font-medium ">
        Read More &#10141;
      </a>
    </div>
  );
};

export default CardArticle;
