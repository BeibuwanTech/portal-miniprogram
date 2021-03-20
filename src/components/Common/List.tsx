// import React, { useState, useContext, useEffect } from '@tarojs/taro'
// import { View, Text, ScrollView } from '@tarojs/components'
// import { AtList, AtListItem, AtLoadMore, AtActionSheet, AtActionSheetItem } from 'taro-ui'

// interface Props {
    
// }

// const Index: React.FC<Props> = (props) => {
//     const appContext = useContext()
//     const [data, setData] = useState<any[]>([])
//     const [page, setPage] = useState<Page>(fetchPage ? fetchPage : { current: 0, size: 10 })
//     const [action, setAction] = useState<{ status: boolean, _id?: string }>({ status: false })
//     const [moreStatus, setMoreStatus] = useState<'more' | 'loading' | 'noMore'>('more')

//     useEffect(() => {
//         const fetchData = async (fetchParams: FetchParams, fetchPage: Page) => {
//             onToast?.(LoadingToast)
//             const data = await getData(fetchParams, fetchPage, appContext)
//             const total = await getDataCount(fetchParams, appContext)
//             setData(data)
//             setPage({ ...page, total })
//             onPageChange?.({ ...page, total })
//             Math.floor(total / page.size) == page.current ? setMoreStatus('noMore') : setMoreStatus('more')
//             onToast?.(InitToast)
//         }
//         fetchData(fetchParams, page)
//     }, [fetchParams])

//     return (
//         <>
//             { removeById ?
//                 <AtActionSheet
//                     isOpened={action.status}
//                     onCancel={() => { setAction({ status: false }) }}
//                     onClose={() => { setAction({ status: false }) }}
//                     cancelText='取消'
//                     title='您确定要删除吗?'
//                 >
//                     <AtActionSheetItem
//                         onClick={async () => {
//                             await removeById?.(action._id as string)
//                             const index = data.findIndex(item => item._id == action._id)
//                             if (index != null && index != -1) data.splice(index, 1)
//                             setData(data)
//                             setAction({ status: false })
//                         }}
//                     >
//                         <Text style={{ color: '#FF4949' }}>确认删除!</Text>
//                     </AtActionSheetItem>
//                 </AtActionSheet>
//                 : null
//             }
//             <ScrollView
//                 style={height ? { height } : {}}
//                 scrollY
//                 scrollWithAnimation>
//                 <AtList hasBorder={false}>
//                     {
//                         data.map(
//                             (item: any) => {
//                                 return <View
//                                     key={item._id}
//                                     onLongPress={() => { setAction({ status: true, _id: item._id }) }}
//                                 >
//                                     <AtListItem
//                                         key={item._id}
//                                         title={item.name}
//                                         note={itemNote(item)}
//                                         extraText={itemExtraText ? itemExtraText(item) : '详细信息'}
//                                         arrow='right'
//                                         iconInfo={{ size: 30, color: '#78A4FA', value: itemIconInfoValue, }}
//                                         onClick={() => { itemOnClick(item) }}
//                                     />
//                                 </View>
//                             }
//                         )
//                     }
//                 </AtList>
//                 <AtLoadMore
//                     customStyle={{ height: 60 }}
//                     moreBtnStyle={{ opacity: 0.6, fontSize: 15, border: 'none' }}
//                     moreText='点击加载更多'
//                     onClick={async () => {
//                         const nextPage = { ...page, current: page.current + 1 }
//                         const res = await getData(fetchParams, nextPage, appContext)
//                         res.length != 0 ?
//                             setData(data.concat(res))
//                             :
//                             setMoreStatus('noMore')
//                         setPage(nextPage)
//                         onPageChange?.(nextPage)
//                     }}
//                     noMoreText='没有更多数据了'
//                     noMoreTextStyle={{ opacity: 0.6, fontSize: 15 }}
//                     status={moreStatus}
//                 />
//             </ScrollView>
//         </>
//     )
// }

// export default Index