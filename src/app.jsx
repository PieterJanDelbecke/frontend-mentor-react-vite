import { BrowserRouter, Routes, Route } from "react-router-dom";

import Global from "./styles/GlobalStyles"
import MainPage from "./components/MainPage";

function App() {
	return (
		<>
    <Global />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
