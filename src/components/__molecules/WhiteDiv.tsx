type WhiteDivProps = {
  img: string;
  company: string;
  new?: boolean;
  feat?: boolean;
  position: string;
  posted: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  lang: string[];
  tools: string[];
  Filtered: (tag: string) => any;
};

function WhiteDiv(props: WhiteDivProps) {
  const allTags = [props.role, props.level, ...props.lang, ...props.tools];

  return (
    <div
      className={`flex w-[80%] items-center justify-between rounded-md bg-white px-10 py-8 shadow-[0px_15px_20px_-5px_rgba(13,113,130,0.15)] lg:flex-col lg:items-start lg:gap-6 lg:px-6 ${
        props.new && props.feat ? "border-l-[5px] border-l-[#5CA5A5]" : ""
      }`}
    >
      <div className="flex items-center gap-6 lg:w-full lg:flex-col lg:items-start lg:gap-4">
        <img src={props.img} alt={props.company} className="h-16 w-16" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 lg:flex-wrap">
            <p className="font-bold text-[#5CA5A5]">{props.company}</p>

            {props.new && (
              <p className="rounded-full bg-[#5CA5A5] px-2 py-1 text-xs font-bold text-white">
                NEW!
              </p>
            )}

            {props.feat && (
              <p className="rounded-full bg-[#2B3939] px-2 py-1 text-xs font-bold text-white">
                FEATURED
              </p>
            )}
          </div>

          <p className="text-lg font-bold text-[#2B3939]">{props.position}</p>

          <div className="flex items-center gap-3 text-gray-500 lg:flex-wrap">
            <p className="text-[#7C8F8F]">{props.posted}</p>
            <span className="text-[#B7C4C4]">•</span>
            <p className="text-[#7C8F8F]">{props.contract}</p>
            <span className="text-[#B7C4C4]">•</span>
            <p className="text-[#7C8F8F]">{props.location}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 lg:w-full lg:border-t lg:border-[#eef6f6] lg:pt-4">
        {allTags.map((tag, key) => (
          <button
            key={key}
            onClick={() => props.Filtered(tag)}
            className="rounded-md bg-[#EEF6F6] px-3 py-2 font-bold text-[#5CA5A5] transition hover:bg-[#5CA5A5] hover:text-white cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WhiteDiv;
