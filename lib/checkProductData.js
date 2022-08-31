const checkIsSlicePresent = (arr, strToCheck) => {
    const filter = arr.filter((item) => {
        if (item.slice_type === strToCheck) {
            return item;
        }
    });

    const obj =
        filter.length > 0
            ? { item: filter[0], isPresent: true }
            : { item: {}, isPresent: false };

    return obj;
};

export default checkIsSlicePresent;
