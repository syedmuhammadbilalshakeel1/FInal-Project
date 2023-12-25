import subCategoryType from "../type/subcategories";

export function addSubCategory(data) {
    return {
        type: subCategoryType.ADD_SUBCATEGORY,
        payload: data,
      };
}

export function resetSubCategory() {
  return {
      type: subCategoryType.RESET_SUBCATEGORY,
    };
}