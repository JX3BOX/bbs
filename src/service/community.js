import { $next, $cms } from "@jx3box/jx3box-common/js/https";

// 获取分类
function getTopicBucket(params) {
    return $cms().get(`/api/cms/topic/bucket`, { params });
}
const API_PREFIX = `/api/next2`;

// 获取公开的讨论主题帖子列表
const getTopicList = (params) => {
    return $next().get(`${API_PREFIX}/community/discussion/topic/list`, { params });
};

// 获取帖子详情
function getTopicDetails(id) {
    return $next().get(`${API_PREFIX}/community/discussion/topic/item/${id}`);
}
// 获取帖子回复列表
function getTopicReplyList(id, params) {
    return $next().get(`${API_PREFIX}/community/discussion/topic/item/${id}/reply/list`, {
        params,
    });
}

// 主贴回帖
function replyTopic(id, data) {
    return $next().post(`${API_PREFIX}/community/discussion/topic/item/${id}/reply`, data);
}
// 主贴回帖的评论
function replyReply(id, replyId, data) {
    return $next().post(`${API_PREFIX}/community/discussion/topic/item/${id}/reply/item/${replyId}/comments`, data);
}
function getCommentsList(id, replyId, params) {
    return $next().get(`${API_PREFIX}/community/discussion/topic/item/${id}/reply/item/${replyId}/comments/list`, {
        params,
    });
}
export { getTopicList, getTopicBucket, getTopicDetails, getTopicReplyList, replyTopic, replyReply, getCommentsList };