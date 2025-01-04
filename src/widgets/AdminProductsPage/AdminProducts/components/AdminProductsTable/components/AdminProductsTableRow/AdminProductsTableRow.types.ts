export interface AdminProductsTableRowProps {
    row: any;
    selectedItems: string[];
    handleSelectItem: (isChecked: boolean, id: string) => void;
    onDelete: (ids: string[]) => void;
    onToggle: ({ isActive, ids }: { isActive: boolean; ids: string[] }) => void;
}
