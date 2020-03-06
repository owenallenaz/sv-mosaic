import * as React from "react";
import { useCallback, useMemo, memo } from "react";
import styled from "styled-components";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GridOnIcon from "@material-ui/icons/GridOn";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DataViewControlViewProps, DataViewControlViewOption } from "./DataViewTypes";
import Button from "../Button";
import { default as MenuSelect, MenuSelectProps } from "../MenuSelect";
import theme from "../../utils/theme";

const StyledSpan = styled.span`
	& .labelIcon {
		font-size: ${theme.iconFontSize};
	}
`

function DataViewControlView(props: DataViewControlViewProps) {
	const Icon = useMemo(() => {
		const Icon = props.view === "list" ? FormatListBulletedIcon : GridOnIcon;
		return <Icon className="labelIcon"/>
	}, [props.view]);

	const onChange = useCallback<MenuSelectProps["onChange"]>(function(val) {
		props.onViewChange(val as DataViewControlViewOption);
	}, [props.onViewChange]);

	const options = props.views.map(val => {
		if (val === "list") {
			return {
				mIcon : FormatListBulletedIcon,
				label : "List",
				value : "list"
			}
		} else if (val === "grid") {
			return {
				mIcon : GridOnIcon,
				label : "Grid",
				value : "grid"
			}
		}
	});

	const menuContent = (
		<MenuSelect
			options={options}
			onChange={onChange}
			value={props.view}
		/>
	)
	
	return (
		<StyledSpan>
			<Button
				variant="text"
				color="black"
				label={Icon}
				iconPosition="right"
				size="small"
				mIcon={ExpandMoreIcon}
				mIconColor={theme.colors.gray600}
				menuContent={menuContent}
			/>
		</StyledSpan>
	)
}

export default memo(DataViewControlView);