export interface AdminProductsTableProps {
    data: any[];
    selectedItems: string[];
    onSelect: (isChecked: boolean, id: string) => void;
    onSelectAll: (isChecked: boolean) => void;
}
