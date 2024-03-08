import { render } from "@testing-library/react";

import NavBar from "./";

const setup = (props = {}) => {
	const defaultProps = {};
	const setupProps = { ...defaultProps, ...props };

	const view = render(<NavBar {...setupProps} />);

	return { ...view };
};

describe("NavBar", () => {
	it("should render", () => {
		const { container } = setup();

		expect(container).toBeInTheDocument();
	});
});