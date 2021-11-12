const HU = {
    date(date){
        date = new Intl.DateTimeFormat('hu-Hu').format(date);
        return date;
    },

    currency(num){
        const hufCurrency = new Intl.NumberFormat('hu-Hu', {
            style: 'currency',
            currency: 'HUF'
        })
        return hufCurrency.format(num);
    },

    list(arr){
        return `${arr[0]}, ${arr[1]} és ${arr[2]}`;
    }
};

// export default HU
export default HU;