import * as React from "react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

export { default as KitchenSink } from "./ButtonKitchenSink";
import StoryBookError from "../StoryBookError";
import Button from "../Button";

export default {
	title : "Components|Button",
	decorators : [withKnobs]
}

export const ButtonPlayground = (props: any) => {
	const buttonVariant = select("Variant", ["text", "outlined", "contained"], "text");
	const buttonColor = select("Color", ["black", "blue", "lightBlue", "red"], "black");
	const fullWidth = boolean("Full Width", false);
	const disabled = boolean("Disabled", false);

	return (
		<StoryBookError>
			<Button
				label="Test"
				variant={buttonVariant}
				color={buttonColor}
				fullWidth={fullWidth}
				disabled={disabled}
			/>
		</StoryBookError>
	)
}