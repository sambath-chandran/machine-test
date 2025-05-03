import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../services/CountriesServices";
import Skeleton from "react-loading-skeleton";

function ContriesList() {
  const dispatch = useDispatch();
  const { countriesList, countriesLoading } = useSelector(
    (state) => state.countries
  );
  const itemsPerPage = 12;
  const [visibleCountries, setVisibleCountries] = useState(itemsPerPage);

  const fetchData = useCallback(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCountries((prev) => prev + itemsPerPage);
  };

  return (
    <section className="countries_list_sec">
      <div className="container">
        <div className="row">
          {!countriesLoading ? (
            countriesList &&
            countriesList.length != 0 &&
            countriesList.slice(0, visibleCountries).map((item, index) => {
              return (
                <div className=" col-lg-6 col-md-6 col-sm-12" key={index}>
                  <div className="country_card">
                    <div className="country_flag">
                      <img src={item?.flag} alt="flag" />
                    </div>
                    <div className="country_info">
                      <h3>{item?.name ?? "N/A"}</h3>
                      <p>{item?.region ?? "N/A"}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                  <Skeleton width={"100%"} height={100} key={index} />
                </div>
              ))}
            </>
          )}
        </div>
        <button
          type="button"
          className="load_more_btn"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </section>
  );
}

export default ContriesList;
