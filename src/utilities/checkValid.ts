interface reqQquery {
    width: number;
    height: number;
}

const checkValuesNumbers = (arr: unknown[]): boolean => {
    return arr.every((value) => Number.isInteger(value));
};

const checkValid = (query: reqQquery): boolean => {
    const checkWidthAndHeight: number[] = [Number(query.width), Number(query.height)];
    return checkValuesNumbers(checkWidthAndHeight);
};

export  { checkValid, reqQquery };