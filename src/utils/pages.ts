export const getPageCount = (totalCount: number, limit: string) => {
  return Math.ceil(totalCount / Number(limit));
};

export const getPagesArray = (totalPages: number) => {
  const result = [];

  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};
