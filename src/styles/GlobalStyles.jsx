import { Global, css } from "@emotion/react";
import reset from "./reset";

export default () => (
	<Global
		styles={css`
			${reset}
			body {
				font-family: "Epilogue", sans-serif;
				font-size: 18px;
				background-color: hsl(0, 0%, 98%);
			}
		`}
	/>
);

