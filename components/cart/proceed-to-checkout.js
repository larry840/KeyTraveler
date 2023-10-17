import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/use-cart'
import { useThirdCart } from '@/hooks/useThirdCart'
import { useSecondCart } from '@/hooks/useSecondCart'

export default function ProceedToCheckout({
  orderTotalAll,
  orderAmountAll,
  onCheckout,
}) {
  // const { priceData, setPrice } = useCartContext()
  const { coupon, getCoupon } = useAuth()
  useEffect(() => {
    getCoupon()
  }, [])
  console.log(coupon)
  const initialCoupons = [
    {
      id: 1,
      name: '全站9折',
      percent: 0.9,
    },
    {
      id: 2,
      name: '全站85折',
      percent: 0.85,
    },
    {
      id: 3,
      name: '全站8折',
      percent: 0.8,
    },
  ]
  const [coupons, setcoupons] = useState(initialCoupons)
  const [selectedCoupon, setSelectedCoupon] = useState('')

  const { cartTotalP: totalPriceP, selectItemsP: totalItemsP } = useCart()
  const { cartTotalG: totalPriceG, selectItemsG: totalItemsG } = useThirdCart()
  const { cartTotalR: totalPriceR, selectItemsR: totalItemsR } = useSecondCart()

  const handleCouponDeselect = () => {
    setSelectedCoupon('')
  }
  const handleCouponSelect = (couponName) => {
    setSelectedCoupon(couponName)
  }
  return (
    <>
      {/* 去結帳 */}
      <div className="my-4">
        <div className="pb-2">
          <span className="fs-6">
            使用優惠券(限一般商品):
            <span
              className="ps-3"
              style={{ width: '90px', display: 'inline-block' }}
              id="coupon"
            >
              {selectedCoupon}
            </span>
          </span>
          <div className="btn-group ms-3 ">
            <button
              className="btn btn-sm border-primary text-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              選擇優惠券
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="btn dropdown-item"
                  onClick={() => {
                    handleCouponDeselect()
                  }}
                >
                  無
                </button>
              </li>
              {coupons.map((v) => (
                <li key={v.id}>
                  <button
                    className="btn dropdown-item"
                    onClick={() => {
                      handleCouponSelect(v.name)
                    }}
                  >
                    {v.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-danger">
          P.S.若商品種類(一般、團購、租用)相同，產品數量多且收件地址不同需分開結帳！！
        </div>
        <div className="text-end">
          <span className="align-middle">
            共
            <span className="orderAmount">
              {totalItemsP + totalItemsG + totalItemsR}
            </span>
            件商品, 總金額: $
            <span className="orderTotal">
              {totalPriceP + totalPriceG + totalPriceR}
              {/* {priceData} */}
              {/* {allCartsTotal} */}
            </span>
          </span>
          <a
            href="#"
            className="btn btn-primary text-white ms-2 px-3 py-2"
            onClick={onCheckout}
          >
            去結帳
          </a>
        </div>
      </div>
    </>
  )
}