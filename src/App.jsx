// import { useEffect } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
]);
import "./App.css";

const App = () => {
	return (
		<div>
			<div className="flex relative dark:bg-main-dark-bg">
				<div
					className="fixed right-4 bottom-4"
					style={{ zIndex: "1000" }}
				>
					<TooltipComponent content="Settings" position="Top">
						<button>
							<FiSettings />
						</button>
					</TooltipComponent>
				</div>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
