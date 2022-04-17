import PopularDish from "../../ui/PopularDish";

/* eslint-disable jsx-a11y/anchor-is-valid */
function PopularDishes() {
  return (
    <section className="">
      <div className="container my-3 py-3">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3 className="fw-bold mb-4">Popular Dishes</h3>
            <div
              className="row flex-nowrap example"
              style={{ overflowX: "scroll" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <PopularDish key={index} item={item} />
              ))}

              <div className="col-8 col-md-6 col-lg-3 mx-2 mx-md-5">
                <div className="d-grid mt-5 pt-5 gap-2 col-12 mx-auto">
                  <a
                    className="btn border-0 py-2 rounded-pill bg-black text-white"
                    type="button"
                  >
                    See our restaurants
                  </a>
                </div>
                <div className="p text-center px-2 px-md-4 pt-2 text-capitalize">
                  <small>
                    Browse meals from over 100 restaurants in your city!
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDishes;
