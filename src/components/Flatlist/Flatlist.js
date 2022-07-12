import React from 'react'
import { StyleSheet, FlatList as RNFlatList, RefreshControl, ActivityIndicator } from 'react-native'
import PropTypes from "prop-types";

import { hp } from '../../utils';
import { themeColor } from '../../style/Theme';

import Loader from '../Loader/Loader';
import { Text } from '../Text';


const Flatlist = ({
    handleLoadMore,
    handlePullToRefresh,
    pullToRefreshLoading = false,
    isLoading = true,
    ...props
}) => {

    const handleOnEndReached = (e) => {
        let paddingToBottom = hp(10) + e.nativeEvent.layoutMeasurement.height;
        let currentOffset = e.nativeEvent.contentOffset.y;
        let direction = currentOffset > e.offset ? 'down' : 'up';

        if (
            direction === 'up' &&
            e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom &&
            handleLoadMore && !isLoading
        ) {
            handleLoadMore()
        }
    }

    const onPullToRefresh = () => {
        if (handlePullToRefresh) {
            handlePullToRefresh()
        }
    }

    const RenderLoading = () => {
        return (
            <>
                {
                    isLoading ?
                        <Loader size={25} />
                        : <></>
                }
            </>
        )
    }

    const RenderEmptyComponent = () => {
        return (
            <>
                {
                    !isLoading ?
                        <Text centered bold color={themeColor.whiteColor}>No Record found</Text>
                        : <></>
                }
            </>
        )
    }

    return (
        <RNFlatList
            ListFooterComponent={RenderLoading}
            ListEmptyComponent={RenderEmptyComponent}
            onScroll={handleOnEndReached}
            refreshControl={
                <RefreshControl
                    refreshing={pullToRefreshLoading}
                    onRefresh={onPullToRefresh}
                />
            }
            {...props}
        />
    )
}

export default Flatlist;

Flatlist.propTypes = {
    data: PropTypes.array,
    renderItem: PropTypes.func,
    handleLoadMore: PropTypes.func,
    pullToRefreshLoading: PropTypes.bool,
    handlePullToRefresh: PropTypes.func,
    isLoading: PropTypes.bool
}

const styles = StyleSheet.create({})