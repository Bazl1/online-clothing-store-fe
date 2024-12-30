export interface AdminProductsTableRowProps {
    row: any;
    selectedItems: string[];
    handleSelectItem: (isChecked: boolean, id: string) => void;
}
