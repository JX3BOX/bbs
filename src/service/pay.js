import { $pay } from "@jx3box/jx3box-common/js/https"

export const getHistorySummary = (postType, postId) => {
    return $pay().get(`/api/inspire/article/${postType}/${postId}/history/summary`)
}
