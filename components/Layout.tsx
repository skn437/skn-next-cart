import NavBar from "./NavBar";

interface ChildrenType {
	children: JSX.Element;
}

const Layout: React.FC<ChildrenType> = ({ children }) => {
	return (
		<div>
			<NavBar></NavBar>

			{children}
		</div>
	);
};

export default Layout;
