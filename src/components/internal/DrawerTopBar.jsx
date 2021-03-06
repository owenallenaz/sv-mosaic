import React from "react";
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';

import { H1 } from "../Typography";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import theme from "../../utils/theme.js";

const StyledWrapper = styled.div`
	& {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
	}
	
	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > h1 {
		display: inline;
		padding: 0px 50px 0px 20px;
		margin: 0;
		position: relative;
		top: -2px;
	}
`

function DrawerTopBar(props) {
	return (
		<StyledWrapper>
			<div className="left">
				<Button
					mIcon={CloseIcon}
					variant="icon"
					color="black"
					onClick={props.onClose}
				/>
				<H1>{props.title}</H1>
			</div>
			<div className="right">
				<ButtonRow>
					{
						props.onCancel &&
						<Button label="Cancel" color="black" variant="text" onClick={props.onCancel}/>
					}
					{
						props.onSave &&
						<Button label="Save" color="blue" variant="contained" onClick={props.onSave}/>
					}
					{
						props.onApply &&
						<Button label="Apply" color="blue" variant="contained" onClick={props.onApply}/>
					}
				</ButtonRow>
			</div>
		</StyledWrapper>
	)
}

export default DrawerTopBar;