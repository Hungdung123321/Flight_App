import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ButtonBig, StyledScrollView, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { IMG_BGflight } from '../../assets'
import { NUMCOLLUM, SEAT_TYPE } from '../../constants/common'
import { dummySeats } from '../../constants/dummydata'
import { DummySeatsLeft, DummySeatsRight } from '../../constants/helpers'
import { useNavigation } from '@react-navigation/native'
import SeatButton from '../../components/SeatButton'
import SeatType from '../../components/SeatType'
import { SCREEN_NAME } from '../../routes/routes'

const ChoseSeat = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return <SeatButton seatName={item.nameSeat} className={'mx-0.5'} />
    }

    return (
        <StyledView className='relative w-full pt-2 px-1.5 pb-1'>
            <StyledView className='flex-row items-center justify-around mb-1'>
                <SeatType type={SEAT_TYPE.SELECTED} />
                <SeatType type={SEAT_TYPE.EMPTY} />
                <SeatType type={SEAT_TYPE.RESERVED} />
            </StyledView>
            <IMG_BGflight />
            <StyledScrollView className='absolute top-15.5 left-3 right-3 bottom-0 h-22.5'>
                <StyledView className=' flex-row justify-between items-center'>
                    <FlatList
                        key={'_'}
                        data={DummySeatsLeft(dummySeats)}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={NUMCOLLUM}
                        ItemSeparatorComponent={() => <StyledView className='h-1' />}
                        contentContainerStyle={styles.ListLeftSeats}
                        scrollEnabled={false}
                    />
                    <FlatList
                        key={'*'}
                        data={DummySeatsRight(dummySeats)}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={NUMCOLLUM}
                        ItemSeparatorComponent={() => <StyledView className='h-1' />}
                        contentContainerStyle={styles.ListRightSeats}
                        scrollEnabled={false}
                    />
                </StyledView>
            </StyledScrollView>
            <ButtonBig
                text={'Comfirm'}
                classNameButton={'absolute w-20 bottom-4 self-center'}
                onPress={() => navigation.navigate(SCREEN_NAME.PAY_MENT)}
            />
        </StyledView>
    )
}

const styles = StyleSheet.create({
    ListSeatBg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    ListRightSeats: {
        alignSelf: 'flex-start',
    },
    ListRightSeats: {
        alignSelf: 'flex-end',
    }
})

export default ChoseSeat

{/* <StyledView className='flex-row w-full justify-between items-center'>
                        <FlatList
                            key={'_'}
                            data={DummySeatsLeft(dummySeats)}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={NUMCOLLUM}
                            ItemSeparatorComponent={() => <StyledView className='h-1' />}
                            scrollEnabled={false}
                        />
                        <FlatList
                            key={'*'}
                            data={DummySeatsRight(dummySeats)}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={NUMCOLLUM}
                            ItemSeparatorComponent={() => <StyledView className='h-1' />}
                            contentContainerStyle={styles.ListRightSeats}
                            scrollEnabled={false}
                        />
                    </StyledView> */}