interface reqQquery {
    width: number;
    height: number;
}

const checkValues = (arr: unknown[], values: unknown[]): boolean => {
    return arr.every((value) => values.indexOf(value) !== -1);
  };

const checkValuesNumbers = (arr: unknown[]): boolean => {
    return arr.every((value) => Number.isInteger(value));
};

const checkValid = (query: reqQquery): boolean => {
    const values: string[] = ['name', 'width', 'height'];
    const valuesQuery: string[] = Object.keys(query);
    const checkWidthAndHeight: number[] = [Number(query.width), Number(query.height)];
    return checkValues(values , valuesQuery ) && checkValuesNumbers(checkWidthAndHeight);
};

export  { checkValid, reqQquery };