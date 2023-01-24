import "./PaymentMethod.css"
import { Accordion, Form, Row, Col } from "react-bootstrap"

export default function PaymentMethod() {
	return (
		<div className="payment-method">
			<span>Payment Method</span>
			<div className="accordian-container">
				<Accordion
					defaultActiveKey="1"
					flush
				>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Paypal</Accordion.Header>
						<Accordion.Body>
							<Form.Control
								type="email"
								placeholder="Paypal email"
							/>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Credit Card</Accordion.Header>
						<Accordion.Body>
							<Form>
								<Row>
									<Col>
										<Form.Group>
											<Form.Label className="label">
												Card Number
											</Form.Label>
											<Form.Control
												type="number"
												placeholder="0000 0000 0000 0000"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col>
										<Form.Group>
											<Form.Label className="label">
												Expiry Date
											</Form.Label>
											<Form.Control
												type="number"
												placeholder="MM/YY"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Label className="label">
												CVC/CVV
											</Form.Label>
											<Form.Control
												type="number"
												placeholder="000"
											/>
										</Form.Group>
									</Col>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	)
}
