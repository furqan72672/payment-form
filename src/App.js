import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import PaymentMethod from "./components/PaymentMethod/PaymentMethod"
import Summary from "./components/Summary/Summary"

function App() {
	return (
		<div className="App">
			<div className="base">
				<PaymentMethod />
				<Summary />
			</div>
		</div>
	)
}

export default App
