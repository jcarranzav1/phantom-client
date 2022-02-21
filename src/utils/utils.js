export const FilterProductCategory = (data, type) =>
  data.filter((product) => product.category.toLowerCase() === type);

export const FilterProductSearch = (data, search) =>
  data.filter(
    (product) =>
      product.category.includes(search.split(' ')) ||
      product.model.toLowerCase().includes(search.split(' ')),
  );

export const SortProducts = (data, order) => {
  const arr = [...data];
  if (order === 'asc') {
    return arr.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  }
  if (order === 'desc')
    return arr.sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  return data;
};

/* data.filter((car) => {
    if (make.includes('_')) {
      make = make.replace('_', ' ');
    }
    return car.make.toLowerCase() === make;
  }); */

export const FilterCarsBySeats = (data, seats) => data.filter((car) => car.seats >= seats);
export const FilterIsRented = (data) => data.filter((car) => !car.isRented);
