/**
 *
 */
const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${yyyy}-${mm}-${dd}`;
}

const yymmdd = getYymmdd(new Date());
const yymmdd170909 = getYymmdd(new Date(2017, 9 - 1, 9));
console.log(yymmdd);
console.log(yymmdd170909);