export interface AdminCategoriesTableProps {
    data: any[];
    selectedItems: string[];
    onSelect: (isChecked: boolean, id: string) => void;
    onSelectAll: (isChecked: boolean) => void;
}
