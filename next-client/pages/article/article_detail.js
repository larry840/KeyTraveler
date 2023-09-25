import Link from 'next/link'
import React from 'react'

export default function ArticleDetail() {
  let data = [
    {
      title: 'interest title',
      img: 'https://www.inad.com.tw/data/news/cover/1694604979854924778.jpg',
      user: 'by.user_id',
    },
    {
      title: 'interest title',
      img: 'https://www.inad.com.tw/data/news/cover/1694604979854924778.jpg',
      user: 'by.user_id',
    },
    {
      title: 'interest title',
      img: 'https://www.inad.com.tw/data/news/cover/1694604979854924778.jpg',
      user: 'by.user_id',
    },
    {
      title: 'interest title',
      img: 'https://www.inad.com.tw/data/news/cover/1694604979854924778.jpg',
      user: 'by.user_id',
    },
    {
      title: 'interest title',
      img: 'https://www.inad.com.tw/data/news/cover/1694604979854924778.jpg',
      user: 'by.user_id',
    },
  ]

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          {/* 左側欄 */}
          <div className="col-8">
            <div className=" border border-5 border-primary position-relative">
              <i
                class="fa-regular fa-heart fa-2xl position-absolute "
                style={{ top: '20px', right: '10px' }}
              ></i>
              <h2 className="fw-bolder mt-4">資料庫DB-article-title</h2>
              <h5 className="text-secondary mb-5">by.user_id + 發佈時間</h5>
              <p>
                內文 舉例:親愛的用戶們，
                我們非常興奮地宣布，我們的全新鍵盤賣場現已正式上線！無論您是電競愛好者、專業打字者還是追求個性化的用戶，我們將為您提供最優質的鍵盤選擇，以滿足您對極致打字體驗的追求。
                在我們的鍵盤賣場中，您將發現各種類型的鍵盤，包括機械鍵盤、薄膜鍵盤和靜音鍵盤等等。無論您喜歡什麼類型的鍵盤，我們都有合適的選擇，以滿足您的需求。
                我們與頂尖品牌合作，為您提供最優質的產品。您可以找到知名品牌如Cherry、Razer、Corsair和Logitech等等。這些品牌以卓越的品質和出色的性能聞名於世，為您提供最佳的打字體驗。
                我們的鍵盤賣場致力於提供卓越的購物體驗和優質的客戶服務。我們的團隊將竭誠為您提供專業建議和協助，以確保您選擇到最適合您的鍵盤。
                此外，我們還提供各種不同的配件和個性化選項，以讓您的鍵盤獨一無二。您可以選擇各種款式的鍵帽、背光效果和線材，定制您的打字工具，展現您的獨特風格。
                別再猶豫了！立即訪問我們的鍵盤賣場，探索各種精選鍵盤和令人驚嘆的配件。我們保證您將獲得一個超越預期的打字體驗。
                期待為您提供最佳的鍵盤選擇！
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <img
                  src={
                    'https://www.inpad.com.tw/data/news/cover/1694604979854924778.jpg'
                  }
                  className="ArticleImg"
                  alt="..."
                />
              </p>
            </div>
            <div>123</div>
          </div>

          {/* 右側欄 */}
          <div className="col-4 ps-5">
            <div className="border-bottom border-2 border-dark mb-4">
              <h4 className="">文章分類</h4>
            </div>
            {/* 分類表 */}
            <div className="pb-5">
              <Link href="#" className="text-decoration-none">
                <div className="bg-white position-relative p-2">
                  <p className="text-secondary m-0">公告</p>
                  <div className="position-absolute end-0 top-50 translate-middle me-4">
                    <i className="fa-solid fa-circle-chevron-right fa-lg text-secondary"></i>
                  </div>
                </div>
              </Link>
              <Link href="#" className="text-decoration-none">
                <div className="bg-white position-relative p-2">
                  <p className="text-secondary m-0">開箱文</p>
                  <div className="position-absolute end-0 top-50 translate-middle me-4">
                    <i className="fa-solid fa-circle-chevron-right fa-lg text-secondary"></i>
                  </div>
                </div>
              </Link>
              <Link href="#" className="text-decoration-none">
                <div className="bg-white position-relative p-2">
                  <p className="text-secondary m-0">組裝教學</p>
                  <div className="position-absolute end-0 top-50 translate-middle me-4">
                    <i className="fa-solid fa-circle-chevron-right fa-lg text-secondary"></i>
                  </div>
                </div>
              </Link>
              <Link href="#" className="text-decoration-none">
                <div className="bg-white position-relative p-2">
                  <p className="text-secondary m-0">活動</p>
                  <div className="position-absolute end-0 top-50 translate-middle me-4">
                    <i className="fa-solid fa-circle-chevron-right fa-lg text-secondary"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* 感興趣列表 */}
            <div className="border-bottom border-2 border-dark mt-5 mb-5">
              <h4 className="fw-bold">你可能感興趣的文章</h4>
            </div>
            {/* 卡片與map函式 */}
            {data.map((item, index) => {
              return (
                <>
                  <Link href="#" className="text-decoration-none">
                    <div
                      className="row pb-2  border-bottom border-2 border-dark"
                      key={index}
                    >
                      <div className="col-md-4">
                        <img src={item.img} className="ArticleImg" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card border-0">
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text text-secondary">
                              {item.user}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
