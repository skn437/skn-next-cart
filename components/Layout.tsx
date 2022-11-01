import NavBar from "./NavBar";

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar></NavBar>

			{children}
		</div>
	);
};

export default Layout;
