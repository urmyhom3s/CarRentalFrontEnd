'use client'
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addReservation } from "@/redux/features/cartSlice"
import { ReservationItem } from "../../../interface"
import LocationDateReserve from "@/components/LocationDateReserve"
import dayjs, { Dayjs } from "dayjs"                              // ✅ Dayjs ไม่ใช่ AdapterDayjs

export default function Reservations() {
  const urlParams = useSearchParams()
  const cid   = urlParams.get('id')
  const model = urlParams.get('model')

  const dispatch = useDispatch<AppDispatch>()                     // ✅ เพิ่ม dispatch

  const [pickupDate,     setPickupDate]     = useState<Dayjs|null>(null)   // ✅ type ถูก
  const [pickupLocation, setPickupLocation] = useState<string>("BKK")
  const [returnDate,     setReturnDate]     = useState<Dayjs|null>(null)   // ✅ type ถูก
  const [returnLocation, setReturnLocation] = useState<string>("BKK")

  const makeReservation = () => {                                 // ✅ เพิ่ม function
    if (cid && model && pickupDate && returnDate) {
      const item: ReservationItem = {
        carId:          cid,
        carModel:       model,
        numOfDays:      returnDate.diff(pickupDate, 'day'),
        pickupDate:     dayjs(pickupDate).format("YYYY/MM/DD"),
        pickupLocation,
        returnDate:     dayjs(returnDate).format("YYYY/MM/DD"),
        returnLocation
      }
      dispatch(addReservation(item))
    }
  }

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="text-xl font-medium">Car {model}</div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve                                      // ✅ ส่ง props
          onDateChange={(value: Dayjs) => setPickupDate(value)}
          onLocationChange={(value: string) => setPickupLocation(value)}
        />

        <div className="text-md text-left text-gray-600">
          Return Date and Location
        </div>
        <LocationDateReserve                                      // ✅ ส่ง props
          onDateChange={(value: Dayjs) => setReturnDate(value)}
          onLocationChange={(value: string) => setReturnLocation(value)}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
          shadow-sm text-white"
        onClick={makeReservation}>                                {/* ✅ เพิ่ม onClick */}
        Reserve this Car
      </button>
    </main>
  )
}