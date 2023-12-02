import { NAME_SEATS_EACH_ROW } from "./common";
import { dummySeats } from "./dummydata";


export const DummySeatsLeft = (data) => {
    const array = data;
    const newArr = [];

    array.forEach((item) => {
        if (item?.nameSeat.includes(NAME_SEATS_EACH_ROW.SEAT_FIST) ||
            item?.nameSeat.includes(NAME_SEATS_EACH_ROW.SEAT_SECOND)
        ) {
            newArr.push(item);
        }
    })
    return newArr
}

export const DummySeatsRight = (data) => {
    const array = data;
    const newArr = [];

    array.forEach((item) => {
        if (item?.nameSeat.includes(NAME_SEATS_EACH_ROW.SEAT_THIRD) ||
            item?.nameSeat.includes(NAME_SEATS_EACH_ROW.SEAT_FOUR)
        ) {
            newArr.push(item);
        }
    })
    return newArr
}


