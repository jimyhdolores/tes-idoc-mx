export const filterList = <Type>(
	id: number,
	listFilter: Type[],
	listBackup: Type[],
	attribute: string
): Type[] => {
	if (id === 0) {
		listFilter = [...listBackup];
	} else {
		listFilter = [...listBackup];
		listFilter = listFilter.filter((item) => item[attribute] == id);
	}

	return listFilter;
};
