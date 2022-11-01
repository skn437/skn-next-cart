const currencyFormatter = new Intl.NumberFormat(undefined, {
	currency: "USD",
	style: "currency",
});

const formatCurrency = (num: number) => {
	const format = currencyFormatter.format(num);

	return format;
};

export default formatCurrency;
