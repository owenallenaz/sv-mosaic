import { MosaicObject, MosaicMIcon } from "../../types";
import { ButtonProps } from "../Button";

export interface DataViewColumnTransformArgs {
	/** The value of the specific column that is being transformed */
	data: any
	/** The whole row as passed to the original DataView */
	row: MosaicObject[]
}

export interface DataViewColumnTransform {
	(args: DataViewColumnTransformArgs): any
}

export interface DataViewColumn {
	/** The name of the column */
	name: string
	/**  Displayed label for the column */
	label?: string
	/** The column from the passed RowData it will display in this column. Defaults to `column.name`. */
	column?: string
	/** Whether this column can be sorted */
	sortable?: boolean
	transforms?: DataViewColumnTransform[]
}

export type DataViewFilterTypes = "optional" | "primary";
export interface DataViewFilterOnChange {
	(value: any): void
}

export interface DataViewFilterDef {
	name: string
	label: string
	type: DataViewFilterTypes
	args: object
	component: any
	column: string
	onChange: DataViewFilterOnChange
}

export interface DataViewFilterProps {
	label: string
	type: DataViewFilterTypes
	args: object
	data: object
	onRemove: () => void
}

export interface DataViewControlLimitProps {
	limit: number
	options: number[]
	onLimitChange({ limit }: { limit: number }): void
}

export type DataViewControlViewOption = "list" | "grid";

export interface DataViewControlDisplayProps {
	display: string
	displayOptions: DataViewDisplay[]
	onDisplayChange(display: string): void
}

interface DataViewActionShow {
	({ row }: { row : MosaicObject }): void
}

interface DataViewActionOnClick {
	({ data }: { data: MosaicObject }): void
}

interface DataViewBulkActionOnClick {
	({ data }: { data: MosaicObject[] }): void
}

export interface DataViewAction {
	name: string
	onClick: DataViewActionOnClick
	show?: boolean | DataViewActionShow
	label?: ButtonProps["label"]
	color?: ButtonProps["color"]
	variant?: ButtonProps["variant"]
	mIcon?: ButtonProps["mIcon"]
}

export interface DataViewBulkAction extends DataViewAction {
	onClick: DataViewBulkActionOnClick
}

export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[]
	data: MosaicObject[]
	checked: boolean[]
}

export interface DataViewDisplay {
	name: string
	label: string
	component: React.Component
	mIcon: MosaicMIcon
}

export interface DataViewSort {
	name: string
	dir: "asc" | "desc"
}

export interface DataViewOnSortChange {
	(sort: DataViewSort): void
}