import { useEffect, useMemo, useState } from "react"
import { Card, Form } from "react-bootstrap"
import "./Summary.css"

export default function Summary() {

	const plans=[
		{id:1, name:'Basic Tier',description:'Get Started with our most basic plan and unlock the magic. Only pay for what you use',price:10.00},
		{id:2, name:'Pro Tier',description:'Get your idea out there in the way you want it. Start with the pro plan for the ultimate tool.',price:25.00},
		{id:3, name:'Enterprise Tier',description:'The ultimate productive tool for your teams daily workload or for yourself. Create Software in Minutes. Focus more on deployment and less on typing.',price:50.00},
	]

	// const [total, setTotal] = useState(0)
	const [selectedPlan,setSelectedPlan]=useState('')
	const vat=15


	const total=useMemo(()=>{
		if(!selectedPlan) return 0
		return (selectedPlan.price+(selectedPlan.price*vat/100))
	},[selectedPlan])

	function handleSelect(e){
		setSelectedPlan((plans.filter((plan)=>plan.id==e.target.value)[0]))
	}

	return (
		<div className="summary">
			<span>Summary</span>
			<Card>
				<Card.Body>
					<div className="align-opposite-sides">
						<Form.Select onChange={handleSelect} defaultValue="0">
							<option disabled value="0">Select a plan</option>
							{plans.map((plan)=>(<option key={plan.id} value={plan.id}>{plan.name}</option>))}
						</Form.Select>
					</div>
					<hr />
					{selectedPlan?<>
						<div style={{margin:'0 20px'}}>
						<Card.Text style={{margin:'0 0 10px 0'}}>
							Description
						</Card.Text>
							<Card.Text style={{fontSize:13, textAlign:'justify', margin:'0 8px 0'}}>{selectedPlan.description}</Card.Text>
						</div>
						<hr />
					</>:null}
					<div className="align-opposite-sides">
						<Card.Text>{selectedPlan?selectedPlan.name+' (Billed Monthly)':'Please choose a plan first'}</Card.Text>
						<Card.Text className="bigger-card-text">
							{selectedPlan?'$'+selectedPlan.price:''}
						</Card.Text>
					</div>
					<hr />
					
					<div className="align-opposite-sides">
						<Card.Text>VAT</Card.Text>
						<Card.Text className="bigger-card-text">
							{selectedPlan?`+${vat}%`:''}
						</Card.Text>
					</div>
					<hr />
					<div className="align-opposite-sides">
						<Card.Text>Total</Card.Text>
						<Card.Text className="bigger-card-text">
							{selectedPlan?`$${total}`:''}
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
