import React, { useEffect, useState } from 'react'



const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false
}





const Payment = () => {
    const [paymentMethod , setPaymentMethod] = useState(initialPayment)
    const [updated , setUpdated] = useState()

    useEffect(() => {}, [setUpdated])
  return (
        <div>
            <h2>Pay With</h2>

            <div className="paymet-cards">
				<div
					className={`payment-card ${paymentMethod.zaad && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}>
					<h3>Zaad Service</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.evc && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialPayment, evc: true })}>
					<h3>Evc Plus</h3>
				</div>
				<div
					className={`payment-card ${paymentMethod.sahal && "selected"}`}
					onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}>
					<h3>Sahal</h3>
				</div>

            <form >
                <input
                    type="text"
                    className="form-control"
                    placeholder="2526..."
                />
                <button className="btn-proceed">
                    Proceed
                </button>
            </form>
        </div>
    </div>
  )
}

export default Payment