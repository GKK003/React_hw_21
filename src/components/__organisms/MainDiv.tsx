import { useEffect, useMemo, useState } from "react";
import HeaderImg from "../../../public/images/headerimg.png";
import Data from "../../Data.json";
import WhiteDiv from "../__molecules/WhiteDiv";

function MainDiv() {
  const [filters, setFilters] = useState<string[]>(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : [];
  });

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  function addFilter(tag: string) {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  }

  function removeFilter(tag: string) {
    setFilters(filters.filter((item) => item !== tag));
  }

  function clearFilters() {
    setFilters([]);
  }

  const filteredData = useMemo(() => {
    if (filters.length === 0) return Data;

    return Data.filter((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every((filter) => tags.includes(filter));
    });
  }, [filters]);

  return (
    <div className="relative">
      <img className="w-full h-[156px] " src={HeaderImg} alt="headerimg" />

      {filters.length > 0 && (
        <div className="mx-auto -mt-8 flex w-[80%] items-center justify-between rounded-md bg-white px-8 py-5 shadow-[0px_15px_20px_-5px_rgba(13,113,130,0.15)] absolute top-[120px] left-[10%] ">
          <div className="flex flex-wrap gap-4">
            {filters.map((el, key) => (
              <div key={key} className="flex overflow-hidden rounded-md">
                <span className="bg-[#EEF6F6] px-3 py-2 font-bold text-[#5CA5A5]">
                  {el}
                </span>
                <button
                  onClick={() => removeFilter(el)}
                  className="bg-[#5CA5A5] px-3 text-white transition hover:bg-[#2c3a3a]"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={clearFilters}
            className="font-bold text-[#5CA5A5] underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="flex flex-col items-center gap-5 py-12 lg:mt-20 sm:mt-25 gg:mt-60 ">
        {filteredData.map((el, key) => (
          <WhiteDiv
            key={key}
            img={el.logo}
            company={el.company}
            new={el.new}
            feat={el.featured}
            position={el.position}
            posted={el.postedAt}
            contract={el.contract}
            location={el.location}
            role={el.role}
            level={el.level}
            lang={el.languages}
            tools={el.tools}
            Filtered={addFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default MainDiv;
