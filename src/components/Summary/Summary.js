import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import "./Summary.css"

export default function Summary() {
	const plan = "Pro"
	const planPrice = 9.99
	const vat = 15
	const [total, setTotal] = useState(0)

	useEffect(() => {
		setTotal((planPrice + (planPrice * vat) / 100).toFixed(2))
	}, [])

	return (
		<div className="summary">
			<span>Summary</span>
			<Card>
				<Card.Body>
					<div className="align-opposite-sides">
						<Card.Text>{plan}(Billed Monthly)</Card.Text>
						<Card.Text className="bigger-card-text">
							${planPrice}
						</Card.Text>
					</div>
					<hr />
					<div className="align-opposite-sides">
						<Card.Text>VAT</Card.Text>
						<Card.Text className="bigger-card-text">
							+{vat}%
						</Card.Text>
					</div>
					<hr />
					<div className="align-opposite-sides">
						<Card.Text>Total</Card.Text>
						<Card.Text className="bigger-card-text">
							${total}
						</Card.Text>
					</div>
					<div className="align-opposite-sides">
						<button className="btn btn-primary">Pay Now</button>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}
