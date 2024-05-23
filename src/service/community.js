import { $next, $cms } from "@jx3box/jx3box-common/js/https";
import axios from "axios";
const API_PREFIX = `/api/next2`;
const gs_url = process.env.NODE_ENV === "development" ? "" : "https://gs.jx3box.com";
// 获取分类
function getTopicBucket(params) {
    return $cms().get(`/api/cms/topic/bucket`, { params });
}

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

// 回复主贴
function replyTopic(id, data) {
    return $next().post(`${API_PREFIX}/community/discussion/topic/item/${id}/reply`, data);
}
// 删除回贴
function delReply(id) {
    return $next().delete(`${API_PREFIX}/community/discussion/my/reply/item/${id}`);
}

// 删除评论
function delComment(id) {
    return $next().delete(`${API_PREFIX}/community/discussion/my/comment/item/${id}`);
}

// 主贴回帖的评论
function replyReply(id, replyId, data) {
    return $next().post(`${API_PREFIX}/community/discussion/topic/item/${id}/reply/item/${replyId}/comments`, data);
}

/**
 * 获取评论列表
 * @param {*} id
 * @param {*} replyId
 * @param {*} params
 * @returns
 */
function getCommentsList(id, replyId, params) {
    return $next().get(`${API_PREFIX}/community/discussion/topic/item/${id}/reply/item/${replyId}/comments/list`, {
        params,
    });
}
/**
 * 屏蔽用户
 * @param {*} userId
 * @returns
 */
function addBlock(userId) {
    return $next().post(`/api/my-userlist/deny/${userId}`);
}

/**
 * 提交反馈
 * @param {*} data
 */
function feedback(data) {
    return $next().post(`/api/miscfeedback`, data);
}

function globalSearch(params) {
    return axios.get(`${gs_url}/api/search`, {
        params: params,
    });
}

export {
    globalSearch,
    getTopicList,
    getTopicBucket,
    getTopicDetails,
    getTopicReplyList,
    replyTopic,
    replyReply,
    getCommentsList,
    delReply,
    delComment,
    addBlock,
    feedback,
};
