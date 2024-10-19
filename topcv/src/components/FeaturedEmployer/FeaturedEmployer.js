import React from 'react'

const FeaturedEmployer = () => {
  return (
    <>
      <div id="diamond-employer" data-lazy-function="initDiamondEmployer" data-ll-status="entered" class="diamond-employer lazy entered">
        <div class="container mx-auto">
          <div>
            <div class="diamond-employer__header">
              <h2 class="diamond-employer__title">Nhà tuyển dụng nổi bật</h2>
            </div>
            <div id="diamond-employer-slider" class="diamond-employer__body owl-carousel owl-theme owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item cloned">
                    <a data-banner-name="banner_c1" href="#" target="_blank" title="TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI"
                      class="diamond-employer--box center-banner-item ta-banner">
                      <span class="icon--top">
                        <i class="fa-solid fa-gem"></i> TOP
                      </span>
                      <img data-src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/vnksUvAUJEzIxB7un4tTZrQ0cNWK6MAt_1719996933____3c701bdf079634d0e15cebed0655ae9d.png"
                        src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/vnksUvAUJEzIxB7un4tTZrQ0cNWK6MAt_1719996933____3c701bdf079634d0e15cebed0655ae9d.png"
                        title="TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI" alt="Logo" class="img-responsive lazy" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="owl-nav disabled">
                <button type="button" role="presentation" class="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" class="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div class="owl-dots disabled">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedEmployer